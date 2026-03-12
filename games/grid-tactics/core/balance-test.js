import { chooseEasyAction } from './ai.js';
import { applyAction, createInitialState, getAliveUnits, MAX_TURNS } from './game.js';

function activeUnitIds(state) {
  return getAliveUnits(state, state.phase)
    .filter((unit) => !state.actedUnitIds.includes(unit.id))
    .map((unit) => unit.id);
}

function runSingleMatch(seed, initialPhase = 'player') {
  const state = createInitialState(seed);
  state.phase = initialPhase;
  state.actedUnitIds = [];
  let guard = 0;

  while (!state.winner && guard < 400) {
    guard += 1;
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
    }
  }

  if (!state.winner) {
    throw new Error('Match did not finish within step guard.');
  }

  if (state.turn > MAX_TURNS + 1) {
    throw new Error(`Turn overflow detected: ${state.turn}`);
  }

  return {
    winner: state.winner,
    turns: state.turn,
    reason: state.endReason,
  };
}

function summarize(rounds, initialPhase) {
  const summary = { player: 0, agi: 0, draw: 0, totalTurns: 0 };

  for (let i = 0; i < rounds; i += 1) {
    const result = runSingleMatch(i + 1, initialPhase);
    summary[result.winner] += 1;
    summary.totalTurns += result.turns;
  }

  return {
    initialPhase,
    rounds,
    player: summary.player,
    agi: summary.agi,
    draw: summary.draw,
    avgTurns: Number((summary.totalTurns / rounds).toFixed(2)),
  };
}

function runBalanceSuite(rounds = 100) {
  const firstPlayer = summarize(rounds, 'player');
  const firstAgi = summarize(rounds, 'agi');
  console.log('[balance] policy=easy-vs-easy');
  console.log('[balance] first=player', firstPlayer);
  console.log('[balance] first=agi', firstAgi);
}

runBalanceSuite(100);
