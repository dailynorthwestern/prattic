# The Daily Northwestern · Interactive story template

A static Astro project with JavaScript, modular SCSS, and no client framework or animation library. The application dependencies are Astro and Sass; a development-only Node runtime provides compatibility with older local installations. All article content lives in `src/data/story.js`.

## Run locally

Use Node.js 22.23.4+ (or a current supported LTS) and npm. `.nvmrc` records the minimum version. A project-local Node 22 runtime is included as a development dependency so npm scripts also work on this workspace’s older system Node; your global installation is unchanged. You can remove that development dependency when your team standardizes on a compatible Node version.

```sh
npm install
npm run dev
```

Open the local URL printed by Astro, usually http://localhost:4321. `npm test` checks inline formatting and story validation. `npm run build` generates `dist/`; `npm run preview` serves that build.

## Start your own article

1. Open `src/data/story.js`.
2. Replace `title`, `dek`, `kicker`, `authors`, `date` (`YYYY-MM-DD`), `readTime`, `hero`, and `credits`.
3. Set `contentWarning` to your warning text, or leave it empty to omit the warning. The headline wraps naturally. Set `hero.showDek: true` to display the optional subtitle below the headline.
4. Replace the objects in `blocks` with your story, in reading order.
5. Set `sample: false` to remove the sample notice.

The current article body contains the supplied Prattic draft: 38 paragraphs and three headings, in their original order, with fact-check annotations and image-placement notes removed. Quotes render as ordinary paragraphs. No images, embeds, pull quotes, scroll sections or animations are enabled in this article. The reusable components below remain available for future stories. The hero uses the supplied `public/assets/PRATTIC V2.mp4` video.

Authors accept `{ name: 'Reporter Name', url: 'https://…' }`; `url` is optional. Project credits accept `{ role: 'Photography', name: 'Name' }`. Keep commas between array entries. Use backticks for text with apostrophes or multiple lines.

### Paragraphs and headings

