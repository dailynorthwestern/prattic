import test from 'node:test';
import assert from 'node:assert/strict';
import { inline, safeURL, validateStory } from '../src/lib/content.js';
const image = { src: '/assets/example.jpg', alt: 'A shoreline', width: 1200, height: 800 };
const story = () => ({ title: 'Example', dek: 'Example dek', authors: [{ name: 'Reporter' }], date: '2026-10-27', hero: image, blocks: [] });
test('renders nested inline formatting and links', () => {
 assert.equal(inline('**A *quiet* day** at [The Daily](https://dailynorthwestern.com/)'), '<strong>A <em>quiet</em> day</strong> at <a href="https://dailynorthwestern.com/">The Daily</a>');
});
test('escapes pasted HTML and rejects unsafe link protocols', () => {
 assert.equal(inline('<script>bad</script>'), '&lt;script&gt;bad&lt;/script&gt;');
 assert.equal(safeURL('javascript:alert'), '#');
 assert.equal(safeURL('//example.com'), '#');
 assert.equal(inline('[bad](javascript:alert)'), '<a href="#">bad</a>');
});
test('validates every supported block and complete scrolly steps', () => {
 const value = story();
 value.blocks = [{ type:'paragraph',text:'Text' },{ type:'heading',text:'Heading',id:'heading' },{ type:'image',...image },{ type:'quote',text:'Quote' },{ type:'video',title:'Clip',src:'https://example.com/clip.mp4' },{ type:'embed',title:'Map',src:'https://example.com/map' },{ type:'scrolly',title:'Journey',steps:[{title:'Step',text:'Description',image}]}];
 assert.doesNotThrow(() => validateStory(value));
 value.blocks[6].steps[0].image = { src: '/missing-alt.jpg' };
 assert.throws(() => validateStory(value), /Every image needs/);
});
test('reports unknown blocks and duplicate section anchors', () => {
 const value=story(); value.blocks=[{type:'unknown'}];
 assert.throws(() => validateStory(value), /Unsupported/);
 value.blocks=[{type:'heading',text:'One',id:'same'},{type:'heading',text:'Two',id:'same'}];
 assert.throws(() => validateStory(value), /Duplicate/);
});

test('supports local native videos but rejects local iframe embeds', () => {
 const value = story(); value.blocks = [{type:'video',kind:'native',src:'/assets/clip.mp4',title:'Local clip'}];
 assert.doesNotThrow(() => validateStory(value));
 value.blocks = [{type:'embed',src:'/assets/graphic.html',title:'Local embed'}];
 assert.throws(() => validateStory(value), /Media needs/);
});
