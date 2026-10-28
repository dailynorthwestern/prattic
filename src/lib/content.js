export const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeURL(value = '') {
  return /^(https?:\/\/|mailto:|#|\/(?!\/))/.test(value) ? value : '#';
}
// Intentionally limited inline Markdown. Raw HTML is always escaped.
export function inline(text = '') {
  const pattern = /\[([^\]]+)\]\(([^\s)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let result = '', start = 0;
  for (const match of text.matchAll(pattern)) {
    result += escapeHTML(text.slice(start, match.index));
    result += match[1] !== undefined ? `<a href="${escapeHTML(safeURL(match[2]))}">${inline(match[1])}</a>` : match[3] !== undefined ? `<strong>${inline(match[3])}</strong>` : `<em>${inline(match[4])}</em>`;
    start = match.index + match[0].length;
  }
  return result + escapeHTML(text.slice(start));
}
export const asset = (path) => typeof path === 'string' && path.startsWith('/') && !path.startsWith('//') ? `${import.meta.env?.BASE_URL || '/'}${path.slice(1)}` : path;
export function validateStory(story) {
  if (!story.title || !story.dek || !story.authors?.length || !/^\d{4}-\d{2}-\d{2}$/.test(story.date) || Number.isNaN(Date.parse(story.date))) throw new Error('story.js needs title, dek, authors, and an ISO publication date.');
  const image = (value) => { if (!value?.src || !value.alt || !value.width || !value.height) throw new Error('Every image needs src, alt, width, and height.'); };
  image(story.hero);
  const ids = new Set();
  for (const block of story.blocks) {
    if (!['paragraph','heading','image','quote','video','embed','scrolly','audioCard'].includes(block.type)) throw new Error(`Unsupported story block: ${block.type}`);
    if (block.id) { if (ids.has(block.id)) throw new Error(`Duplicate section id: ${block.id}`); ids.add(block.id); }
    if (['paragraph','heading','quote'].includes(block.type) && !block.text) throw new Error(`${block.type} needs text.`);
    if (block.type === 'image') image(block);
    if (['video','embed'].includes(block.type) && (!( /^https:\/\//.test(block.src) || (block.type === 'video' && block.kind === 'native' && /^\/(?!\/)/.test(block.src)) ) || !block.title)) throw new Error('Media needs an HTTPS embed src (or local native video path) and descriptive title.');
    if (block.type === 'audioCard') {
      if (!block.image || !block.imageAlt || !block.description || !block.audioLabel || !block.transcript) throw new Error('Audio cards need image, imageAlt, description, audioLabel, and transcript.');
      if (block.audioSrc && !/^(https:\/\/|\/(?!\/))/.test(block.audioSrc)) throw new Error('Audio sources must be an HTTPS URL or a local absolute path.');
    }
    if (block.type === 'scrolly') {
      if (!block.steps?.length || !block.title) throw new Error('Scrolly sections need a title and steps.');
      for (const step of block.steps) { image(step.image); if (!step.title || !step.text) throw new Error('Each scrolly step needs title and text.'); }
    }
  }
}