```js
{ type: 'paragraph', lead: true, text: `Start your story here.` },
{ type: 'paragraph', text: `Use **bold**, *italics*, and [links](https://dailynorthwestern.com/).` },
{ type: 'heading', id: 'a-new-chapter', label: '01 / Context', text: 'A new chapter' },
```

Only inline links, bold and italic are supported; raw HTML is escaped. Each paragraph is its own block. All paragraphs use regular Georgia type, including the first paragraph. Give headings unique, lowercase, hyphenated `id` values for anchor links. Unsupported block types and incomplete required fields fail the build with a content error.

### Images

The simplest path: put images in `public/assets/` and reference `/assets/photo.jpg` in `story.js`. These files are served unchanged; export sensible dimensions and compressed WebP/JPEG files yourself. Supply actual intrinsic dimensions to reserve image space.

```js
{
  type: 'image', src: '/assets/photo.jpg',
  alt: 'Describe what the image shows, rather than repeating the caption.',
  width: 1600, height: 1067,
  layout: 'wide', // 'inline', 'wide', or 'full'
  caption: 'Your caption.', credit: 'Photographer / The Daily Northwestern',
  animate: 'fade', // optional
},
```

For automatic responsive WebP optimization, put your photo in `src/assets/`, add `import photo from '../assets/photo.jpg';` at the top of `story.js`, and use `src: photo`. The included samples demonstrate this path. `MediaImage.astro` generates responsive sizes at build time. Both paths work for body and scrolly images. Article images load lazily.

Set `hero: { video: '/assets/PRATTIC%20V2.mp4', showDek: false }`. The full-viewport video plays automatically, muted and inline, and loops without controls. Text is centered near the bottom over a dark gradient. Reduced-motion readers see a static dark background and playback pauses. Asset URLs include Astro’s configured base path in production.

### Pull quotes

```js
{
  type: 'quote', text: 'A verified quotation from your reporting.',
  attribution: 'Source Name', role: 'Source description', animate: 'fade',
},
```

### Videos

Put an MP4, poster and WebVTT captions in `public/assets/`:

```js
{
  type: 'video', kind: 'native',
  src: 'https://your-media-host.example/video.mp4',
  title: 'A descriptive video title', poster: '/assets/poster.jpg',
  captions: '/assets/captions.vtt', language: 'en',
  caption: 'Video credit and context.',
  transcript: 'A full text alternative to the video.',
},
```

You can use `src: '/assets/video.mp4'` for local media. Include captions for spoken audio and a descriptive transcript. Native videos have keyboard-accessible browser controls and never autoplay. For YouTube or Vimeo use `kind: 'iframe'` with the provider’s HTTPS **embed URL**, not its watch page URL. Provider embedding policies still apply.

### Other embeds

```js
{
  type: 'embed', src: 'https://your-provider.example/embed/graphic',
  title: 'What the interactive shows', caption: 'Source and context.',
  link: 'https://your-provider.example/graphic',
},
```

Embeds load lazily, have descriptive titles, use a restricted iframe sandbox, and include a direct link. Providers must allow embedding. Use trusted providers; same-origin embeds with scripts should be reviewed as code. The included OpenStreetMap example needs an internet connection. For custom interactions, host a standalone graphic and embed it; adding a new native block type requires a developer to extend the renderer and validator.

### Scrollytelling

```js
{
  type: 'scrolly', title: 'How the landscape changed',
  steps: [
    {
      label: '01 / Before', title: 'The starting point',
      text: 'Your **formatted** explanation.',
      image: { src: '/assets/before.jpg', alt: 'The shoreline before construction', width: 1600, height: 1067, caption: 'Before construction.', credit: 'Photographer' },
    },
    {
      label: '02 / After', title: 'A different view', text: 'What changed and why it matters.',
      image: { src: '/assets/after.jpg', alt: 'The shoreline after construction', width: 1600, height: 1067, caption: 'After construction.', credit: 'Photographer' },
    },
  ],
},
```

Duplicate steps to add more scenes. Each section runs independently. On desktop, an IntersectionObserver changes a sticky image as the corresponding text passes through the viewport. On mobile (700px and below), images appear directly with their text. Without JavaScript or observer support, all images and passages remain visible. The screen reader sees one accessible copy of each image and caption. Reduced-motion preferences remove transitions and reveal effects.

Any paragraph, heading, image, quote or media block can have `animate: 'fade'` or `animate: 'slide'`. Omit `animate` for normal reading. Animation initializes only for offscreen elements, runs once and leaves content visible if JavaScript is unavailable.

## Customize the design

- `src/styles/global.scss`: reusable `--daily-purple`, `--font-editorial`, `--text-primary` and `--background-primary` tokens, plus global accessibility rules. The article uses Georgia, 20px/1.4 type, a 680px column and white background; mobile uses 18px type with 20px side margins.
- `src/styles/_brand.scss`: reusable Daily header and footer styles.
- `src/styles/_article.scss`: hero, reading column, media, quotes, scroll layouts and responsive rules.
- `src/components/`: independent reusable Astro components.
- `src/scripts/story.js`: optional progressive enhancements only.
- `src/lib/content.js`: safe inline formatting, asset paths and build-time validation.

The header, original SVG wordmark, favicon, purple palette, Adobe Typekit stylesheet and font families are adapted from [new-ryan-field](https://github.com/dailynorthwestern/new-ryan-field), source commit `b1de477874bb8e3494aea675179321829e476c40`. Header behavior retains Subscribe/Donate actions, a back-to-top masthead and the fixed mobile layout (Subscribe hidden on small screens). The original inline project-credits footer from `src/pages/index.astro` is extracted into `Footer.astro`; credits now come from the story data. Sports-specific layouts and fonts were not copied. Source assets remain the property of their respective owners. Confirm newsroom asset/font permissions for your deployment; the font stack has Georgia/Arial fallbacks if the original Typekit kit does not serve your domain.

[Out of Bounds](https://apps.dailynorthwestern.com/outofbounds/) informed the reading pace and visual storytelling, with an original layout here.

## Build and deploy

```sh
npm ci
npm test
npm run build
npm run preview
```

Upload **the contents of `dist/`** to any static host: GitHub Pages, Cloudflare Pages, Netlify, Vercel static hosting, or the newsroom server. No server adapter or runtime is needed. For a build service, set build command `npm run build` and output directory `dist`.

For a subdirectory such as `https://apps.dailynorthwestern.com/my-story/`:

```sh
BASE_PATH=/my-story/ npm run build
BASE_PATH=/my-story/ npm run preview
```

Set the same `BASE_PATH` in your deployment environment. Always include leading and trailing slashes. All local media and branding URLs use Astro’s base path. Deploy `dist/` at that same path. For GitHub Pages, use your own repository’s Pages workflow, upload `dist` as the Pages artifact and set `BASE_PATH=/<repository-name>/`; do not copy the Ryan Field deployment settings.

Before publication, review your real content, image descriptions, captions/transcript, external embed behavior, hero text wrapping and keyboard navigation on both small and large screens.
