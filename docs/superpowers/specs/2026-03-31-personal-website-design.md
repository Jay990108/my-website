# Personal Academic Website Design Spec

**Date:** 2026-03-31  
**Project:** Personal Website (Jekyll, single-page)

## 1. Goal
Build a clean, lightweight, responsive personal academic/professional website inspired by the provided screenshot, with only essential sections now:
- Intro-focused homepage
- Compact links line: Google Scholar, CV, Email

The structure must remain easy to expand later without redesigning the whole project.

## 2. Scope (Current)
### In scope
- Single page (`index.md`) in Jekyll
- Reusable layout (`_layouts/default.html`)
- Central editable content file (`_data/site.yml`)
- Profile image support (`assets/images/profile.jpg` placeholder)
- Clean typography and spacing similar to screenshot style
- Responsive behavior for desktop/mobile
- Local live preview via Jekyll serve
- Deployment documentation for GitHub Pages
- Custom domain setup documentation

### Out of scope (for now)
- Multiple content pages
- Blog posts
- Automated publication database
- Complex JavaScript interactions

## 3. Architecture
- **Jekyll static site** compatible with GitHub Pages.
- **Data-driven content model**: editable user content in `_data/site.yml`.
- **Presentation split**:
  - Content: `_data/site.yml`
  - Structure: `index.md`, `_layouts/default.html`
  - Style: `assets/css/style.scss`
- **No heavy dependencies**, only minimal Jekyll config and default theme plumbing avoided/overridden.

## 4. Information Structure
Single-page composition:
1. Header: personal name
2. Hero row:
   - left: profile photo
   - right: intro text block
3. Links line:
   - Google Scholar
   - CV
   - Email

Optional placeholders remain in data file for future expansion but not rendered unless filled.

## 5. Editing Experience
Primary edit targets:
- `_data/site.yml`: name, intro text, links, nav label text
- `assets/images/profile.jpg`: profile photo
- `assets/files/cv.pdf`: CV file

Guidance will be included in:
- `README.md` (quick start + deployment)
- `docs/editing-guide.md` (exact “what to edit where”)
- `docs/maintenance-guide.md` (future updates)

## 6. Styling Direction
- Professional, minimal, screenshot-inspired layout
- Light background, clear readable text, blue accent links
- Adjustable CSS variables for colors, spacing, font sizes
- Responsive collapse from two-column hero to single-column stack

## 7. Preview Workflow
Primary workflow:
- `bundle exec jekyll serve --livereload`

Rationale:
- Best Jekyll-native editing loop
- Auto-regeneration and browser live refresh
- Same rendering mode used for deployment compatibility

## 8. Deployment Strategy
Use **GitHub Pages from `main` branch root** with Jekyll build handled by GitHub Pages.

Pre-deploy checklist:
- Update `_config.yml` with `url` and `baseurl` (as needed)
- Ensure `CNAME` exists only when custom domain is ready
- Confirm all links in `_data/site.yml`

## 9. Custom Domain Strategy
- Support root (`example.com`) and `www` (`www.example.com`)
- Configure DNS A records for apex and CNAME for `www`
- Add custom domain in GitHub Pages settings
- Verify HTTPS enabled after DNS propagation

## 10. Testing and Validation
- Local visual check desktop/mobile widths
- Link validation for Scholar/CV/Email
- GitHub Pages publish verification after push
- Domain verification with DNS lookup and browser test

## 11. Assumptions
- User currently needs only one page
- User can upload/update profile photo and CV later
- User prefers maintainability over advanced animations/features
- GitHub account and domain registrar access are available at deployment time
