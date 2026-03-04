# Quick Website Audit (2026-03-04)

## Tech stack
- Static frontend: `index.html`, `css/styles.css`, `js/scripts.js`, `app.js`
- Bootstrap 4-style theme (compiled/customized CSS)
- jQuery + jQuery Easing + Magnific Popup loaded from CDNs
- No package manager, no build system, no test pipeline

## Build
- No build step required.
- Site can be served as static files directly.

## Deploy
- No deployment workflow/config in repository (`.github/workflows`, Netlify/Vercel configs, etc. not present).
- Current repo appears deployable to any static host (GitHub Pages/Netlify/Cloudflare Pages/Nginx).
- Contact form currently has no backend integration in repo (form points to `/send_email`, but no server handler exists here).

## Top 3 improvements selected
1. **SEO**
   - Add missing metadata (viewport, robots, OpenGraph).
2. **Speed/Performance**
   - Preconnect to font origins and lazy-load project images.
3. **UX/Form quality**
   - Remove global `<base target="_blank">` behavior and improve contact form input semantics/validation.

## Done in this PR
- Added SEO/social meta tags in `<head>`.
- Added `preconnect` hints for Google Fonts.
- Added meaningful `alt` text to portfolio/profile images.
- Added `loading="lazy"` + `decoding="async"` to project images.
- Improved form fields with proper input types and autocomplete.
- Made message field required.
- Removed global `<base target="_blank">` to avoid unexpected new-tab behavior.

## Recommended next PRs
- Implement real contact form backend (e.g., serverless form endpoint).
- Add deployment pipeline (GitHub Actions + static host target).
- Reduce CSS payload by splitting framework vs custom CSS and minifying assets.
