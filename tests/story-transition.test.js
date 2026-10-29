import test from 'node:test';
import assert from 'node:assert/strict';
import { storyTransitionOpacity } from '../src/lib/story-transition.js';

test('story entry starts dark and clears exactly as the fifth paragraph enters', () => {
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

test('the longer opening stays partially dark after the second paragraph enters', () => {
  // Fifth paragraph is 900px after the story starts; second is 300px after it.
  assert.equal(storyTransitionOpacity(800, 1700, 800), 0.96);
  assert.ok(Math.abs(storyTransitionOpacity(500, 1400, 800) - 0.64) < 1e-12);
  assert.equal(storyTransitionOpacity(350, 1250, 800), 0.48);
  assert.equal(storyTransitionOpacity(-100, 800, 800), 0);
});
