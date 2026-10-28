// Pure helpers shared by the player and its tests. All waveform peaks come from decoded audio.
export function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '—:—';
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

export function getWaveformPeaks(buffer, count = 120) {
  const peaks = new Array(count).fill(0);
  if (!buffer.length || !buffer.numberOfChannels) return peaks;
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, i) => buffer.getChannelData(i));
  let maximum = 0;
  for (let i = 0; i < count; i++) {
    const start = Math.floor(i * buffer.length / count);
    const end = Math.min(buffer.length, Math.max(start + 1, Math.floor((i + 1) * buffer.length / count)));
    let peak = 0;
    for (const samples of channels) {
      for (let j = start; j < end; j++) peak = Math.max(peak, Math.abs(samples[j]));
    }
    peaks[i] = peak;
    maximum = Math.max(maximum, peak);
  }
  return maximum > 0 ? peaks.map(peak => peak / maximum) : peaks;
}
