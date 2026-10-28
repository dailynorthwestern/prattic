import { formatAudioTime, getWaveformPeaks } from '../lib/audio-waveform.js';

// Decode only near the viewport. Cache small peak arrays, rather than decoded sound buffers.
const waveformCache = new Map();
async function loadPeaks(src) {
  if (!waveformCache.has(src)) {
    waveformCache.set(src, (async () => {
      const Context = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Context) throw new Error('Audio decoding is unavailable.');
      const response = await fetch(src);
      if (!response.ok) throw new Error('Audio could not be fetched.');
      // An offline context reads samples without opening audio output or starting playback.
      const context = new Context(1, 1, 8000);
      const buffer = await context.decodeAudioData(await response.arrayBuffer());
      return getWaveformPeaks(buffer);
    })());
  }
  return waveformCache.get(src);
}

function drawWaveform(element, peaks) {
  element.querySelectorAll('[data-waveform-bars]').forEach(group => {
    const fragment = document.createDocumentFragment();
    const spacing = 600 / peaks.length;
    peaks.forEach((peak, i) => {
      const height = Math.max(2, Math.sqrt(peak) * 64);
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', String(i * spacing + 1));
      rect.setAttribute('y', String((72 - height) / 2));
      rect.setAttribute('width', String(spacing * .6));
      rect.setAttribute('height', String(height));
      rect.setAttribute('rx', '1.5');
      fragment.append(rect);
    });
    group.replaceChildren(fragment);
  });
  element.dataset.waveformState = 'ready';
}

// Playback remains native HTML audio; the slider is a native keyboard/touch-accessible range input.
document.querySelectorAll('[data-audio-card]').forEach(card => {
  const audio = card.querySelector('[data-card-audio]');
  const button = card.querySelector('[data-audio-play]');
  const icon = card.querySelector('[data-audio-icon]');
  const label = card.querySelector('[data-audio-label]');
  const duration = card.querySelector('[data-audio-duration]');
  const elapsed = card.querySelector('[data-audio-elapsed]');
  const status = card.querySelector('[data-audio-status]');
  const seek = card.querySelector('[data-audio-seek]');
  const waveform = card.querySelector('[data-audio-waveform]');
  const played = card.querySelector('.audio-card-waveform-played');
  if (!audio || !button || !audio.getAttribute('src')) return;
  audio.hidden = true; // Native controls are the no-JavaScript fallback.
  button.disabled = false;
  let animationFrame = 0;
  let scrubbing = false;
  const hasDuration = () => Number.isFinite(audio.duration) && audio.duration > 0;

  const updateProgress = () => {
    const time = scrubbing ? Number(seek.value) : audio.currentTime;
    const progress = hasDuration() ? Math.min(100, Math.max(0, time / audio.duration * 100)) : 0;
    const timeText = formatAudioTime(time);
    if (elapsed.textContent !== timeText) elapsed.textContent = timeText;
    if (!scrubbing) seek.value = String(time);
    seek.setAttribute('aria-valuetext', `${timeText} of ${formatAudioTime(audio.duration)}`);
    played.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;
  };
  const stopAnimation = () => { cancelAnimationFrame(animationFrame); animationFrame = 0; };
  const animate = () => {
    updateProgress();
    if (!audio.paused && !audio.ended && !document.hidden) animationFrame = requestAnimationFrame(animate);
  };
  const sync = () => {
    const playing = !audio.paused && !audio.ended;
    icon.textContent = playing ? '⏸' : '▶';
    label.textContent = playing ? button.dataset.pauseLabel : button.dataset.playLabel;
    button.setAttribute('aria-pressed', String(playing));
    stopAnimation();
    if (playing && !document.hidden) animate();
    else updateProgress();
  };
  const updateDuration = () => {
    if (hasDuration()) {
      duration.textContent = formatAudioTime(audio.duration);
      seek.max = String(audio.duration);
      seek.disabled = Boolean(audio.error);
      status.textContent = '';
      updateProgress();
    }
  };
  const seekTo = (time) => {
    if (!hasDuration() || audio.error) return;
    audio.currentTime = Math.min(audio.duration, Math.max(0, time));
    seek.value = String(audio.currentTime);
    updateProgress();
  };
  seek.addEventListener('input', () => seekTo(Number(seek.value)));
  seek.addEventListener('pointerdown', () => { scrubbing = true; });
  const finishScrubbing = () => { scrubbing = false; updateProgress(); };
  seek.addEventListener('pointerup', finishScrubbing);
  seek.addEventListener('pointercancel', finishScrubbing);
  seek.addEventListener('change', finishScrubbing);
  seek.addEventListener('blur', finishScrubbing);
  seek.addEventListener('keydown', event => {
    const shifts = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5, PageUp: 10, PageDown: -10 };
    if (event.key in shifts || event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      seekTo(event.key === 'Home' ? 0 : event.key === 'End' ? audio.duration : audio.currentTime + shifts[event.key]);
    }
  });

  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('durationchange', updateDuration);
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('seeked', updateProgress);
  audio.addEventListener('play', () => {
    document.querySelectorAll('[data-card-audio]').forEach(other => { if (other !== audio) other.pause(); });
    sync();
  });
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);
  document.addEventListener('visibilitychange', sync);
  const showError = () => {
    audio.pause();
    button.disabled = true;
    seek.disabled = true;
    duration.textContent = '—:—';
    status.textContent = 'Audio is currently unavailable.';
    sync();
  };
  audio.addEventListener('error', showError);
  button.addEventListener('click', async () => {
    if (!audio.paused) { audio.pause(); return; }
    button.disabled = true;
    try {
      if (audio.ended) audio.currentTime = 0;
      await audio.play();
      status.textContent = '';
    } catch {
      status.textContent = 'Audio could not be played. Please try again.';
      sync();
    } finally {
      button.disabled = Boolean(audio.error);
    }
  });

  const prepareWaveform = async () => {
    try { drawWaveform(waveform, await loadPeaks(audio.currentSrc || audio.src)); }
    catch {
      // Playback and seeking still work as a plain progress bar if decoding or CORS fails.
      waveform.dataset.waveformState = 'fallback';
    }
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); prepareWaveform(); }
    }, { rootMargin: '300px' });
    observer.observe(card);
  } else prepareWaveform();

  updateDuration();
  sync();
  if (audio.error) showError();
});
