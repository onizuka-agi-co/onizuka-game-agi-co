import { readFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_TARGET = 'docs/onizuka-game-agi-company-layers.drawio.svg';
const EPSILON = 0.5;
const BOX_INTERIOR_THRESHOLD = 8;
const MAX_OBSTACLE_AREA = 100_000;
const MAX_OBSTACLE_WIDTH = 420;
const MAX_OBSTACLE_HEIGHT = 240;
const TEXT_OVERFLOW_TOLERANCE = 4;
const DEFAULT_TEXT_PADDING = 16;
const MIN_BORDER_OVERLAP_LENGTH = 12;
const MAX_BORDER_CLEARANCE = 6;
const MIN_TERMINAL_SEGMENT_LENGTH = 20;
const TERMINAL_SEGMENT_NOISE_TOLERANCE = 1;
const MIN_TERMINAL_SPACING = 16;
const MAX_TERMINAL_SIDE_DISTANCE = 24;
const LABEL_INTERIOR_THRESHOLD = 1;
const LABEL_BOX_PADDING = 2;
const LABEL_RECT_OVERLAP_AREA_THRESHOLD = 24;
const COMPACT_TEXT_MAX_WIDTH = 280;
const COMPACT_TEXT_MAX_HEIGHT = 110;
const COMPACT_TEXT_MAX_FONT_SIZE = 15;
const COMPACT_TEXT_MIN_LINES = 3;
const COMPACT_TEXT_WIDTH_RATIO_THRESHOLD = 0.68;
const COMPACT_TEXT_HEIGHT_RATIO_THRESHOLD = 0.72;
const FRAME_CELL_ID_PATTERN = /(?:^|[-_])frame(?:[-_]|$)/i;

function parseAttributes(source) {
  const attributes = {};

  for (const match of source.matchAll(/([:\w-]+)="([^"]*)"/g)) {
    attributes[match[1]] = match[2];
  }

  return attributes;
}

function parseStyle(styleText = '') {
  const style = {};

  for (const declaration of styleText.split(';')) {
    const trimmed = declaration.trim();
    if (!trimmed) {
      continue;
    }

    const separatorIndex = (() => {
      const equalsIndex = trimmed.indexOf('=');
      const colonIndex = trimmed.indexOf(':');

      if (equalsIndex === -1) {
        return colonIndex;
      }

      if (colonIndex === -1) {
        return equalsIndex;
      }

      return Math.min(equalsIndex, colonIndex);
    })();

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (key) {
      style[key] = value;
    }
  }

  return style;
}

function getPaint(attributes, name) {
  if (attributes[name]) {
    return attributes[name];
  }

  const style = parseStyle(attributes.style);
  return style[name];
}

function isNone(value) {
  return value === undefined || value === null || value === '' || value === 'none';
}

function normalizePaint(value) {
  return String(value ?? '').trim().toLowerCase();
}

function parseHexColor(value) {
  const normalized = normalizePaint(value);

  if (!normalized.startsWith('#')) {
    return null;
  }

  if (normalized.length === 4) {
    return {
      r: Number.parseInt(normalized.slice(1, 2).repeat(2), 16),
      g: Number.parseInt(normalized.slice(2, 3).repeat(2), 16),
      b: Number.parseInt(normalized.slice(3, 4).repeat(2), 16),
    };
  }

  if (normalized.length === 7) {
    return {
      r: Number.parseInt(normalized.slice(1, 3), 16),
      g: Number.parseInt(normalized.slice(3, 5), 16),
      b: Number.parseInt(normalized.slice(5, 7), 16),
    };
  }

  return null;
}

