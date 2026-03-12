import { chooseEasyAction } from './ai.js';
import { applyAction, createInitialState, getAliveUnits, isInsideBoard, MAX_TURNS } from './game.js';

function activeUnitIds(state) {
  return getAliveUnits(state, state.phase)
    .filter((unit) => !state.actedUnitIds.includes(unit.id))
    .map((unit) => unit.id);
}

function assertStateInvariants(state) {
  const occupied = new Set();

  for (const unit of state.units) {
    if (unit.hp < 0) {
      throw new Error(`Negative HP detected: ${unit.id} hp=${unit.hp}`);
    }
    if (!unit.alive && unit.hp !== 0) {
      throw new Error(`Dead unit with non-zero HP: ${unit.id} hp=${unit.hp}`);
    }
    if (unit.alive && !isInsideBoard(unit.x, unit.y)) {
      throw new Error(`Alive unit out of board: ${unit.id} (${unit.x},${unit.y})`);
    }
    if (!unit.alive) {
      continue;
    }
    const key = `${unit.x},${unit.y}`;
    if (occupied.has(key)) {
      throw new Error(`Overlapping alive units at ${key}`);
    }
    occupied.add(key);
  }

  const unitsInPhase = getAliveUnits(state, state.phase).map((unit) => unit.id);
  for (const unitId of state.actedUnitIds) {
    if (!unitsInPhase.includes(unitId)) {
      throw new Error(`Acted unit does not belong to current phase: ${unitId}`);
    }
  }
}

function runSingleMatch(seed) {
  const state = createInitialState(seed);
  let guard = 0;

  while (!state.winner && guard < 300) {
    guard += 1;
    assertStateInvariants(state);
    const unitIds = activeUnitIds(state);

    if (unitIds.length === 0) {
      throw new Error('No available units while match is still ongoing.');
    }

    for (const unitId of unitIds) {
      if (state.winner) {
        break;
      }
      const action = chooseEasyAction(state, unitId);
      applyAction(state, unitId, action);
      assertStateInvariants(state);
    }
  }

  if (!state.winner) {
    throw new Error('Match did not finish within step guard.');
  }

  if (state.turn > MAX_TURNS + 1) {
    throw new Error(`Turn overflow detected: ${state.turn}`);
  }

  return {
    seed,
    winner: state.winner,
    reason: state.endReason,
    turns: state.turn,
    actions: state.log.length,
  };
}

function runSmokeSuite(rounds = 10) {
  const results = [];

  for (let i = 0; i < rounds; i += 1) {
    results.push(runSingleMatch(i + 1));
  }

  const summary = results.reduce(
    (acc, result) => {
      acc[result.winner] = (acc[result.winner] || 0) + 1;
      acc.totalTurns += result.turns;
      return acc;
    },
    { player: 0, agi: 0, draw: 0, totalTurns: 0 },
  );

  const avgTurns = (summary.totalTurns / rounds).toFixed(2);
  console.log(`[smoke] matches=${rounds} player=${summary.player} agi=${summary.agi} draw=${summary.draw} avg_turns=${avgTurns}`);
  console.log('[smoke] sample=', results.slice(0, 3));
}

runSmokeSuite(12);
