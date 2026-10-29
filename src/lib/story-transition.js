// Fade between the story's top and its fifth paragraph reaching the viewport bottom.
export function storyTransitionOpacity(storyTop, fifthParagraphTop, viewportHeight) {
  const distance = fifthParagraphTop - storyTop;
  if (distance <= 0) return 0;
  const progress = Math.min(1, Math.max(0, (viewportHeight - storyTop) / distance));
  return 0.96 * (1 - progress);
}
