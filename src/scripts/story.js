import { storyTransitionOpacity } from '../lib/story-transition.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
// Content remains readable without JavaScript and if observers are unavailable.
const elements = [...document.querySelectorAll('[data-reveal]')];
let revealObserver;
function configureMotion() {
  revealObserver?.disconnect();
  elements.forEach(el => el.classList.remove('reveal-ready'));
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.remove('reveal-ready'); revealObserver.unobserve(target); }
    });
  }, { threshold: 0.08 });
  elements.forEach(el => {
    if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('reveal-ready'); revealObserver.observe(el); }
  });
}
configureMotion();
reduced.addEventListener('change', configureMotion);
if ('IntersectionObserver' in window) {
  document.querySelectorAll('[data-scrolly]').forEach(section => {
    section.classList.add('scrolly-enhanced');
    const steps = [...section.querySelectorAll('[data-step]')];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top - innerHeight * .35) - Math.abs(b.boundingClientRect.top - innerHeight * .35));
      if (!visible.length) return;
      const index = visible[0].target.dataset.step;
      section.querySelectorAll('[data-frame]').forEach(frame => frame.classList.toggle('is-active', frame.dataset.frame === index));
      section.querySelectorAll('[data-dot]').forEach(dot => dot.classList.toggle('is-active', dot.dataset.dot === index));
    }, { rootMargin: '-25% 0px -35% 0px', threshold: 0 });
    steps.forEach(step => observer.observe(step));
  });
}
const storyBody = document.querySelector('#story-body');
const entryOverlay = storyBody?.querySelector('[data-story-entry-overlay]');
const secondParagraph = storyBody?.querySelectorAll(':scope > .body-copy')[1];
function updateStoryEntry() {
  if (!entryOverlay || !secondParagraph) return;
  if (reduced.matches) {
    entryOverlay.style.opacity = '0';
    return;
  }
  const storyTop = storyBody.getBoundingClientRect().top;
  const secondTop = secondParagraph.getBoundingClientRect().top;
  entryOverlay.style.height = `${Math.max(0, secondTop - storyTop)}px`;
  entryOverlay.style.opacity = String(storyTransitionOpacity(storyTop, secondTop, innerHeight));
}
reduced.addEventListener('change', updateStoryEntry);
// Recalculate when fonts or responsive content change the opening paragraphs' height.
if (storyBody && 'ResizeObserver' in window) {
  new ResizeObserver(() => scheduleProgress()).observe(storyBody);
}
document.fonts?.ready.then(() => scheduleProgress());
addEventListener('pageshow', () => scheduleProgress());
const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateProgress() {
  const height = document.documentElement.scrollHeight - innerHeight;
  progress?.style.setProperty('--progress', String(height > 0 ? Math.min(1, Math.max(0, scrollY / height)) : 0));
  updateStoryEntry();
  scheduled = false;
}
function scheduleProgress() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
}
addEventListener('scroll', scheduleProgress, { passive: true });
addEventListener('resize', scheduleProgress);
updateProgress();
const video = document.querySelector('[data-hero-video]');
if (video) {
  const syncHeroMotion = () => {
    video.muted = true;
    video.autoplay = !reduced.matches;
    if (reduced.matches) video.pause();
    else video.play().catch(() => { /* The dark background preserves text readability if autoplay is unavailable. */ });
  };
  reduced.addEventListener('change', syncHeroMotion);
  syncHeroMotion();
}
