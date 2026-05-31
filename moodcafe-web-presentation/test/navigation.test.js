import test from 'node:test';
import assert from 'node:assert/strict';

import { createWheelNavigator } from '../src/navigation.js';

test('ignores touchpad momentum reversal and accepts the next deliberate swipe', () => {
  const moves = [];
  const navigator = createWheelNavigator({
    threshold: 80,
    cooldownMs: 650,
    resetMs: 100,
    onNavigate: (direction) => moves.push(direction),
  });

  navigator.handleWheel({ deltaX: 0, deltaY: 92, timeStamp: 0 });
  navigator.handleWheel({ deltaX: 0, deltaY: -120, timeStamp: 280 });
  navigator.handleWheel({ deltaX: 0, deltaY: 95, timeStamp: 700 });

  assert.deepEqual(moves, [1, 1]);
});
