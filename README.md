# Personal Website (Jekyll)

A lightweight single-page academic/professional website inspired by your reference template. It is designed to be easy to edit without deep coding knowledge.

## Project Structure

- `_data/site.yml`: Main editable content (name, intro text, links)
- `_layouts/default.html`: Page layout
- `assets/css/style.scss`: Styling (colors, spacing, typography)
- `assets/images/profile-placeholder.svg`: Replace with your profile photo
- `assets/files/cv.pdf`: Replace with your CV PDF
- `index.md`: Homepage entry point
- `_config.yml`: Jekyll/GitHub Pages config

## Quick Start (Local Preview)

1. Install Ruby (with DevKit on Windows) and Bundler.
2. In this project folder run:

```bash
bundle install
bundle exec jekyll serve --livereload
```

3. Open `http://127.0.0.1:4000`.

Why this is the preferred workflow:
- It is the simplest reliable setup for Jekyll.
- `--livereload` refreshes your browser automatically after edits.
- It matches GitHub Pages rendering behavior closely.

## Where To Edit Content

See [docs/editing-guide.md](docs/editing-guide.md).

## Deployment

See [docs/deployment-guide.md](docs/deployment-guide.md).

## Custom Domain

See [docs/custom-domain-guide.md](docs/custom-domain-guide.md).

## Maintenance

See [docs/maintenance-guide.md](docs/maintenance-guide.md).