# Stephanie Otalora

Personal website built with Next.js and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the static site and publishes it to GitHub Pages.

Before the first deploy, enable GitHub Pages in the repository settings:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

The site will be available at [https://stephanieotalora.github.io](https://stephanieotalora.github.io).
