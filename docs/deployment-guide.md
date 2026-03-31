# Deployment Guide (GitHub Pages)

## 1. Create GitHub Repository

Use one of these naming patterns:

- User site (recommended for personal homepage): `<your-github-username>.github.io`
- Project site: any repository name like `my-personal-site`

Recommendation:
- Use `<your-github-username>.github.io` if this is your main personal website.

## 2. Push this local project

```bash
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git
git add .
git commit -m "Initial personal website"
git push -u origin main
```

## 3. Configure GitHub Pages

In GitHub repository:
- Go to `Settings` -> `Pages`
- Under `Build and deployment`:
  - `Source`: `Deploy from a branch`
  - `Branch`: `main`
  - `Folder`: `/ (root)`
- Save

## 4. Update `_config.yml` before publishing final version

- For user site (`username.github.io`):

```yml
url: "https://<your-github-username>.github.io"
baseurl: ""
```

- For project site (`<repo-name>`):

```yml
url: "https://<your-github-username>.github.io"
baseurl: "/<repo-name>"
```

If you use project site mode, update root-relative links in data as needed.

## 5. Verify deployment

After push and Pages build (usually 1-5 minutes):
- User site URL: `https://<your-github-username>.github.io`
- Project site URL: `https://<your-github-username>.github.io/<repo-name>/`

If it fails:
- Check `Actions` tab for build logs
- Confirm Pages source branch/folder settings
- Confirm `_config.yml` `url/baseurl` are correct
