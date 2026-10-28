// Each card owns its audio and controls. Transcript disclosure also works without JS.
document.querySelectorAll('[data-audio-card]').forEach(card => {
  const audio = card.querySelector('[data-card-audio]');
  const button = card.querySelector('[data-audio-play]');
  const icon = card.querySelector('[data-audio-icon]');
  const label = card.querySelector('[data-audio-label]');
  const duration = card.querySelector('[data-audio-duration]');
  const status = card.querySelector('[data-audio-status]');
  if (!audio || !button || !audio.getAttribute('src')) return;
  audio.hidden = true; // Keep native controls as the no-JavaScript fallback.
  button.disabled = false;
  const sync = () => {
    const playing = !audio.paused && !audio.ended;
    icon.textContent = playing ? '⏸' : '▶';
    label.textContent = playing ? button.dataset.pauseLabel : button.dataset.playLabel;
    button.setAttribute('aria-pressed', String(playing));
  };
  const updateDuration = () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      const seconds = Math.round(audio.duration);
      duration.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
      status.textContent = '';
    }
  };
  audio.addEventListener('loadedmetadata', updateDuration);
  audio.addEventListener('durationchange', updateDuration);
  audio.addEventListener('play', () => {
    document.querySelectorAll('[data-card-audio]').forEach(other => { if (other !== audio) other.pause(); });
    sync();
  });
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);
  audio.addEventListener('error', () => {
    button.disabled = true;
    duration.textContent = '—:—';
    status.textContent = 'Audio is currently unavailable.';
    sync();
  });
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
  updateDuration();
  sync();
});
