# Mohammed Albadrani — Professional Portfolio

A premium, responsive one-page portfolio website for an Emergency & Security Operations Manager. Built with Next.js, TypeScript, and Tailwind CSS. Supports light/dark mode and deploys as a fully static site on GitHub Pages.

---

## Requirements

- **Node.js** 20 or current LTS
- **npm** (included with Node.js)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build (Static Export)

```bash
npm run build
```

This generates a fully static website in:

```
out/
```

The `out/` folder contains all HTML, CSS, JavaScript, images, fonts, and documents needed for deployment — no server required.

To preview the static build locally:

```bash
npx serve out
```

---

## Project Structure

```
├── public/
│   ├── images/
│   │   └── portrait.jpg          ← Professional portrait
│   ├── documents/
│   │   └── Mohammed_Albadrani_CV.pdf  ← Downloadable CV
│   ├── icons/                    ← Custom icons (if any)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout, metadata, fonts
│   │   ├── page.tsx              ← Main page (assembles all sections)
│   │   └── globals.css           ← Design system, theme tokens
│   ├── components/               ← All section components
│   ├── data/
│   │   └── portfolio.ts          ← All portfolio content (single source of truth)
│   └── types/
│       └── portfolio.ts          ← TypeScript interfaces
├── .github/
│   └── workflows/
│       └── deploy.yml            ← GitHub Pages deployment workflow
├── next.config.ts                ← Static export configuration
└── package.json
```

---

## How to Update Content

### Portfolio Text & Data

Edit **`src/data/portfolio.ts`** — this single file contains all:

- Personal information (name, title, email, phone, location)
- Professional summary
- Work experience
- Education
- Certifications
- Awards
- Expertise categories
- Focus areas
- Languages

### Portrait Image

Replace `public/images/portrait.jpg` with a new image. The filename must remain `portrait.jpg`, or update the reference in `src/components/Hero.tsx`.

### CV PDF

Replace `public/documents/Mohammed_Albadrani_CV.pdf` with an updated CV file. Keep the same filename, or update the link in `src/components/Hero.tsx`.

### Contact & Social Links

Edit the contact information in `src/data/portfolio.ts` (email, phone, location). To add LinkedIn or other social links, add them to the data file and update `src/components/Contact.tsx`.

---

## GitHub Pages Deployment

### Step-by-Step

1. **Create a new GitHub repository** (public or private with GitHub Pro).
2. **Push this project** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. **Open** the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **"Build and deployment"**, select **"GitHub Actions"** as the source.
6. Push to `main` (or manually trigger the workflow from the Actions tab).
7. Wait for the workflow to complete.
8. Open the generated URL:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Base Path for Project Sites

If you deploy to a project repository (not a `username.github.io` repository), your site will be served under a subpath:

```
https://USERNAME.github.io/REPOSITORY-NAME/
```

In this case, you need to set `basePath` in **`next.config.ts`**:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/REPOSITORY-NAME",   // ← Replace with your actual repository name
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

> **Important:** If you deploy to a **user site** (`username.github.io`), do **not** set `basePath` — the default `/` is correct.

---

## Troubleshooting

### Build fails

- Run `npx tsc --noEmit` to check for TypeScript errors.
- Ensure Node.js 20+ is installed: `node -v`.
- Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### `out/` folder is missing

- Confirm `next.config.ts` contains `output: "export"`.
- Run `npm run build` and check the terminal for errors.

### Images do not appear after deployment

- Verify images are inside `public/images/` and referenced with paths like `/images/portrait.jpg`.
- If deployed to a project repository, ensure `basePath` is set correctly in `next.config.ts` (see above).

### GitHub Pages Action fails

- Go to the repository **Settings → Pages** and confirm the source is set to **"GitHub Actions"**.
- Check the **Actions** tab for the workflow run logs.
- Ensure the repository has Pages enabled (requires a public repo, or GitHub Pro for private repos).

### Dark/light mode flashes on load

- The `suppressHydrationWarning` attribute is already set on the `<html>` tag.
- The `next-themes` library handles theme persistence via `localStorage`.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Framework, static site generation |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| next-themes | Light/dark mode |

---

## License

© Mohammed Albadrani. All rights reserved.
