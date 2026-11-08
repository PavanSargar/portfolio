# Asset attribution

## Personal photographs

Both photographs were supplied by Pawan on November 8, 2026. The originals
are retained outside the repository; the compressed alternatives are kept in
`public/images`. `portraitOptions` in `src/content/portfolio.ts` preserves both
sources and crop settings, alongside a background-edited version of the forest
portrait. The solid-background version is currently selected.

`public/images/pawan-solid.webp` is an AI-assisted background replacement of
the supplied forest photograph, created with the built-in imagegen tool on
November 8, 2026. The wooded background was replaced with light gray; this
is an edited image, not an unmodified studio photograph. It was resized to
675×1200 and compressed as WebP, with metadata omitted. The existing site
filter applies grayscale. The 4:5 frame uses `50% 74%` positioning and a
1.3× CSS zoom around `65% 50%` to balance the space beside the shoulders
and reduce headroom.
These crop settings leave the saved image unchanged and are kept in
`portraitOptions.solid`.

Image-edit prompt:

> Use case: precise-object-edit. Asset type: personal portfolio portrait. Edit target: the supplied photograph of Pawan in a gray coat in front of a wooded hillside. Replace only the entire wooded background with a uniform, solid light neutral gray (#E2E2E2), like a simple studio backdrop. Preserve the original person exactly: identity, facial features, expression, skin texture, curly hair and fine strands, pose, hands in pockets, gray coat, black shirt, necklace, original colors and lighting. Preserve the same vertical composition, subject scale, location, framing, and full visible clothing. Keep edges natural and clean. Do not retouch, beautify, reinterpret, or regenerate the person. No gradients, scenery, textures, props, text, borders, or watermarks. Output a photographic edit in the same portrait aspect ratio. The website will apply its own monochrome filter.

`public/images/pawan-forest.webp` was resized from a 1879×3340 JPEG to
675×1200 and compressed as WebP. The 4:5 frame uses `50% 72%` positioning
to bring Pawan’s face into the upper part of the portrait. The original colors
are preserved in the file, and the site applies its existing grayscale filter.

`public/images/pawan-mountains.webp` is the photograph supplied by Pawan on
November 8, 2026. The 6048×4032 JPEG was resized to 1600×1067 and compressed as
WebP. Embedded metadata is omitted. The source stays in color; the existing
portrait CSS applies `grayscale(1)`. The 4:5 frame uses a 62% horizontal crop
position to keep Pawan centered. No stock attribution applies to this photo.

## Temporary photography

The About image uses the [Unsplash License](https://unsplash.com/license).
It is a placeholder. Its caption, alternative text, and credit identify this
explicitly. It was downloaded on November 8, 2026.

| File | Photographer and original | Source image ID |
| --- | --- | --- |
| `public/images/workspace-placeholder.jpg` | [Domenico Loia](https://unsplash.com/photos/hGV2TfOh0ns) — desk with MacBook and iMac | `photo-1499951360447-b19be8fe80f5` |

Original image host: `images.unsplash.com`. Download size is 1200px.
Replacement sources, alt text, crop positions, and captions live in
`src/content/portfolio.ts`.

## Public project screenshots

- `public/images/cassandra-public.webp`: screenshot of https://cassandrarisk.com,
  captured November 8, 2026 at 1498×766.
- `public/images/yaptxt-public.webp`: screenshot of https://yaptxt.com,
  captured November 8, 2026 at 1280×720.
- `public/images/vfx-public.webp`: screenshot of
  https://www.vfxai.com/product/ai-video-editor,
  captured November 8, 2026 at 1280×720.

These are current public website previews, used to illustrate documented work.
The underlying product names, logos, and interface artwork belong to their
respective owners. The screenshots represent current public websites, not an
archive of any particular development period. VFX AI work is attributed to the
owner’s Radiansys role; the image does not imply authorship of every shown feature.
YapTxt’s public product description is documented at https://waystoweb.com/work/yaptxt
and https://yaptxt.com. Screenshots expand via “View more”; clicking an image opens
the full screenshot for inspection.

## Fonts

Bricolage Grotesque and DM Sans are loaded through `next/font/google` and
self-hosted by Next.js. Both use the SIL Open Font License:
[Bricolage Grotesque](https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque),
[DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans).
