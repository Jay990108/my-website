# Custom Domain Guide (GitHub Pages)

This guide applies after your site is already working on GitHub Pages.

## 1. Decide domain shape

- Root domain: `example.com`
- `www` subdomain: `www.example.com`

Best practice: support both and redirect one to the other.

## 2. Add custom domain in GitHub Pages

In repository `Settings` -> `Pages` -> `Custom domain`:
- Enter your preferred domain (usually `www.example.com`)
- Click `Save`

This creates/updates a `CNAME` file in your repository.

## 3. Add DNS records at your registrar

### Root domain (`example.com`)
Add four `A` records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Host/name is typically `@`.

### `www` subdomain (`www.example.com`)
Add `CNAME` record:
- Host/name: `www`
- Value/target: `<your-github-username>.github.io`

## 4. Wait for DNS propagation

Can take a few minutes to 48 hours (often under 1 hour).

## 5. Verify domain

- `nslookup example.com`
- `nslookup www.example.com`
- Open both URLs in browser
- Confirm one canonical URL and working page content

## 6. HTTPS

In `Settings` -> `Pages`:
- Enable `Enforce HTTPS` when available

Notes:
- HTTPS toggle may appear only after DNS is valid.
- GitHub manages TLS certificates automatically once DNS is correct.

## 7. Common mistakes

- Using URL with `https://` inside DNS value fields
- Missing one or more apex `A` records
- Pointing `www` CNAME to wrong target
- Setting conflicting old DNS records