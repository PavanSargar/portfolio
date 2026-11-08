# Pawan Sargar — Portfolio v4

A personal journal portfolio built with Next.js 15.5 App Router, React 19.1,
Tailwind CSS v4, and TypeScript. Content and Markdown highlighting render on the
server; navigation and the EmailJS contact form are the only client components.
The visual system uses blush paper, plum text, Bricolage Grotesque headings,
and DM Sans body copy. Projects are collapsed by default; native HTML details
reveal public screenshots and contributions without requiring JavaScript.

## Local development

Use Node.js 22.14+ and Yarn 1.22.22.

```sh
yarn install --frozen-lockfile
cp .env.example .env.local
yarn dev
```

Open http://localhost:3000. Set the three `NEXT_PUBLIC_*` EmailJS identifiers in
`.env.local`. They are public browser identifiers, not private API credentials.
The existing EmailJS template uses `from_name`, `user_email`, and `message`.
If the configuration is missing, visitors see a LinkedIn contact fallback.
Environment files stay outside Git; never put a private EmailJS key in the app.

## Content and images

- `src/content/portfolio.ts`: profile, experience, contributions, milestones,
  selected testimonials, earlier projects, and photo source/crop/credit settings.
- `selectedProjects` defines Cassandra Risk, YapTxt, and VFX AI (Radiansys), in
  that order. `projectPreviews` defines their screenshot files, captions, and sources.
- `src/app/page.tsx`: homepage composition.
- `src/app/work/cassandra-risk/page.tsx`: public Cassandra Risk case study.
- `__posts/*.mdx`: existing articles, with their original `/blog/[slug]` URLs.
  The notebook welcomes future personal writing; existing article content and
  publication dates are preserved. Add new Markdown files using the same frontmatter.
- `src/styles/globals.css`: Tailwind theme tokens and responsive component styles.

The **150+ forecasters** milestone is owner-provided, dated November 2026. It is
not a daily-active count or a claim of growth attributable to one person.
The Cassandra Risk / Radiansys date overlap is intentional.

To replace photos, add your files under `public/images`, then update
`photos.portrait` (4:5) and `photos.about` (3:2). Set accurate `alt`, `position`,
optional `credit` and `creditUrl`, and set `placeholder: false` for personal photos.
The hero uses Pawan’s supplied photograph with a CSS grayscale filter.
Change the filename when
replacing an image so caches refresh. See [ASSETS.md](ASSETS.md) for attribution.

## Validation

```sh
yarn lint
yarn build
yarn typecheck
yarn playwright install chromium
yarn test:e2e
yarn audit
```

Build before running browser tests; Playwright starts the production server on
port 3000 or reuses a running local server. All EmailJS traffic is intercepted in
tests, so no messages are sent. The contact tests need all three public variables
at build time; use test values when working without real EmailJS configuration.
CI supplies dummy values. Screenshots and traces are saved under `test-results/`.

Security resolutions in `package.json` update Next's pinned PostCSS within v8
and the TypeScript ESLint parser's minimatch to the patched v11 API. Yarn reports
expected PostCSS and minimatch pin mismatches. Build, lint, and browser checks validate the
overrides; revisit them when updating Next or ESLint.

## Release on the existing Netlify site

Development is on `codex/portfolio-v4-preview`. Production promotion is deferred
to the owner after local review; no hosting settings have been changed.

The canonical domain is https://pavansargar.com. `www` redirects there.
`netlify.toml` defines the build command, output directory, and Node version.
Netlify automatically supplies its modern Next.js adapter; no legacy adapter
should be pinned in the dashboard.

1. Validate and merge the reviewed work into `v4`. If the owner later renames
   the release branch to `main`, use `main` for the production setting below.
   CI supports both branch names.
2. In the existing Netlify project, verify the repository is
   `PavanSargar/portfolio`, build command `yarn build`, and output `.next`.
3. Configure the three EmailJS public identifiers for production **builds**.
   They are embedded at build time; changing them requires a rebuild.
4. Set **Production branch** to the reviewed release branch in Build & deploy → Continuous deployment →
   Branches and deploy contexts. Pushing a branch does not change this setting.
5. Deploy, wait for Published, and verify the homepage, case study, both articles,
   optimized images, `/sitemap.xml`, `/robots.txt`, and a missing route on the
   canonical domain. Automated contact tests mock delivery; actual delivery
   should be checked with an owner-approved message before release.

For rollback, republish the previous successful Netlify deploy and restore its
production branch if needed. Preserve the previous deploy until v4 is verified.
