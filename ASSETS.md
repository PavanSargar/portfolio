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

## About photo stack

The three travel photos were supplied by Pawan on November 8, 2026, and the
personal desk photo on November 9, 2026. The stack order is Desk, Mountains,
Snow, then Paragliding, with the desk photograph first. All stack
images use lazy loading and responsive Next Image sources.

- `public/images/pawan-paragliding.webp`: 4176×2784 JPEG compressed to
  1200×800 WebP (123,276 bytes). The display rotates it 90° clockwise and
  positions the crop at `28% 50%`; the stored pixels keep their original
  orientation.
- `public/images/pawan-mountain-air.webp`: 6048×4032 JPEG compressed to
  1200×800 WebP (91,078 bytes), with a centered crop.
- `public/images/pawan-mountains.webp`: reuses the existing compressed
  photograph (124,396 bytes). The third attachment matches the original
  mountain photograph byte-for-byte. The About stack uses a centered crop.
- `public/images/pawan-desk.webp`: 4590×8160 JPEG compressed to 1000×1778
  WebP. The 3:2 display uses `50% 30%` positioning to frame the laptop screen
  and coffee while keeping the complete portrait source available.

Embedded metadata is omitted from the WebP assets. These personal photos
retain their original colors and have no stock attribution.

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
