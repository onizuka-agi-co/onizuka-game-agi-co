export const BOARD_SIZE = 7;
export const MAX_TURNS = 15;

const UNIT_STATS = {
  striker: { maxHp: 10, move: 3, minRange: 1, maxRange: 2, attack: 4 },
  guardian: { maxHp: 14, move: 2, minRange: 1, maxRange: 1, attack: 3 },
};

const COVER_TILES = [
  { x: 3, y: 1 },
  { x: 3, y: 3 },
  { x: 3, y: 5 },
];

const INITIAL_UNITS = [
  { id: 'P-S1', side: 'player', kind: 'striker', x: 0, y: 1 },
  { id: 'P-G1', side: 'player', kind: 'guardian', x: 0, y: 5 },
  { id: 'A-S1', side: 'agi', kind: 'striker', x: 6, y: 1 },
  { id: 'A-G1', side: 'agi', kind: 'guardian', x: 6, y: 5 },
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function createInitialState(seed = 0) {
  return {
    seed,
    turn: 1,
    phase: 'player',
    actedUnitIds: [],
    winner: null,
    endReason: null,
    coverTiles: clone(COVER_TILES),
    units: INITIAL_UNITS.map((unit) => ({
      ...unit,
      hp: UNIT_STATS[unit.kind].maxHp,
      alive: true,
    })),
    log: [],
  };
}

export function getUnit(state, unitId) {
  return state.units.find((unit) => unit.id === unitId);
}

export function getAliveUnits(state, side) {
  return state.units.filter((unit) => unit.alive && (!side || unit.side === side));
}

export function isInsideBoard(x, y) {
  return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

export function isOccupied(state, x, y, ignoreUnitId = null) {
  return state.units.some(
    (unit) => unit.alive && unit.id !== ignoreUnitId && unit.x === x && unit.y === y,
  );
}

export function isCoverTile(state, x, y) {
  return state.coverTiles.some((tile) => tile.x === x && tile.y === y);
}

export function getUnitStats(kind) {
  return UNIT_STATS[kind];
}

export function getLegalMoves(state, unitId) {
  const unit = getUnit(state, unitId);
  if (!unit || !unit.alive) {
    return [];
  }

  const stats = getUnitStats(unit.kind);
  const legalMoves = [];

  for (let x = 0; x < BOARD_SIZE; x += 1) {
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      if (!isInsideBoard(x, y)) {
        continue;
      }
      if (x === unit.x && y === unit.y) {
        continue;
      }
      if (isOccupied(state, x, y, unit.id)) {
        continue;
      }
      if (manhattan(unit, { x, y }) <= stats.move) {
        legalMoves.push({ x, y });
      }
    }
  }

  return legalMoves;
}

export function getAttackTargets(state, attackerId) {
  const attacker = getUnit(state, attackerId);
  if (!attacker || !attacker.alive) {
    return [];
  }

  const stats = getUnitStats(attacker.kind);
  return state.units.filter((target) => {
    if (!target.alive || target.side === attacker.side) {
      return false;
    }
    const distance = manhattan(attacker, target);
    return distance >= stats.minRange && distance <= stats.maxRange;
  });
}

function validateActionWindow(state, unit) {
  if (state.winner) {
    throw new Error('Game is already finished.');
  }
  if (!unit || !unit.alive) {
    throw new Error('Unit is not available.');
  }
  if (unit.side !== state.phase) {
    throw new Error(`Wrong phase: ${state.phase}`);
  }
  if (state.actedUnitIds.includes(unit.id)) {
    throw new Error(`Unit ${unit.id} already acted in this phase.`);
  }
}

function performMove(state, unit, to) {
  if (!to) {
    return;
  }
  if (!isInsideBoard(to.x, to.y)) {
    throw new Error('Move target is outside board.');
  }
  if (isOccupied(state, to.x, to.y, unit.id)) {
    throw new Error('Move target is occupied.');
  }
  const legal = getLegalMoves(state, unit.id).some((move) => move.x === to.x && move.y === to.y);
  if (!legal) {
    throw new Error('Move target is out of range.');
  }

  unit.x = to.x;
  unit.y = to.y;
}

function performAttack(state, attacker, targetId) {
  if (!targetId) {
    return;
  }

  const target = getUnit(state, targetId);
  if (!target || !target.alive) {
    throw new Error('Attack target is invalid.');
  }
  if (target.side === attacker.side) {
    throw new Error('Attack target is ally.');
  }

  const legal = getAttackTargets(state, attacker.id).some((candidate) => candidate.id === targetId);
  if (!legal) {
    throw new Error('Attack target is out of range.');
  }

  const attackerStats = getUnitStats(attacker.kind);
  const coverReduction = isCoverTile(state, target.x, target.y) ? 1 : 0;
  const damage = Math.max(1, attackerStats.attack - coverReduction);
  target.hp = Math.max(0, target.hp - damage);

  if (target.hp === 0) {
    target.alive = false;
  }
}

function hpTotal(state, side) {
  return getAliveUnits(state, side).reduce((total, unit) => total + unit.hp, 0);
}

export function evaluateWinner(state) {
  const alivePlayer = getAliveUnits(state, 'player').length;
  const aliveAgi = getAliveUnits(state, 'agi').length;

  if (alivePlayer === 0 && aliveAgi === 0) {
    return { done: true, winner: 'draw', reason: 'both-eliminated' };
  }
  if (aliveAgi === 0) {
    return { done: true, winner: 'player', reason: 'elimination' };
  }
  if (alivePlayer === 0) {
    return { done: true, winner: 'agi', reason: 'elimination' };
  }

  if (state.turn > MAX_TURNS) {
    const playerHp = hpTotal(state, 'player');
    const agiHp = hpTotal(state, 'agi');

    if (playerHp > agiHp) {
      return { done: true, winner: 'player', reason: 'max-turn-hp' };
    }
    if (agiHp > playerHp) {
      return { done: true, winner: 'agi', reason: 'max-turn-hp' };
    }
    return { done: true, winner: 'draw', reason: 'max-turn-draw' };
  }

  return { done: false, winner: null, reason: null };
}

function advancePhaseIfNeeded(state) {
  const unitsInPhase = getAliveUnits(state, state.phase);
  const actedCount = unitsInPhase.filter((unit) => state.actedUnitIds.includes(unit.id)).length;

  if (actedCount < unitsInPhase.length) {
    return;
  }

  if (state.phase === 'player') {
    state.phase = 'agi';
    state.actedUnitIds = [];
    return;
  }

  state.phase = 'player';
  state.actedUnitIds = [];
  state.turn += 1;
}

export function applyAction(state, unitId, action) {
  const unit = getUnit(state, unitId);
  validateActionWindow(state, unit);

  const actionType = action?.type || 'wait';

  if (actionType === 'move') {
    performMove(state, unit, action.to);
  } else if (actionType === 'attack') {
    performAttack(state, unit, action.targetId);
  } else if (actionType === 'move+attack') {
    performMove(state, unit, action.to);
    performAttack(state, unit, action.targetId);
  } else if (actionType === 'wait') {
    // Intentionally no-op.
  } else {
    throw new Error(`Unknown action type: ${actionType}`);
  }

  state.log.push({
    turn: state.turn,
    phase: state.phase,
    unitId,
    action,
  });
  state.actedUnitIds.push(unitId);

  const winnerNow = evaluateWinner(state);
  if (winnerNow.done) {
    state.winner = winnerNow.winner;
    state.endReason = winnerNow.reason;
    return state;
  }

  advancePhaseIfNeeded(state);

  const winnerAfterAdvance = evaluateWinner(state);
  if (winnerAfterAdvance.done) {
    state.winner = winnerAfterAdvance.winner;
    state.endReason = winnerAfterAdvance.reason;
  }

  return state;
}

export function cloneState(state) {
  return clone(state);
}
