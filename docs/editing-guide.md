# Editing Guide

## Primary File For Content

Edit `_data/site.yml`.

### Fields you will edit most

- `name`: your displayed name
- `intro_title_highlight`: blue highlighted title phrase
- `intro_title_rest`: rest of title phrase
- `intro_paragraphs`: the introduction paragraph list
- `links.scholar.url`: your Google Scholar URL
- `links.cv.url`: CV URL (default is `/assets/files/cv.pdf`)
- `links.email.url`: email link (`mailto:you@example.com`)
- `links.email.text`: plain email text shown on page

## Profile Photo

Replace `assets/images/profile-placeholder.svg` with your own file and update `_data/site.yml`:

```yml
photo: /assets/images/your-photo.jpg
```

## CV

Replace `assets/files/cv.pdf` with your real CV PDF.

If your CV is hosted elsewhere, put the full URL in `_data/site.yml` under `links.cv.url`.

## Styling Controls

Edit `assets/css/style.scss` variables at the top:

- `--bg`: page background
- `--text`: main text color
- `--accent`: link and highlight color
- spacing variables (`--space-*`)
- `--max-width`: content width

## Layout Structure

`_layouts/default.html` controls:
- Header name line
- Two-column intro layout (photo + text)
- Links line rendering order

Keep this file mostly unchanged unless you want structural redesign.