function isDarkPaint(value) {
  const color = parseHexColor(value);

  if (!color) {
    return false;
  }

  const toLinear = (channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  const luminance = (
    (0.2126 * toLinear(color.r))
    + (0.7152 * toLinear(color.g))
    + (0.0722 * toLinear(color.b))
  );

  return luminance <= 0.2;
}

function isWhiteLikeFill(fill) {
  const normalized = normalizePaint(fill);
  return normalized === '' || normalized === '#fff' || normalized === '#ffffff' || normalized === 'white';
}

function parseTranslate(transformText = '') {
  const match = transformText.match(/translate\(\s*([-\d.]+)(?:[\s,]+([-\d.]+))?\s*\)/i);

  if (!match) {
    return { x: 0, y: 0 };
  }

  return {
    x: Number(match[1]),
    y: Number(match[2] ?? 0),
  };
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function decodeXmlEntities(text = '') {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&amp;/g, '&');
}

function parsePathData(d, offset) {
  const tokens = d.match(/[MLZmlz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [];
  const segments = [];

  let index = 0;
  let command = null;
  let current = null;
  let start = null;

  function readPoint(relative) {
    const x = Number(tokens[index++]);
    const y = Number(tokens[index++]);

    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return null;
    }

    if (!current) {
      return {
        x: x + offset.x,
        y: y + offset.y,
      };
    }

    if (!relative) {
      return {
        x: x + offset.x,
        y: y + offset.y,
      };
    }

    return {
      x: current.x + x,
      y: current.y + y,
    };
  }

  while (index < tokens.length) {
    const token = tokens[index];

    if (/^[MLZmlz]$/.test(token)) {
      command = token;
      index += 1;
    }

    if (!command) {
      throw new Error(`Unsupported or malformed path: ${d}`);
    }

    if (command === 'M' || command === 'm') {
      const firstPoint = readPoint(command === 'm');

      if (!firstPoint) {
        break;
      }

      current = firstPoint;
      start = firstPoint;

      while (index < tokens.length && !/^[MLZmlz]$/.test(tokens[index])) {
        const point = readPoint(command === 'm');

        if (!point) {
          break;
        }

        segments.push({ start: current, end: point });
        current = point;
      }

      command = command === 'm' ? 'l' : 'L';
      continue;
    }

    if (command === 'L' || command === 'l') {
      while (index < tokens.length && !/^[MLZmlz]$/.test(tokens[index])) {
        const point = readPoint(command === 'l');

        if (!point) {
          break;
        }

        segments.push({ start: current, end: point });
        current = point;
      }

      continue;
    }

    if (command === 'Z' || command === 'z') {
      if (current && start) {
        segments.push({ start: current, end: start });
        current = start;
      }

      command = null;
    }
  }

  return segments;
}

function approximatelyEqual(a, b, epsilon = EPSILON) {
  return Math.abs(a - b) <= epsilon;
}

function samePoint(a, b, epsilon = EPSILON) {
  return approximatelyEqual(a.x, b.x, epsilon) && approximatelyEqual(a.y, b.y, epsilon);
}

function subtract(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}

function cross(a, b) {
  return (a.x * b.y) - (a.y * b.x);
}

function dot(a, b) {
  return (a.x * b.x) + (a.y * b.y);
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function segmentLength(segment) {
  return distance(segment.start, segment.end);
}

function segmentBounds(segment) {
  return {
    minX: Math.min(segment.start.x, segment.end.x),
    maxX: Math.max(segment.start.x, segment.end.x),
    minY: Math.min(segment.start.y, segment.end.y),
    maxY: Math.max(segment.start.y, segment.end.y),
  };
}

function boundsOverlap(a, b, epsilon = EPSILON) {
  return !(
    a.maxX < (b.minX - epsilon)
    || a.minX > (b.maxX + epsilon)
    || a.maxY < (b.minY - epsilon)
    || a.minY > (b.maxY + epsilon)
  );
}

function expandBounds(bounds, padding) {
  return {
    minX: bounds.minX - padding,
    maxX: bounds.maxX + padding,
    minY: bounds.minY - padding,
    maxY: bounds.maxY + padding,
  };
}

function rectBounds(rect) {
  return {
    minX: rect.x,
    maxX: rect.x + rect.width,
    minY: rect.y,
    maxY: rect.y + rect.height,
  };
}

function rangeOverlapLength(startA, endA, startB, endB) {
  const minA = Math.min(startA, endA);
  const maxA = Math.max(startA, endA);
  const minB = Math.min(startB, endB);
  const maxB = Math.max(startB, endB);
  const overlapStart = Math.max(minA, minB);
  const overlapEnd = Math.min(maxA, maxB);
  return Math.max(0, overlapEnd - overlapStart);
}

function findSegmentRectBorderContacts(segment, rect) {
  if (isNone(rect.stroke)) {
    return [];
  }

  const contacts = [];
  const horizontal = approximatelyEqual(segment.start.y, segment.end.y);
  const vertical = approximatelyEqual(segment.start.x, segment.end.x);
  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;

  if (horizontal) {
    const y = (segment.start.y + segment.end.y) / 2;
    const overlapLength = rangeOverlapLength(segment.start.x, segment.end.x, rect.x, right);

    if (overlapLength >= MIN_BORDER_OVERLAP_LENGTH) {
      for (const side of ['top', 'bottom']) {
        const borderY = side === 'top' ? rect.y : bottom;
        const offset = Math.abs(y - borderY);

        if (offset > MAX_BORDER_CLEARANCE) {
          continue;
        }

        contacts.push({
          side,
          length: overlapLength,
          offset,
          relation: offset <= EPSILON ? 'overlap' : 'clearance',
        });
      }
    }
  }

  if (vertical) {
    const x = (segment.start.x + segment.end.x) / 2;
    const overlapLength = rangeOverlapLength(segment.start.y, segment.end.y, rect.y, bottom);

    if (overlapLength >= MIN_BORDER_OVERLAP_LENGTH) {
      for (const side of ['left', 'right']) {
        const borderX = side === 'left' ? rect.x : right;
        const offset = Math.abs(x - borderX);

        if (offset > MAX_BORDER_CLEARANCE) {
          continue;
        }

        contacts.push({
          side,
          length: overlapLength,
          offset,
          relation: offset <= EPSILON ? 'overlap' : 'clearance',
        });
      }
    }
  }

  return contacts;
}

function intersectionRect(a, b) {
  const minX = Math.max(a.x, b.x);
  const minY = Math.max(a.y, b.y);
  const maxX = Math.min(a.x + a.width, b.x + b.width);
  const maxY = Math.min(a.y + a.height, b.y + b.height);

  if (maxX <= minX || maxY <= minY) {
    return null;
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

function rectContainsRect(outer, inner, epsilon = EPSILON) {
  return (
    inner.x >= outer.x - epsilon
    && inner.y >= outer.y - epsilon
    && (inner.x + inner.width) <= (outer.x + outer.width + epsilon)
    && (inner.y + inner.height) <= (outer.y + outer.height + epsilon)
  );
}

function isOwnedTextRectPair(labelCellId, rectCellId) {
  const normalizedLabelId = String(labelCellId).replace(/(?:-text|_text)$/i, '');
  return normalizedLabelId === rectCellId;
}

function classifySegmentIntersection(first, second) {
  const firstVector = subtract(first.end, first.start);
  const secondVector = subtract(second.end, second.start);
  const delta = subtract(second.start, first.start);
  const denominator = cross(firstVector, secondVector);
  const deltaFirst = cross(delta, firstVector);
  const deltaSecond = cross(delta, secondVector);

  if (Math.abs(denominator) <= EPSILON) {
    if (Math.abs(deltaFirst) > EPSILON) {
      return null;
    }

    const useX = Math.abs(firstVector.x) >= Math.abs(firstVector.y);
    const axis = useX ? 'x' : 'y';
    const firstMin = Math.min(first.start[axis], first.end[axis]);
    const firstMax = Math.max(first.start[axis], first.end[axis]);
    const secondMin = Math.min(second.start[axis], second.end[axis]);
    const secondMax = Math.max(second.start[axis], second.end[axis]);
    const overlapStart = Math.max(firstMin, secondMin);
    const overlapEnd = Math.min(firstMax, secondMax);

    if ((overlapEnd - overlapStart) <= EPSILON) {
      return null;
    }

    return {
      type: 'overlap',
      length: overlapEnd - overlapStart,
      detail: `collinear overlap (${(overlapEnd - overlapStart).toFixed(1)}px)`,
    };
  }

  const t = cross(delta, secondVector) / denominator;
  const u = deltaSecond / denominator;

  if (
    t < -EPSILON
    || t > 1 + EPSILON
    || u < -EPSILON
    || u > 1 + EPSILON
  ) {
    return null;
  }

  const point = {
    x: first.start.x + (t * firstVector.x),
    y: first.start.y + (t * firstVector.y),
  };

  const atEndpointOfFirst = samePoint(point, first.start) || samePoint(point, first.end);
  const atEndpointOfSecond = samePoint(point, second.start) || samePoint(point, second.end);

  if (atEndpointOfFirst && atEndpointOfSecond) {
    return null;
  }

  return {
    type: 'crossing',
    point,
    detail: `crossing near (${point.x.toFixed(1)}, ${point.y.toFixed(1)})`,
  };
}

function interiorLengthInsideRect(segment, rect) {
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  let t0 = 0;
  let t1 = 1;

  const checks = [
    [-dx, segment.start.x - rect.x],
    [dx, (rect.x + rect.width) - segment.start.x],
    [-dy, segment.start.y - rect.y],
    [dy, (rect.y + rect.height) - segment.start.y],
  ];

  for (const [p, q] of checks) {
    if (Math.abs(p) <= EPSILON) {
      if (q < 0) {
        return 0;
      }
      continue;
    }

    const ratio = q / p;

    if (p < 0) {
      t0 = Math.max(t0, ratio);
    } else {
      t1 = Math.min(t1, ratio);
    }

    if (t0 > t1) {
      return 0;
    }
  }

  return Math.max(0, t1 - t0) * distance(segment.start, segment.end);
}

function isBackgroundRect(rect) {
  if (isDecorativeRect(rect)) {
    return true;
  }

  const area = rect.width * rect.height;

  if (area > MAX_OBSTACLE_AREA) {
    return true;
  }

  if (rect.width > MAX_OBSTACLE_WIDTH || rect.height > MAX_OBSTACLE_HEIGHT) {
    return isWhiteLikeFill(rect.fill);
  }

  return false;
}

function isDecorativeRect(rect) {
  const lowerId = rect.cellId.toLowerCase();

  if (
    lowerId.startsWith('label-')
    || lowerId.includes('-label')
    || lowerId.endsWith('-chip')
    || lowerId.includes('-chip-')
    || lowerId.endsWith('_chip')
    || lowerId.includes('badge')
    || lowerId === 'title'
    || lowerId === 'title-bg'
    || lowerId.endsWith('-bg')
    || lowerId.endsWith('_bg')
    || lowerId.includes('background')
    || lowerId.includes('layer-bg')
  ) {
    return true;
  }

  return isNone(rect.stroke);
}

function classifyRectLintRole(rect) {
  if (FRAME_CELL_ID_PATTERN.test(rect.cellId)) {
    return 'border-only';
  }

  if (isBackgroundRect(rect)) {
    return 'ignore';
  }

  return 'obstacle';
}

function parseStyleNumber(style, key, fallback = null) {
  const rawValue = style[key];

  if (rawValue === undefined) {
    return fallback;
  }

  const match = String(rawValue).match(/-?\d*\.?\d+/);
  if (!match) {
    return fallback;
  }

  return Number(match[0]);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function estimateTextWidth(text, fontSize) {
  let width = 0;

  for (const char of text) {
    if (/\s/.test(char)) {
      width += fontSize * 0.35;
      continue;
    }

    if (/[\u3000-\u30FF\u3400-\u9FFF\uF900-\uFAFF]/u.test(char)) {
      width += fontSize * 0.92;
      continue;
    }

    if (/[A-Z0-9]/.test(char)) {
      width += fontSize * 0.62;
      continue;
    }

    width += fontSize * 0.56;
  }

  return width;
}

function extractLineMetrics(value, defaultFontSize) {
  const decoded = decodeXmlEntities(value);
  const tokenRegex = /<br\s*\/?>|<font\b([^>]*)>|<\/font>|([^<]+)/gi;
  const fontStack = [defaultFontSize];
  const lines = [];
  let currentLine = { width: 0, fontSize: defaultFontSize, text: '' };

  function pushLine() {
    lines.push(currentLine);
    currentLine = { width: 0, fontSize: defaultFontSize, text: '' };
  }

  for (const match of decoded.matchAll(tokenRegex)) {
    const [token, fontAttributes = '', textChunk = ''] = match;

    if (/^<br/i.test(token)) {
      pushLine();
      continue;
    }

    if (/^<font/i.test(token)) {
      const attributes = parseAttributes(fontAttributes);
      const inlineStyle = parseStyle(attributes.style ?? '');
      const fontSize = parseStyleNumber(inlineStyle, 'font-size', fontStack[fontStack.length - 1]);
      fontStack.push(fontSize);
      continue;
    }

    if (/^<\/font/i.test(token)) {
      if (fontStack.length > 1) {
        fontStack.pop();
      }
      continue;
    }

    if (!textChunk) {
      continue;
    }

    const normalizedText = textChunk.replace(/\s+/g, ' ');
    const fontSize = fontStack[fontStack.length - 1];
    currentLine.width += estimateTextWidth(normalizedText, fontSize);
    currentLine.fontSize = Math.max(currentLine.fontSize, fontSize);
    currentLine.text += normalizedText;
  }

  if (currentLine.text || lines.length === 0) {
    lines.push(currentLine);
  }

  return lines.filter((line) => line.text.trim().length > 0);
}

function parseDrawioTextLayouts(drawioText) {
  const layouts = [];
  const cellRegex = /<mxCell\b([^>]*?)(?:\/>|>([\s\S]*?)<\/mxCell>)/g;

  for (const match of drawioText.matchAll(cellRegex)) {
    const [, rawAttributes = '', body = ''] = match;
    const attributes = parseAttributes(rawAttributes);
    const rawStyle = attributes.style ?? '';
    const isTextCell = /(^|;)text(;|$)/i.test(rawStyle);

    if (attributes.vertex !== '1') {
      continue;
    }

    if (!attributes.value) {
      continue;
    }

    const geometryMatch = body.match(/<mxGeometry\b([^>]*?)\/>/);
    if (!geometryMatch) {
      continue;
    }

    const geometryAttributes = parseAttributes(geometryMatch[1]);
    const x = toNumber(geometryAttributes.x);
    const y = toNumber(geometryAttributes.y);
    const width = toNumber(geometryAttributes.width);
    const height = toNumber(geometryAttributes.height);

    if (width <= 0 || height <= 0) {
      continue;
    }

    const style = parseStyle(rawStyle);
    const fontSize = parseStyleNumber(style, 'fontSize', 17);
    const spacingDefault = isTextCell ? 0 : DEFAULT_TEXT_PADDING;
    const spacing = parseStyleNumber(style, 'spacing', spacingDefault);
    const spacingLeft = parseStyleNumber(style, 'spacingLeft', spacing);
    const spacingRight = parseStyleNumber(style, 'spacingRight', spacing);
    const spacingTop = parseStyleNumber(style, 'spacingTop', spacing);
    const spacingBottom = parseStyleNumber(style, 'spacingBottom', spacing);
    const align = style.align ?? 'left';
    const verticalAlign = style.verticalAlign ?? 'middle';
    const lines = extractLineMetrics(attributes.value, fontSize);
    const estimatedWidth = lines.reduce((maxWidth, line) => Math.max(maxWidth, line.width), 0);
    const estimatedHeight = lines.reduce(
      (total, line) => total + (line.fontSize * 1.25),
      0,
    );
    const availableWidth = Math.max(0, width - spacingLeft - spacingRight);
    const availableHeight = Math.max(0, height - spacingTop - spacingBottom);
    const contentWidth = Math.min(estimatedWidth, availableWidth);
    const contentHeight = Math.min(estimatedHeight, availableHeight);

    let contentX = x + spacingLeft;
    if (align === 'center') {
      contentX = x + spacingLeft + ((availableWidth - contentWidth) / 2);
    } else if (align === 'right') {
      contentX = x + width - spacingRight - contentWidth;
    }

    let contentY = y + spacingTop;
    if (verticalAlign === 'middle') {
      contentY = y + spacingTop + ((availableHeight - contentHeight) / 2);
    } else if (verticalAlign === 'bottom') {
      contentY = y + height - spacingBottom - contentHeight;
    }

    const paddedWidth = clamp(contentWidth + (LABEL_BOX_PADDING * 2), 0, width);
    const paddedHeight = clamp(contentHeight + (LABEL_BOX_PADDING * 2), 0, height);
    const labelBoxX = clamp(contentX - LABEL_BOX_PADDING, x, x + width - paddedWidth);
    const labelBoxY = clamp(contentY - LABEL_BOX_PADDING, y, y + height - paddedHeight);

    layouts.push({
      cellId: attributes.id ?? 'unknown-cell',
      value: decodeXmlEntities(attributes.value).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      isTextCell,
      fontSize,
      lineCount: lines.length,
      fillColor: style.fillColor,
      fontColor: style.fontColor,
      x,
      y,
      width,
      height,
      availableWidth,
      availableHeight,
      estimatedWidth,
      estimatedHeight,
      labelBox: {
        cellId: attributes.id ?? 'unknown-cell',
        x: labelBoxX,
        y: labelBoxY,
        width: paddedWidth,
        height: paddedHeight,
        label: decodeXmlEntities(attributes.value).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      },
    });
  }

  return layouts;
}

function parseDrawioRectLayouts(drawioText) {
  const rects = [];
  const cellRegex = /<mxCell\b([^>]*?)(?:\/>|>([\s\S]*?)<\/mxCell>)/g;

  for (const match of drawioText.matchAll(cellRegex)) {
    const [, rawAttributes = '', body = ''] = match;
    const attributes = parseAttributes(rawAttributes);
    const rawStyle = attributes.style ?? '';

    if (attributes.vertex !== '1') {
      continue;
    }

    if (/(^|;)text(;|$)/i.test(rawStyle)) {
      continue;
    }

    const style = parseStyle(rawStyle);
    const shape = String(style.shape ?? '').toLowerCase();

    if (shape && !['rect', 'rectangle'].includes(shape)) {
      continue;
    }

    const geometryMatch = body.match(/<mxGeometry\b([^>]*?)\/>/);
    if (!geometryMatch) {
      continue;
    }

    const geometryAttributes = parseAttributes(geometryMatch[1]);
    const width = toNumber(geometryAttributes.width);
    const height = toNumber(geometryAttributes.height);

    if (width <= 0 || height <= 0) {
      continue;
    }

    const rect = {
      cellId: attributes.id ?? 'unknown-cell',
      x: toNumber(geometryAttributes.x),
      y: toNumber(geometryAttributes.y),
      width,
      height,
      stroke: style.strokeColor,
    };
    const lintRole = classifyRectLintRole(rect);

    if (lintRole === 'ignore') {
      continue;
    }

    rects.push({
      ...rect,
      lintRole,
    });
  }

  return rects;
}

function parseDrawioEdgeConnections(drawioText) {
  const connections = new Map();

  for (const match of drawioText.matchAll(/<mxCell\b([^>]*?)(?:\/>|>)/g)) {
    const attributes = parseAttributes(match[1]);

    if (attributes.edge !== '1' || !attributes.id) {
      continue;
    }

    connections.set(attributes.id, {
      sourceCellId: attributes.source ?? null,
      targetCellId: attributes.target ?? null,
    });
  }

  return connections;
}

function findTextOverflowIssues(textBlocks) {
  const issues = [];

  for (const block of textBlocks) {
    if (block.estimatedWidth > block.availableWidth + TEXT_OVERFLOW_TOLERANCE) {
      issues.push({
        type: 'text-overflow',
        axis: 'width',
        cellId: block.cellId,
        available: block.availableWidth,
        estimated: block.estimatedWidth,
        label: block.value,
      });
    }

    if (block.estimatedHeight > block.availableHeight + TEXT_OVERFLOW_TOLERANCE) {
      issues.push({
        type: 'text-overflow',
        axis: 'height',
        cellId: block.cellId,
        available: block.availableHeight,
        estimated: block.estimatedHeight,
        label: block.value,
      });
    }
  }

  return issues;
}

function findTextLegibilityIssues(textBlocks) {
  const issues = [];

  for (const block of textBlocks) {
    if (block.isTextCell) {
      continue;
    }

    if (
      block.lineCount < COMPACT_TEXT_MIN_LINES
      || block.fontSize > COMPACT_TEXT_MAX_FONT_SIZE
      || block.width > COMPACT_TEXT_MAX_WIDTH
      || block.height > COMPACT_TEXT_MAX_HEIGHT
      || !isDarkPaint(block.fillColor)
    ) {
      continue;
    }

    const widthRatio = block.availableWidth > 0 ? block.estimatedWidth / block.availableWidth : Infinity;
    const heightRatio = block.availableHeight > 0 ? block.estimatedHeight / block.availableHeight : Infinity;

    if (
      widthRatio < COMPACT_TEXT_WIDTH_RATIO_THRESHOLD
      || heightRatio < COMPACT_TEXT_HEIGHT_RATIO_THRESHOLD
    ) {
      continue;
    }

    issues.push({
      type: 'text-legibility',
      cellId: block.cellId,
      label: block.value,
      lineCount: block.lineCount,
      fontSize: block.fontSize,
      widthRatio,
      heightRatio,
      width: block.width,
      height: block.height,
    });
  }

  return issues;
}

function buildRectMap(rects) {
  const rectMap = new Map();

  for (const rect of rects) {
    rectMap.set(rect.cellId, rect);
  }

  return rectMap;
}

function projectTerminalToRectSide(point, rect) {
  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;
  const distances = [
    {
      side: 'top',
      distance: Math.abs(point.y - rect.y),
      x: clamp(point.x, rect.x, right),
      y: rect.y,
      axisCoord: clamp(point.x, rect.x, right),
    },
    {
      side: 'bottom',
      distance: Math.abs(point.y - bottom),
      x: clamp(point.x, rect.x, right),
      y: bottom,
      axisCoord: clamp(point.x, rect.x, right),
    },
    {
      side: 'left',
      distance: Math.abs(point.x - rect.x),
      x: rect.x,
      y: clamp(point.y, rect.y, bottom),
      axisCoord: clamp(point.y, rect.y, bottom),
    },
    {
      side: 'right',
      distance: Math.abs(point.x - right),
      x: right,
      y: clamp(point.y, rect.y, bottom),
      axisCoord: clamp(point.y, rect.y, bottom),
    },
  ];

  return distances.sort((first, second) => first.distance - second.distance)[0];
}

function findCrowdedEdgeTerminals(edges, rects) {
  const issues = [];
  const rectMap = buildRectMap(rects);
  const terminals = [];

  for (const edge of edges) {
    if (edge.segments.length === 0) {
      continue;
    }

    const sourceRect = edge.sourceCellId ? rectMap.get(edge.sourceCellId) : null;
    if (sourceRect) {
      const attachment = projectTerminalToRectSide(edge.segments[0].start, sourceRect);
      if (attachment.distance <= MAX_TERMINAL_SIDE_DISTANCE) {
        terminals.push({
          edgeCellId: edge.cellId,
          rectCellId: edge.sourceCellId,
          position: 'start',
          ...attachment,
        });
      }
    }

    const targetRect = edge.targetCellId ? rectMap.get(edge.targetCellId) : null;
    if (targetRect) {
      const attachment = projectTerminalToRectSide(edge.segments[edge.segments.length - 1].end, targetRect);
      if (attachment.distance <= MAX_TERMINAL_SIDE_DISTANCE) {
        terminals.push({
          edgeCellId: edge.cellId,
          rectCellId: edge.targetCellId,
          position: 'end',
          ...attachment,
        });
      }
    }
  }

  for (let firstIndex = 0; firstIndex < terminals.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < terminals.length; secondIndex += 1) {
      const first = terminals[firstIndex];
      const second = terminals[secondIndex];

      if (
        first.edgeCellId === second.edgeCellId
        || first.rectCellId !== second.rectCellId
        || first.side !== second.side
      ) {
        continue;
      }

      const spacing = Math.abs(first.axisCoord - second.axisCoord);
      if (spacing + EPSILON >= MIN_TERMINAL_SPACING) {
        continue;
      }

      issues.push({
        type: 'edge-terminal-spacing',
        rectCellId: first.rectCellId,
        side: first.side,
        firstEdgeCellId: first.edgeCellId,
        firstPosition: first.position,
        secondEdgeCellId: second.edgeCellId,
        secondPosition: second.position,
        spacing,
      });
    }
  }

  return issues;
}

async function readCompanionDrawio(targetPath) {
  const candidates = [
    targetPath.replace(/\.svg$/i, ''),
    targetPath.replace(/\.drawio\.svg$/i, '.drawio'),
  ];

  for (const candidate of candidates) {
    if (!candidate || candidate === targetPath) {
      continue;
    }

    try {
      return {
        path: candidate,
        text: await readFile(candidate, 'utf8'),
      };
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  return null;
}

function parseSvg(svgText) {
  const cells = new Map();
  const tagRegex = /<\/?([A-Za-z][\w:-]*)([^<>]*?)\/?>/g;
  const stack = [{
    tag: 'root',
    cellId: null,
    tx: 0,
    ty: 0,
  }];

  function getCurrentCellId() {
    for (let index = stack.length - 1; index >= 0; index -= 1) {
      if (stack[index].cellId) {
        return stack[index].cellId;
      }
    }
    return null;
  }

  function getCurrentOffset() {
    const top = stack[stack.length - 1];
    return { x: top.tx, y: top.ty };
  }

  function ensureCell(cellId) {
    if (!cells.has(cellId)) {
      cells.set(cellId, {
        cellId,
        rects: [],
        linePaths: [],
      });
    }

    return cells.get(cellId);
  }

  for (const match of svgText.matchAll(tagRegex)) {
    const [rawTag, rawName, rawAttributes = ''] = match;
    const tagName = rawName.toLowerCase();
    const closing = rawTag.startsWith('</');
    const selfClosing = rawTag.endsWith('/>');

    if (closing) {
      if (stack.length > 1) {
        stack.pop();
      }
      continue;
    }

    const attributes = parseAttributes(rawAttributes);
    const currentCellId = attributes['data-cell-id'] ?? getCurrentCellId();
    const inheritedOffset = getCurrentOffset();
    const translate = parseTranslate(attributes.transform);
    const nextContext = {
      tag: tagName,
      cellId: currentCellId,
      tx: inheritedOffset.x + translate.x,
      ty: inheritedOffset.y + translate.y,
    };

    if (tagName === 'rect' && currentCellId) {
      const fill = getPaint(attributes, 'fill');
      const stroke = getPaint(attributes, 'stroke');

      if (!(isNone(fill) && isNone(stroke))) {
        const cell = ensureCell(currentCellId);
        cell.rects.push({
          cellId: currentCellId,
          x: toNumber(attributes.x) + inheritedOffset.x,
          y: toNumber(attributes.y) + inheritedOffset.y,
          width: toNumber(attributes.width),
          height: toNumber(attributes.height),
          fill,
          stroke,
        });
      }
    }

    if (tagName === 'path' && currentCellId) {
      const fill = getPaint(attributes, 'fill');
      const stroke = getPaint(attributes, 'stroke');
      const d = attributes.d ?? '';

      if ((fill === 'none' || fill === undefined) && !isNone(stroke) && d) {
        const cell = ensureCell(currentCellId);
        cell.linePaths.push({
          cellId: currentCellId,
          segments: parsePathData(d, inheritedOffset),
          stroke,
        });
      }
    }

    if (!selfClosing) {
      stack.push(nextContext);
    }
  }

  return cells;
}

function collectEdges(cells, edgeConnections = new Map()) {
  const edges = [];

  for (const cell of cells.values()) {
    if (cell.linePaths.length === 0) {
      continue;
    }

    for (const linePath of cell.linePaths) {
      if (linePath.segments.length === 0) {
        continue;
      }

      edges.push({
        cellId: cell.cellId,
        segments: linePath.segments,
        sourceCellId: edgeConnections.get(cell.cellId)?.sourceCellId ?? null,
        targetCellId: edgeConnections.get(cell.cellId)?.targetCellId ?? null,
      });
    }
  }

  return edges;
}

function collectObstacleRects(cells) {
  const rects = [];

  for (const cell of cells.values()) {
    for (const rect of cell.rects) {
      if (!isBackgroundRect(rect)) {
        rects.push(rect);
      }
    }
  }

  return rects;
}

function collectBorderRects(cells) {
  const rects = [];

  for (const cell of cells.values()) {
    for (const rect of cell.rects) {
      if (!isDecorativeRect(rect)) {
        rects.push(rect);
      }
    }
  }

  return rects;
}

function rectBorderSegments(rect) {
  const left = rect.x;
  const right = rect.x + rect.width;
  const top = rect.y;
  const bottom = rect.y + rect.height;

  return [
    {
      side: 'top',
      segment: {
        start: { x: left, y: top },
        end: { x: right, y: top },
      },
    },
    {
      side: 'right',
      segment: {
        start: { x: right, y: top },
        end: { x: right, y: bottom },
      },
    },
    {
      side: 'bottom',
      segment: {
        start: { x: left, y: bottom },
        end: { x: right, y: bottom },
      },
    },
    {
      side: 'left',
      segment: {
        start: { x: left, y: top },
        end: { x: left, y: bottom },
      },
    },
  ];
}

function findEdgeOverlaps(edges) {
  const issues = [];

  for (let firstIndex = 0; firstIndex < edges.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < edges.length; secondIndex += 1) {
      const first = edges[firstIndex];
      const second = edges[secondIndex];

      if (first.cellId === second.cellId) {
        continue;
      }

      for (const firstSegment of first.segments) {
        const firstBounds = segmentBounds(firstSegment);

        for (const secondSegment of second.segments) {
          const secondBounds = segmentBounds(secondSegment);

          if (!boundsOverlap(firstBounds, secondBounds)) {
            continue;
          }

          const intersection = classifySegmentIntersection(firstSegment, secondSegment);

          if (!intersection) {
            continue;
          }

          issues.push({
            type: 'edge-edge',
            firstCellId: first.cellId,
            secondCellId: second.cellId,
            detail: intersection.detail,
          });
        }
      }
    }
  }

  return issues;
}

function findEdgeRectCollisions(edges, rects) {
  const issues = [];

  for (const edge of edges) {
    for (const rect of rects) {
      if (edge.cellId === rect.cellId) {
        continue;
      }

      const bounds = rectBounds(rect);
      const lastSegmentIndex = edge.segments.length - 1;

      for (const [segmentIndex, segment] of edge.segments.entries()) {
        if (segmentIndex === 0 && edge.sourceCellId === rect.cellId) {
          continue;
        }

        if (segmentIndex === lastSegmentIndex && edge.targetCellId === rect.cellId) {
          continue;
        }

        if (!boundsOverlap(segmentBounds(segment), bounds)) {
          continue;
        }

        const interiorLength = interiorLengthInsideRect(segment, rect);

        if (interiorLength > BOX_INTERIOR_THRESHOLD) {
          issues.push({
            type: 'edge-rect',
            edgeCellId: edge.cellId,
            rectCellId: rect.cellId,
            length: interiorLength,
          });
        }
      }
    }
  }

  return issues;
}

function findEdgeRectBorderOverlaps(edges, rects) {
  const issues = [];

  for (const edge of edges) {
    for (const rect of rects) {
      if (edge.cellId === rect.cellId) {
        continue;
      }

      const expandedBounds = expandBounds(rectBounds(rect), MAX_BORDER_CLEARANCE);
      const lastSegmentIndex = edge.segments.length - 1;

      for (const [segmentIndex, edgeSegment] of edge.segments.entries()) {
        if (segmentIndex === 0 && edge.sourceCellId === rect.cellId) {
          continue;
        }

        if (segmentIndex === lastSegmentIndex && edge.targetCellId === rect.cellId) {
          continue;
        }

        const edgeBounds = segmentBounds(edgeSegment);

        if (!boundsOverlap(edgeBounds, expandedBounds, MAX_BORDER_CLEARANCE)) {
          continue;
        }

        for (const contact of findSegmentRectBorderContacts(edgeSegment, rect)) {
          issues.push({
            type: 'edge-rect-border',
            edgeCellId: edge.cellId,
            rectCellId: rect.cellId,
            side: contact.side,
            length: contact.length,
            offset: contact.offset,
            relation: contact.relation,
          });
        }
      }
    }
  }

  return issues;
}

function findEdgeLabelCollisions(edges, labelBoxes) {
  const issues = [];

  for (const edge of edges) {
    for (const label of labelBoxes) {
      if (edge.cellId === label.cellId) {
        continue;
      }

      const bounds = rectBounds(label);

      for (const segment of edge.segments) {
        if (!boundsOverlap(segmentBounds(segment), bounds)) {
          continue;
        }

        const interiorLength = interiorLengthInsideRect(segment, label);

        if (interiorLength > LABEL_INTERIOR_THRESHOLD) {
          issues.push({
            type: 'edge-label',
            edgeCellId: edge.cellId,
            labelCellId: label.cellId,
            label: label.label,
            length: interiorLength,
          });
        }
      }
    }
  }

  return issues;
}

function findLabelRectOverlaps(labelBoxes, rects) {
  const issues = [];

  for (const label of labelBoxes) {
    for (const rect of rects) {
      if (label.cellId === rect.cellId) {
        continue;
      }

      if (rect.lintRole !== 'obstacle') {
        continue;
      }

      if (isOwnedTextRectPair(label.cellId, rect.cellId)) {
        continue;
      }

      const overlap = intersectionRect(label, rect);

      if (!overlap) {
        continue;
      }

      if (rectContainsRect(rect, label)) {
        continue;
      }

      const area = overlap.width * overlap.height;

      if (area <= LABEL_RECT_OVERLAP_AREA_THRESHOLD) {
        continue;
      }

      issues.push({
        type: 'label-rect',
        labelCellId: label.cellId,
        rectCellId: rect.cellId,
        label: label.label,
        area,
        width: overlap.width,
        height: overlap.height,
      });
    }
  }

  return issues;
}

function findShortTerminalSegments(edges) {
  const issues = [];

  for (const edge of edges) {
    if (edge.segments.length === 0) {
      continue;
    }

    const terminal = {
      position: 'end',
      segment: edge.segments[edge.segments.length - 1],
    };
    const length = segmentLength(terminal.segment);

    // draw.io sometimes emits a sub-pixel cleanup segment after a long final run.
    // Those do not create the "tiny arrow" visual artifact we want to catch.
    if (length <= TERMINAL_SEGMENT_NOISE_TOLERANCE) {
      continue;
    }

    if (length + EPSILON >= MIN_TERMINAL_SEGMENT_LENGTH) {
      continue;
    }

    issues.push({
      type: 'edge-terminal',
      edgeCellId: edge.cellId,
      position: terminal.position,
      length,
    });
  }

  return issues;
}

function summarizeIssues(issues) {
  const summaries = new Map();

  for (const issue of issues) {
    if (issue.type === 'edge-edge') {
      const key = `${issue.firstCellId}::${issue.secondCellId}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'edge-edge',
          firstCellId: issue.firstCellId,
          secondCellId: issue.secondCellId,
          details: new Set(),
        });
      }

      summaries.get(key).details.add(issue.detail);
      continue;
    }

    if (issue.type === 'text-overflow') {
      const key = `${issue.cellId}::${issue.axis}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'text-overflow',
          axis: issue.axis,
          cellId: issue.cellId,
          available: issue.available,
          estimated: issue.estimated,
          label: issue.label,
        });
      } else {
        const summary = summaries.get(key);
        summary.available = Math.min(summary.available, issue.available);
        summary.estimated = Math.max(summary.estimated, issue.estimated);
      }

      continue;
    }

    if (issue.type === 'text-legibility') {
      const key = `${issue.cellId}::text-legibility`;

      if (!summaries.has(key)) {
        summaries.set(key, { ...issue });
      } else {
        const summary = summaries.get(key);
        summary.widthRatio = Math.max(summary.widthRatio, issue.widthRatio);
        summary.heightRatio = Math.max(summary.heightRatio, issue.heightRatio);
        summary.lineCount = Math.max(summary.lineCount, issue.lineCount);
        summary.fontSize = Math.max(summary.fontSize, issue.fontSize);
      }

      continue;
    }

    if (issue.type === 'edge-terminal') {
      const key = `${issue.edgeCellId}::${issue.position}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'edge-terminal',
          edgeCellId: issue.edgeCellId,
          position: issue.position,
          minLength: issue.length,
          count: 1,
        });
        continue;
      }

      const summary = summaries.get(key);
      summary.minLength = Math.min(summary.minLength, issue.length);
      summary.count += 1;
      continue;
    }

    if (issue.type === 'edge-terminal-spacing') {
      const pairKey = [
        `${issue.firstEdgeCellId}:${issue.firstPosition}`,
        `${issue.secondEdgeCellId}:${issue.secondPosition}`,
      ].sort().join('::');
      const key = `edge-terminal-spacing::${issue.rectCellId}::${issue.side}::${pairKey}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'edge-terminal-spacing',
          rectCellId: issue.rectCellId,
          side: issue.side,
          firstEdgeCellId: issue.firstEdgeCellId,
          firstPosition: issue.firstPosition,
          secondEdgeCellId: issue.secondEdgeCellId,
          secondPosition: issue.secondPosition,
          minSpacing: issue.spacing,
          count: 1,
        });
        continue;
      }

      const summary = summaries.get(key);
      summary.minSpacing = Math.min(summary.minSpacing, issue.spacing);
      summary.count += 1;
      continue;
    }

    if (issue.type === 'edge-rect-border') {
      const key = `edge-rect-border::${issue.edgeCellId}::${issue.rectCellId}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'edge-rect-border',
          edgeCellId: issue.edgeCellId,
          rectCellId: issue.rectCellId,
          details: new Set([`${issue.side}:${issue.relation}:${issue.offset.toFixed(1)}px/${issue.length.toFixed(1)}px`]),
          count: 1,
        });
        continue;
      }

      const summary = summaries.get(key);
      summary.details.add(`${issue.side}:${issue.relation}:${issue.offset.toFixed(1)}px/${issue.length.toFixed(1)}px`);
      summary.count += 1;
      continue;
    }

    if (issue.type === 'edge-label') {
      const key = `${issue.edgeCellId}::${issue.labelCellId}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'edge-label',
          edgeCellId: issue.edgeCellId,
          labelCellId: issue.labelCellId,
          label: issue.label,
          maxLength: issue.length,
          count: 1,
        });
        continue;
      }

      const summary = summaries.get(key);
      summary.maxLength = Math.max(summary.maxLength, issue.length);
      summary.count += 1;
      continue;
    }

    if (issue.type === 'label-rect') {
      const key = `${issue.labelCellId}::${issue.rectCellId}`;

      if (!summaries.has(key)) {
        summaries.set(key, {
          type: 'label-rect',
          labelCellId: issue.labelCellId,
          rectCellId: issue.rectCellId,
          label: issue.label,
          maxArea: issue.area,
          maxWidth: issue.width,
          maxHeight: issue.height,
          count: 1,
        });
        continue;
      }

      const summary = summaries.get(key);
      summary.maxArea = Math.max(summary.maxArea, issue.area);
      summary.maxWidth = Math.max(summary.maxWidth, issue.width);
      summary.maxHeight = Math.max(summary.maxHeight, issue.height);
      summary.count += 1;
      continue;
    }

    const key = `edge-rect::${issue.edgeCellId}::${issue.rectCellId}`;

    if (!summaries.has(key)) {
      summaries.set(key, {
        type: 'edge-rect',
        edgeCellId: issue.edgeCellId,
        rectCellId: issue.rectCellId,
        maxLength: issue.length,
        count: 1,
      });
      continue;
    }

    const summary = summaries.get(key);
    summary.maxLength = Math.max(summary.maxLength, issue.length);
    summary.count += 1;
  }

  return [...summaries.values()];
}

