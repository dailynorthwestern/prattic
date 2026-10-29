import test from 'node:test';
import assert from 'node:assert/strict';
import { storyTransitionOpacity } from '../src/lib/story-transition.js';

test('story entry starts dark and clears exactly as the second paragraph enters', () => {
  assert.equal(storyTransitionOpacity(900, 1200, 800), 0.96);
  assert.equal(storyTransitionOpacity(800, 1100, 800), 0.96);
  assert.equal(storyTransitionOpacity(650, 950, 800), 0.48);
  assert.equal(storyTransitionOpacity(500, 800, 800), 0);
  assert.equal(storyTransitionOpacity(-100, 200, 800), 0);
});

test('scrolling back restores darkness and mobile paragraph heights set the range', () => {
  const positions = [800, 500, 200, 500, 800];
  assert.deepEqual(positions.map(top => storyTransitionOpacity(top, top + 600, 800)), [0.96, 0.48, 0, 0.48, 0.96]);
  assert.equal(storyTransitionOpacity(800, 800, 800), 0);
});
