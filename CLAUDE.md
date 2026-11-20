# Portfolio site: build guide

Personal portfolio for Aaryan (MS Analytics, Georgia Tech, graduating Dec 2026; targeting data science and AI engineering roles). Static Astro site hosted free on GitHub Pages. Keep it minimal, fast and easy to add projects to. The goal for this session is a live site in about an hour, so prefer the simplest thing that works.

## Ground rules
- Do not invent facts, metrics, dataset sizes or results. Where content is missing, leave a visible `TODO:` placeholder in the Markdown and list all TODOs at the end.
- Ship zero client-side JS unless a feature truly needs it. No UI framework, no Tailwind. Plain CSS in one global stylesheet with CSS variables.
- At most two typefaces and one accent color.
- Accessible: semantic HTML, visible focus states, alt text, text contrast of at least WCAG AA (check the accent on the background and fix if it fails).
- Mobile-first, then scale up. Test at 375px wide.
- Commit in small steps with clear messages. Do not push until the build passes.

## Design tokens (Palette A: "Plum dark")
```css
:root {
  --bg: #17121F;
  --surface: #211A2E;   /* cards; slightly lighter than bg */
  --border: #3A2F4D;
  --text: #EDE7F6;
  --muted: #A99CBF;
  --accent: #FFB347;    /* links, hover, key numbers only */
}
```
Use the accent sparingly: links, hover/focus states, and one or two highlighted metrics per page. Everything else is `--text` or `--muted`. Do not use cream/beige backgrounds or dark green/blue/black text anywhere.

## Typography
- Headings and body: **Familjen Grotesk**.
- Labels, tech-stack tags, metrics and code: **JetBrains Mono**.
- Prefer self-hosting via Fontsource (`@fontsource-variable/familjen-grotesk`, `@fontsource-variable/jetbrains-mono`). If a package name does not exist, fall back to Google Fonts with `display=swap` and preconnect.
- Scale: body 17-18px, line-height 1.6, max content width about 70ch. Headings tight (line-height 1.15). Use a modest type scale with `clamp()` for the hero heading.

## Setup
1. `npm create astro@latest` in this folder, choose the **minimal** template, TypeScript "relaxed" or "strict" (either is fine), install dependencies, initialize git.
2. Follow the content-collections docs for the Astro version that gets installed (in recent versions this is `src/content.config.ts` using a `glob` loader). Define a `projects` collection with this frontmatter schema:
   - `title` (string), `summary` (string, one line), `order` (number)
   - `stack` (string array), `status` ("shipped" | "in-progress")
   - `metric` (string, optional: one headline result, only if real)
   - `repo` (url, optional), `demo` (url, optional), `cover` (image, optional)
3. Commit the lockfile. The deploy action needs it.

## Site structure
- `/` Home: short hero (name, one-line positioning, two links: Projects, GitHub), a grid of project cards sorted by `order`, short about blurb, contact links.
- `/projects/[slug]` Case study page rendered from Markdown.
- `/about` optional; skip if the home page about blurb is enough.
- Shared layout with a minimal header (name + nav) and footer (email, GitHub, LinkedIn).

### Hero copy (editable)
One sentence, plain language. Draft: "Data scientist and AI engineer. I turn messy data into models and products people use." Keep a second line stating: MS Analytics at Georgia Tech, graduating December 2026, open to full-time roles. Prior experience: decision analytics at ZS Associates (pharma). `TODO:` confirm what Aaryan wants public (employer, GPA, graduation date).

### Project card
Title, one-line summary, 2-4 stack tags in mono, optional single metric, links to repo/demo. The whole card is a link to the case study.

### Case study template (each project file)
```md
## The problem
Who needs this and why. 2-3 sentences.

## Approach
Data, method, and the key design decisions (and the alternatives rejected).

## Result
Evaluation numbers or user-facing outcome. Only real numbers.

## What I'd do next
1-3 honest limitations or next steps.

## Links
Repo, demo, write-up.
```
Every project must be explainable at a glance: problem, approach, result, in that order.

## Starter projects (create as Markdown files with TODO placeholders)
1. **VibeEngine**: full-stack music recommendation using LLMs and sentence embeddings. Currently local-only; add `demo` later once hosted. Order 1.
2. **NBA Player Archetype Clustering**: K-Means and GMM clustering with a Win Shares regression. Order 2.
3. **MedViz**: organ-transplant data visualization dashboard (course project), 562,000-record dataset, Kaplan-Meier survival analysis, three gradient-boosting models. Order 3.

Write team-project descriptions at whole-project level (what the project did), not by who built which part.

## Deploy to GitHub Pages
Official guide: https://docs.astro.build/en/guides/deploy/github/
1. Repo name decides the URL. For `https://<username>.github.io/`, name the repo `<username>.github.io` and set only `site` in `astro.config.mjs`. For any other repo name, set both `site` and `base: '/<repo-name>'`.
2. Add `.github/workflows/deploy.yml` using Astro's official action. Copy the current version from the guide above (it uses `actions/checkout`, `withastro/action`, and `actions/deploy-pages`, with `permissions: contents: read, pages: write, id-token: write`, triggered on push to `main`).
3. In the GitHub repo: Settings > Pages > Source > **GitHub Actions**.
4. Push to `main` and confirm the Actions run goes green and the site loads. If assets 404, the `site`/`base` settings are the first thing to check (internal links must respect `base`).

## Definition of done
- `npm run build` passes with no warnings that matter.
- Lighthouse (desktop and mobile) at 90+ for Performance, Accessibility, Best Practices, SEO.
- Home, three project pages, and 404 page work; all links resolve.
- Page titles, meta descriptions and Open Graph tags set.
- Palette and fonts match this file; no other colors or fonts.
- Final message lists every remaining `TODO:` so Aaryan can fill them in.

## Later (not in the first hour)
- Host VibeEngine somewhere free and add its `demo` link.
- Add DL / language-model course projects as new Markdown files.
- Optional: subtle scroll effects or sketch illustrations, only after the basics are live.