function formatIssue(issue) {
  if (issue.type === 'edge-edge') {
    const details = [...issue.details].sort();
    return `- edge-edge: ${issue.firstCellId} <-> ${issue.secondCellId} (${details.length} contact(s): ${details.join('; ')})`;
  }

  if (issue.type === 'text-overflow') {
    return `- text-overflow(${issue.axis}): ${issue.cellId} requires ${issue.estimated.toFixed(1)}px but only ${issue.available.toFixed(1)}px is available [${issue.label}]`;
  }

  if (issue.type === 'text-legibility') {
    return `- text-legibility: ${issue.cellId} is visually dense (${issue.lineCount} lines at ${issue.fontSize.toFixed(1)}px inside ${issue.width.toFixed(1)}px x ${issue.height.toFixed(1)}px; width ${(issue.widthRatio * 100).toFixed(1)}%, height ${(issue.heightRatio * 100).toFixed(1)}%) [${issue.label}]`;
  }

  if (issue.type === 'edge-terminal') {
    return `- edge-terminal: ${issue.edgeCellId} has a too-short ${issue.position} segment (${issue.minLength.toFixed(1)}px across ${issue.count} segment(s)); keep at least ${MIN_TERMINAL_SEGMENT_LENGTH}px of straight run near arrowheads`;
  }

  if (issue.type === 'edge-terminal-spacing') {
    return `- edge-terminal-spacing: ${issue.rectCellId} has crowded ${issue.side} terminals ${issue.firstEdgeCellId}(${issue.firstPosition}) and ${issue.secondEdgeCellId}(${issue.secondPosition}) at ${issue.minSpacing.toFixed(1)}px; keep at least ${MIN_TERMINAL_SPACING}px between terminals on the same side`;
  }

  if (issue.type === 'edge-label') {
    return `- edge-label: ${issue.edgeCellId} crosses label text in ${issue.labelCellId} (max interior ${issue.maxLength.toFixed(1)}px across ${issue.count} segment(s)) [${issue.label}]`;
  }

  if (issue.type === 'label-rect') {
    return `- label-rect: ${issue.labelCellId} overlaps ${issue.rectCellId} (${issue.maxWidth.toFixed(1)}px x ${issue.maxHeight.toFixed(1)}px, max area ${issue.maxArea.toFixed(1)}px) [${issue.label}]`;
  }

  if (issue.type === 'edge-rect-border') {
    const details = [...issue.details].sort().join('; ');
    return `- edge-rect-border: ${issue.edgeCellId} hugs ${issue.rectCellId} border (${issue.count} contact(s): ${details})`;
  }

  return `- edge-rect: ${issue.edgeCellId} -> ${issue.rectCellId} (max interior ${issue.maxLength.toFixed(1)}px across ${issue.count} segment(s))`;
}

