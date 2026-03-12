import { cloneState, getAliveUnits, getAttackTargets, getLegalMoves, getUnit } from './game.js';

function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function pickLowestHpTarget(attacker, targets) {
  return targets
    .slice()
    .sort((a, b) => {
      if (a.hp !== b.hp) {
        return a.hp - b.hp;
      }
      return manhattan(attacker, a) - manhattan(attacker, b);
    })[0];
}

function nearestEnemyDistance(point, enemies) {
  return enemies.reduce((best, enemy) => {
    const distance = manhattan(point, enemy);
    return Math.min(best, distance);
  }, Number.POSITIVE_INFINITY);
}

function pickApproachMove(state, unitId) {
  const unit = getUnit(state, unitId);
  const enemies = getAliveUnits(state, unit.side === 'player' ? 'agi' : 'player');
  const legalMoves = getLegalMoves(state, unitId);

  if (enemies.length === 0 || legalMoves.length === 0) {
    return null;
  }

  return legalMoves
    .slice()
    .sort((a, b) => {
      const distA = nearestEnemyDistance(a, enemies);
      const distB = nearestEnemyDistance(b, enemies);
      if (distA !== distB) {
        return distA - distB;
      }
      if (a.x !== b.x) {
        return a.x - b.x;
      }
      return a.y - b.y;
    })[0];
}

export function chooseEasyAction(state, unitId) {
  const unit = getUnit(state, unitId);
  if (!unit || !unit.alive) {
    return { type: 'wait' };
  }

  const attackTargetsNow = getAttackTargets(state, unitId);
  if (attackTargetsNow.length > 0) {
    const target = pickLowestHpTarget(unit, attackTargetsNow);
    return { type: 'attack', targetId: target.id };
  }

  const move = pickApproachMove(state, unitId);
  if (!move) {
    return { type: 'wait' };
  }

  const trialState = cloneState(state);
  const trialUnit = getUnit(trialState, unitId);
  trialUnit.x = move.x;
  trialUnit.y = move.y;
  const attackTargetsAfterMove = getAttackTargets(trialState, unitId);

  if (attackTargetsAfterMove.length > 0) {
    const target = pickLowestHpTarget(trialUnit, attackTargetsAfterMove);
    return {
      type: 'move+attack',
      to: move,
      targetId: target.id,
    };
  }

  return {
    type: 'move',
    to: move,
  };
}
