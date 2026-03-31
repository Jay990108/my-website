# Personal Website (Jekyll Single Page) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a polished, maintainable, single-page personal website with editable content and clear GitHub Pages/custom-domain handoff.

**Architecture:** Use a minimal Jekyll site with one page (`index.md`) rendered by a reusable layout. Keep user-editable content in `_data/site.yml`, and keep style in one SCSS file with clear variables. Provide docs for editing, local preview, deployment, and maintenance.

**Tech Stack:** Jekyll (GitHub Pages compatible), Liquid templates, SCSS, Markdown, YAML

---

### Task 1: Scaffold Jekyll project structure

**Files:**
- Create: `_config.yml`
- Create: `index.md`
- Create: `_layouts/default.html`
- Create: `assets/css/style.scss`
- Create: `_data/site.yml`
- Create: `assets/images/profile-placeholder.svg`
- Create: `assets/files/cv.pdf`
- Create: `.gitignore`

- [ ] **Step 1: Write failing structure check (manual shell assertion)**

```powershell
$required = @('_config.yml','index.md','_layouts/default.html','assets/css/style.scss','_data/site.yml')
$missing = $required | Where-Object { -not (Test-Path $_) }
if($missing.Count -eq 0){ throw 'Expected missing files before scaffold, but all exist.' }
```

- [ ] **Step 2: Run check to verify it fails pre-scaffold**

Run: `powershell -Command "<script above>"`  
Expected: throw or report missing paths

- [ ] **Step 3: Write minimal scaffold files**

```text
Create exact files listed above with baseline valid Jekyll syntax.
```

- [ ] **Step 4: Re-run structure check to verify it passes**

Run: `powershell -Command "<script above with pass condition>"`  
Expected: all required files exist

- [ ] **Step 5: Commit**

```bash
git add _config.yml index.md _layouts/default.html assets/css/style.scss _data/site.yml assets/images/profile-placeholder.svg assets/files/cv.pdf .gitignore
git commit -m "feat: scaffold minimal jekyll personal website"
```

### Task 2: Implement single-page layout and styling

**Files:**
- Modify: `_layouts/default.html`
- Modify: `assets/css/style.scss`
- Modify: `index.md`
- Test: `index.md` rendered output via `jekyll build`

- [ ] **Step 1: Write failing content check (links + hero selectors)**

```powershell
$html = Get-Content -Raw '_layouts/default.html'
if($html -match 'site.data.site.links'){ }
else { throw 'Missing links rendering in layout' }
```

- [ ] **Step 2: Run check to verify it fails before full template wiring**

Run: `powershell -Command "<script above>"`  
Expected: fail if section missing

- [ ] **Step 3: Implement minimal liquid layout + responsive CSS**

```text
Render name, photo, intro paragraphs, and exactly three links (scholar/cv/email) from _data/site.yml.
```

- [ ] **Step 4: Run local Jekyll build to verify site compiles**

Run: `bundle exec jekyll build`  
Expected: build succeeds with `_site` output

- [ ] **Step 5: Commit**

```bash
git add _layouts/default.html assets/css/style.scss index.md
git commit -m "feat: add screenshot-inspired single-page layout and styles"
```

### Task 3: Add editing, preview, deployment, and domain docs

**Files:**
- Create: `README.md`
- Create: `docs/editing-guide.md`
- Create: `docs/deployment-guide.md`
- Create: `docs/custom-domain-guide.md`
- Create: `docs/maintenance-guide.md`

- [ ] **Step 1: Write failing docs existence check**

```powershell
$docs = @('README.md','docs/editing-guide.md','docs/deployment-guide.md','docs/custom-domain-guide.md','docs/maintenance-guide.md')
$missing = $docs | Where-Object { -not (Test-Path $_) }
if($missing.Count -eq 0){ throw 'Expected docs to be missing before creation.' }
```

- [ ] **Step 2: Run check to verify missing docs**

Run: `powershell -Command "<script above>"`  
Expected: reports missing files

- [ ] **Step 3: Write docs with exact commands and file map**

```text
Include local preview (`bundle exec jekyll serve --livereload`), GitHub Pages setup, repo naming rules, and DNS records for apex + www.
```

- [ ] **Step 4: Run content sanity checks**

Run: `rg -n "bundle exec jekyll serve --livereload|CNAME|185.199.108.153|www" README.md docs/*.md`  
Expected: required guidance appears in docs

- [ ] **Step 5: Commit**

```bash
git add README.md docs/editing-guide.md docs/deployment-guide.md docs/custom-domain-guide.md docs/maintenance-guide.md
git commit -m "docs: add editing preview deployment and domain handoff guides"
```

### Task 4: Verify final project state

**Files:**
- Modify: none required (verification only)
- Test: whole project

- [ ] **Step 1: Run final file-tree and status checks**

Run: `Get-ChildItem -Recurse` and `git status --short`

- [ ] **Step 2: Run Jekyll build verification**

Run: `bundle exec jekyll build`  
Expected: success

- [ ] **Step 3: Run link/content grep checks**

Run: `rg -n "google scholar|cv|email|_data/site.yml|custom domain|github pages" -S README.md docs/*.md _layouts/default.html _data/site.yml`

- [ ] **Step 4: Summarize changed files with visual impact notes**

```text
Map each changed file to the visual/editing/deployment effect for user handoff.
```

- [ ] **Step 5: Commit (if needed for final tweaks)**

```bash
git add -A
git commit -m "chore: finalize website scaffold and documentation"
```
