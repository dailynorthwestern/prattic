import test from 'node:test';
import assert from 'node:assert/strict';
import { formatAudioTime, getWaveformPeaks } from '../src/lib/audio-waveform.js';
const buffer = (...channels) => ({ length: channels[0].length, numberOfChannels: channels.length, getChannelData: i => channels[i] });
test('waveform bins preserve where sound occurs across both channels', () => {
  assert.deepEqual(getWaveformPeaks(buffer([0, 0, .2, -.4, 0, 0, .8, 0], [0, 0, 0, 0, 0, -.8, 0, 0]), 4), [0, .5, 1, 1]);
});
test('silence stays flat without invalid peak values', () => {
  assert.deepEqual(getWaveformPeaks(buffer([0, 0, 0, 0]), 4), [0, 0, 0, 0]);
});
test('elapsed time is formatted without rounding beyond playback position', () => {
  assert.equal(formatAudioTime(58.9), '0:58');
  assert.equal(formatAudioTime(65), '1:05');
  assert.equal(formatAudioTime(0), '0:00');
  assert.equal(formatAudioTime(Infinity), '—:—');
  assert.equal(formatAudioTime(NaN), '—:—');
});
