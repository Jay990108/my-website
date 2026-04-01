# Editing Guide

## Primary File For Content

Edit `_data/site.yml`.

Important: text in `intro_paragraphs` and `news.items[].text` supports inline HTML, so you can add links and highlight styles directly.

### Fields you will edit most

- `name`: your displayed name
- `intro_title_highlight`: blue highlighted title phrase
- `intro_title_rest`: rest of title phrase
- `intro_paragraphs`: the introduction paragraph list
- `links.scholar.url`: your Google Scholar URL
- `links.cv.url`: CV URL (default is `/assets/files/cv.pdf`)
- `links.email.url`: email link (`mailto:you@example.com`)
- `links.email.text`: plain email text shown on page
- `news.items`: list of news rows shown under the intro block
  - News is automatically sorted by `date` (latest first) on the homepage.
  - Homepage shows up to 5 latest items; extra items appear under `View all news`.
  - Use date format `YYYY.MM` (for example `2026.01`) to keep sorting correct.

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

## Add Hyperlinks And Highlight Text

Edit `_data/site.yml` and use HTML inside quotes.

Example for intro paragraphs:

```yml
intro_paragraphs:
  - "<strong>Your Name</strong> works on <span class='hl'>human-AI interaction</span> and interactive systems."
  - "Read my publications on <a href='https://scholar.google.com/' target='_blank' rel='noopener noreferrer'>Google Scholar</a>."
  - "This sentence has a <span class='mark'>soft highlight background</span>."
```

Available inline styles:
- `<strong>text</strong>`: bold
- `<a href='URL'>text</a>`: hyperlink
- `<span class='hl'>text</span>`: blue emphasis
- `<span class='mark'>text</span>`: subtle highlighted background