async function main() {
  const targetArg = process.argv[2] ?? DEFAULT_TARGET;
  const targetPath = path.resolve(process.cwd(), targetArg);
  const svgText = await readFile(targetPath, 'utf8');
  const companionDrawio = await readCompanionDrawio(targetPath);
  const edgeConnections = companionDrawio ? parseDrawioEdgeConnections(companionDrawio.text) : new Map();
  const cells = parseSvg(svgText);
  const edges = collectEdges(cells, edgeConnections);
  const rects = collectObstacleRects(cells);
  const borderRects = collectBorderRects(cells);
  const edgeIssues = findEdgeOverlaps(edges);
  const rectIssues = findEdgeRectCollisions(edges, rects);
  const borderIssues = findEdgeRectBorderOverlaps(edges, borderRects);
  const terminalIssues = findShortTerminalSegments(edges);
  const textLayouts = companionDrawio ? parseDrawioTextLayouts(companionDrawio.text) : [];
  const textBlocks = textLayouts;
  const labelBoxes = textLayouts
    .filter((layout) => layout.isTextCell && layout.labelBox.width > 0 && layout.labelBox.height > 0)
    .map((layout) => layout.labelBox);
  const textIssues = findTextOverflowIssues(textBlocks);
  const textLegibilityIssues = findTextLegibilityIssues(textBlocks);
  const labelIssues = findEdgeLabelCollisions(edges, labelBoxes);
  const drawioRects = companionDrawio ? parseDrawioRectLayouts(companionDrawio.text) : [];
  const labelRectIssues = findLabelRectOverlaps(labelBoxes, drawioRects);
  const terminalSpacingIssues = findCrowdedEdgeTerminals(edges, drawioRects.length > 0 ? drawioRects : rects);
  const issues = summarizeIssues([
    ...edgeIssues,
    ...rectIssues,
    ...borderIssues,
    ...terminalIssues,
    ...terminalSpacingIssues,
    ...labelIssues,
    ...labelRectIssues,
    ...textIssues,
    ...textLegibilityIssues,
  ]);

  console.log(`[diagram:check] ${path.relative(process.cwd(), targetPath)}`);
  console.log(`[diagram:check] parsed ${cells.size} cells, ${edges.length} edges, ${rects.length} obstacle rects, ${borderRects.length} border rects`);
  if (companionDrawio) {
    console.log(`[diagram:check] parsed ${textBlocks.length} text block(s) and ${labelBoxes.length} label box(es) from ${path.relative(process.cwd(), companionDrawio.path)}`);
  }

  if (issues.length === 0) {
    console.log('[diagram:check] OK: no overlaps, border rides, crowded terminals, label intrusions, label-box collisions, text density, or text overflows detected by the current heuristics');
    return;
  }

  console.log(`[diagram:check] found ${issues.length} issue(s)`);
  for (const issue of issues) {
    console.log(formatIssue(issue));
  }

  process.exitCode = 1;
}

await main();
