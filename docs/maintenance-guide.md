# Maintenance Guide

## Regular content updates

1. Edit `_data/site.yml` for text/links.
2. Replace `assets/files/cv.pdf` when CV changes.
3. Replace profile image under `assets/images/` and update `photo` field.
4. Run local preview:

```bash
bundle exec jekyll serve --livereload
```

5. Commit and push:

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Pages redeploys automatically after push.

## Safe style tuning

Edit only CSS variables first in `assets/css/style.scss`:
- colors (`--bg`, `--text`, `--accent`)
- spacing (`--space-*`)
- width (`--max-width`)

This avoids breaking layout structure.

## Expanding later

When you want more sections (publications, projects, news), add new keys to `_data/site.yml`, then render them in `_layouts/default.html`.

## Backup and rollback

Every stable update should be committed.

To rollback:

```bash
git log --oneline
git checkout <commit_hash> -- _data/site.yml assets/css/style.scss _layouts/default.html
```