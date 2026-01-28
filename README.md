## Mezo Documentation

Developer documentation site for the Mezo ecosystem. This repo contains the source for the public docs at `https://mezo.org/docs`, built with Astro and Starlight.

### Tech stack
- **Astro 5** with **Starlight** for documentation
- **Node.js** and **npm** for scripts and tooling
- **remark-math** and **rehype-katex** for math/KaTeX support
- **sharp** for image processing
- **starlight-sidebar-topics** to manage sidebar topics

### Contributing
We welcome issues and PRs that improve clarity, correctness, and coverage.

1) Fork and branch
- Create a descriptive branch from `main`:
  - `docs/<topic>-<short-description>` (documentation changes)
  - `fix/<scope>-<short-description>` (bugfixes in scripts/config)
  - `chore/<short-description>` (non-user-facing maintenance)

2) Style and formatting
- Use **Prettier** via:
```bash
npm run lint-fix
```
- Keep markdown concise, use headings (`##`, `###`) and lists, and prefer site-relative links.

3) Commit messages
- Follow Conventional Commits when possible:
  - `docs: update mezo-pools user guide`
  - `fix(scripts): handle missing asset directory in process step`

4) Run locally and sanity-check
- `npm run dev` then review pages you modified at `http://localhost:4321`.
- Optional: with the dev server running, check links:
```bash
npm run linkcheck-local
```

5) Open a pull request
- Keep PRs focused and small; include context, screenshots if UI/content heavy, and links to related issues.
- The docs site deploy pipeline will build the site; ensure the dev build works before requesting review.

6) Reviews & merging
- We require at least one approval from a maintainer.
- Squash-merge preferred; branch names and PR titles should clearly describe the change.
  
### Sidebar navigation (important)

The sidebar is **generated from `src/content/docs/docs/SUMMARY.md`**. Do not edit sidebar entries in `astro.config.mjs` directly — those changes will be overwritten.

The build pipeline runs `scripts/process-gitbook.js` before every `dev` and `build` command. This script:
1. Reads `SUMMARY.md` to determine the sidebar structure
2. Converts section titles to human-readable labels (e.g. `mezo-earn` → "Mezo Earn")
3. Overwrites the `starlightSidebarTopics(...)` block in `astro.config.mjs`

**To add a new page to the sidebar:**
1. Create the `.md` / `.mdx` file under `src/content/docs/docs/`
2. Add an entry in `SUMMARY.md` at the correct indentation level
3. Run `npm run dev` — the processor will regenerate `astro.config.mjs` automatically

**To rename a sidebar section:**
1. Change the link text in `SUMMARY.md` (e.g. `* [features](...)`  → `* [Mezo Earn](...)`)
2. Run `npm run dev` to regenerate

### Project structure
- `src/content/docs/docs/SUMMARY.md` — **source of truth for sidebar navigation**. All sidebar changes must be made here.
- `src/content/docs/docs/` — primary markdown content organized by topic (e.g., `users/`, `developers/`).
- `public/docs/` — static assets (images, PDFs) served as-is.
- `src/assets/` — project assets referenced by the site.
- `scripts/process-gitbook.js` — parses `SUMMARY.md`, transforms GitBook-style content, and regenerates sidebar topics in `astro.config.mjs`.
- `scripts/linkcheck.js` — simple crawler to check links when the site is running locally.
- `astro.config.mjs` — Astro/Starlight configuration and custom head scripts. **Sidebar section is auto-generated — do not edit manually.**

Tips:
- Add or update docs under `src/content/docs/docs/…`.
- Place large assets in `public/docs/...` and reference via site-relative paths.
- Run `npm run dev` to auto-process and preview changes.


### Issue labels (suggested)
- `area/users` · `area/developers` · `content` · `typo` · `fix` · `chore` · `good first issue`

### Security
If you believe you’ve found a security issue that affects Mezo software, please do not open a public issue. Instead, contact us via the channels listed on `https://mezo.org` or our GitHub organization profile.

### License
This repository is licensed under **GPL-3.0**. By contributing, you agree that your contributions will be licensed under the GPL-3.0 license. See `LICENSE` for details.

### Disclaimer
The documentation and scripts in this repository are provided “as is,” without warranties or conditions of any kind. Nothing herein constitutes financial, legal, or investment advice. Use of the software and materials is at your own risk. See the GPL-3.0 license in `LICENSE` for the full disclaimer of warranty and limitation of liability.


