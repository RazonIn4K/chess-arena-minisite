# Deployment Guide

Complete guide for deploying the Chess Arena mini-site to GitHub Pages and preparing for production.

## 🚀 Quick Deploy (GitHub Pages)

### Prerequisites
- GitHub account
- Git installed locally
- Repository forked or cloned

### Step 1: Initial Setup (Already Done!)

The repository is already configured for GitHub Pages:
- ✅ Jekyll `_config.yml` configured
- ✅ `.gitignore` excludes sensitive files
- ✅ All HTML/CSS/JS files committed
- ✅ Placeholder assets included

### Step 2: Enable GitHub Pages

1. **Go to Repository Settings**
   ```
   https://github.com/YOUR-USERNAME/chess-arena-minisite/settings/pages
   ```

2. **Configure Source**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

3. **Wait for Deployment**
   - GitHub Actions will build the site (2-3 minutes)
   - Check status: Actions tab → Pages build and deployment
   - Green checkmark = Success!

4. **Access Your Site**
   ```
   https://YOUR-USERNAME.github.io/chess-arena-minisite/
   ```

### Troubleshooting GitHub Pages

**Build fails with "YAML syntax error":**
- Check `_config.yml` line 2
- Ensure description is quoted: `description: "Text with: colons"`
- Validate YAML: https://www.yamllint.com/

**404 Error on live site:**
- Verify branch is `main` (not `master`)
- Check folder is set to `/ (root)`
- Wait full 5 minutes for propagation
- Clear browser cache

**Assets not loading:**
- Check paths use relative URLs (`assets/image.png` not `/assets/image.png`)
- Verify `.gitignore` doesn't exclude `assets/` folder
- Confirm images are pushed to repo

**Simple Analytics not tracking:**
- Snippet already included in all HTML files
- Configure domain in Simple Analytics dashboard
- Allow 24-48 hours for first data

---

## 🔧 Local Development

### Option 1: Direct File Opening (Simplest)

```bash
# Clone repository
git clone https://github.com/RazonIn4K/chess-arena-minisite.git
cd chess-arena-minisite

# Open in browser
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

**Limitations:**
- No server-side processing
- Some features may not work (CORS)
- Can't test relative URLs properly

### Option 2: Python HTTP Server (Recommended)

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser
open http://localhost:8000
```

**Advantages:**
- Mimics real server environment
- Proper relative URLs
- No setup required (Python pre-installed on most systems)

### Option 3: Live Server (VS Code)

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Auto-refreshes on save

---

## 📝 Environment Configuration

### Update .env (Production)

```bash
# Copy template
cp .env.sample .env

# Edit with your values
nano .env  # or use your favorite editor
```

**Required values:**

```bash
# Your GitHub Pages URL
SITE_URL=https://razonin4k.github.io/chess-arena-minisite

# Same as SITE_URL for canonical URL
CANONICAL_URL=https://razonin4k.github.io/chess-arena-minisite

# YouTube video ID (after you upload teaser)
VIDEO_EMBED_URL=https://www.youtube.com/embed/YOUR_VIDEO_ID

# Optional: Leave blank for now
ASSETS_CDN_URL=
AWS_PROFILE=
BACKUP_TARGET=
```

**Note:** `.env` is git-ignored (secure) but `.env.sample` is committed (documentation).

### Update HTML Meta Tags

Once you have production URLs, update these in **all HTML files**:

**index.html** (lines 16-18):
```html
<meta property="og:url" content="https://razonin4k.github.io/chess-arena-minisite/"/>
<link rel="canonical" href="https://razonin4k.github.io/chess-arena-minisite/"/>
```

**Repeat for:** `assets.html`, `video.html`, `safety.html`

---

## 🎨 Asset Replacement

### Step 1: Create Real Assets

Follow prompts in `ASSET-CREATION.md`:
- Design in Figma
- Generate videos in Runway ML / Pika
- Export to specifications

### Step 2: Sync to Website

**From InfluencerOps parent directory:**

```bash
# Export assets to vault
# (Save from Figma to ~/InfluencerOps/vault/03-Figma/exports/)

# Sync to website
~/InfluencerOps/scripts/sync-figma-exports.sh

# Verify
ls -lh website/assets/
```

### Step 3: Update Video Embed

**video.html** (line 81):
```html
<iframe
    class="w-full h-full"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"  ← Update this
    title="Chess Arena Playtest Teaser"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

### Step 4: Commit Changes

```bash
git add assets/ video.html
git commit -m "Replace placeholder assets with production versions"
git push
```

GitHub Pages will rebuild automatically (2-3 minutes).

---

## ✅ Pre-Deployment Checklist

### Content Review

- [ ] All HTML pages load without errors
- [ ] Navigation links work (Home, Assets, Video, Safety)
- [ ] Images display correctly
- [ ] No lorem ipsum or placeholder text
- [ ] All CTAs point to correct URLs
- [ ] Social links updated (if applicable)

### Technical Verification

- [ ] `.env` configured with production values
- [ ] Meta tags updated with canonical URLs
- [ ] Simple Analytics snippet present (all pages)
- [ ] Robots.txt allows indexing
- [ ] Sitemap.xml includes all pages
- [ ] `.gitignore` excludes `.env`

### Asset Quality

- [ ] Images optimized (<2MB each)
- [ ] Filenames match `utm_content` values
- [ ] Alt text present on all images
- [ ] Video embed works
- [ ] All fonts load correctly

### Performance

- [ ] Run validation script:
  ```bash
  ~/InfluencerOps/scripts/deploy-check.sh
  ```
- [ ] All checks pass ✅

---

## 📊 Post-Deployment Validation

### 1. Visual QA (Manual)

Visit each page and verify:
- [ ] **index.html**: Hero loads, images visible, CTAs clickable
- [ ] **assets.html**: Grid displays, UTM workflow readable
- [ ] **video.html**: Video embeds (not 404)
- [ ] **safety.html**: All sections load

### 2. Mobile Responsiveness

Test on:
- [ ] iPhone (Safari, Chrome)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)

Or use Chrome DevTools:
- [ ] 320px width (smallest)
- [ ] 768px (tablet)
- [ ] 1920px (desktop)

### 3. Browser Compatibility

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### 4. Performance Audit

**Run Lighthouse:**

```bash
# From InfluencerOps directory
./scripts/lighthouse-check.sh https://razonin4k.github.io/chess-arena-minisite/
```

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

**Common Issues & Fixes:**

| Issue | Fix |
|-------|-----|
| Low performance score | Compress images further (<500KB) |
| Accessibility warnings | Add missing alt text |
| SEO issues | Update meta descriptions |
| Best practices | Enable HTTPS (GitHub Pages does this) |

### 5. Link Validation

**Check for broken links:**

```bash
# From InfluencerOps directory
./scripts/broken-link-check.sh https://razonin4k.github.io/chess-arena-minisite/
```

Fix any 404 errors before submission.

### 6. Analytics Verification

**Test Simple Analytics:**

1. Visit your site
2. Open browser console (F12)
3. Go to Network tab
4. Look for request to `simpleanalyticscdn.com`
5. Should see 200 status code

**Or check dashboard:**
- Wait 5-10 minutes
- Visit Simple Analytics dashboard
- Should see 1 pageview (your test visit)

---

## 🔄 Update & Redeploy Workflow

### Making Changes

```bash
# 1. Make changes locally
code index.html  # or your editor

# 2. Test locally
python3 -m http.server 8000

# 3. Verify changes
open http://localhost:8000

# 4. Commit
git add .
git commit -m "Update: description of changes"

# 5. Push
git push

# 6. Wait for GitHub Pages rebuild (2-3 min)

# 7. Verify live site
open https://razonin4k.github.io/chess-arena-minisite/
```

### Emergency Rollback

If deployment breaks:

```bash
# Find last working commit
git log --oneline -5

# Revert to that commit
git revert COMMIT_HASH

# Push
git push
```

Or reset (destructive):

```bash
# Reset to previous commit
git reset --hard HEAD~1

# Force push (use carefully!)
git push --force
```

---

## 🌐 Custom Domain (Optional)

### Using Custom Domain (e.g., chessarena.com)

1. **Buy domain** (Namecheap, Google Domains, etc.)

2. **Add CNAME record** in DNS settings:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   TTL: 3600
   ```

3. **Add A records** for apex domain:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

4. **Configure in GitHub**:
   - Settings → Pages → Custom domain
   - Enter: `www.chessarena.com`
   - Check "Enforce HTTPS"
   - Save

5. **Wait for DNS propagation** (5 minutes to 48 hours)

6. **Verify**: `dig www.chessarena.com` should show GitHub IPs

---

## 📈 Monitoring & Maintenance

### Weekly Checks

- [ ] Site still loads correctly
- [ ] No 404 errors
- [ ] Analytics tracking works
- [ ] SSL certificate valid (auto-renewed by GitHub)

### Monthly Updates

- [ ] Review Lighthouse scores
- [ ] Update dependencies (if any added)
- [ ] Check for broken external links
- [ ] Review analytics data

### Before Campaign Launch

- [ ] Full QA pass (all pages)
- [ ] Stress test with multiple devices
- [ ] Backup repository
- [ ] Document any custom changes
- [ ] Prepare rollback plan

---

## 🆘 Common Issues

### "Page Not Found" (404)

**Causes:**
- GitHub Pages not enabled
- Wrong branch selected
- Incorrect folder (should be `/`)
- DNS not propagated (custom domain)

**Fix:**
1. Check Settings → Pages configuration
2. Verify branch is `main`, folder is `/`
3. Wait 5 minutes, clear cache
4. Check Actions tab for build errors

### "Site Not Secure" Warning

**Cause:** HTTPS not enforced

**Fix:**
1. Settings → Pages
2. Check "Enforce HTTPS"
3. Wait 5 minutes for SSL provisioning

### Styles Not Loading

**Causes:**
- Tailwind CDN blocked
- Browser cache issue
- Ad blocker interfering

**Fix:**
1. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R Mac)
2. Check browser console for errors
3. Temporarily disable ad blocker
4. Verify Tailwind CDN in `<head>`

### Images Broken

**Causes:**
- Paths incorrect (absolute vs. relative)
- Files not committed
- Case sensitivity (macOS vs. Linux)

**Fix:**
1. Use relative paths: `assets/image.png` (not `/assets/`)
2. Verify files exist: `git ls-files | grep assets`
3. Match case exactly: `hero-bg.png` (not `Hero-BG.png`)

---

## 📋 Deployment Summary

| Environment | URL | Purpose |
|-------------|-----|---------|
| Local | `http://localhost:8000` | Development & testing |
| GitHub Pages | `https://razonin4k.github.io/chess-arena-minisite/` | Production / Portfolio showcase |
| Custom Domain | `https://chessarena.com` | (Optional) Branded URL |

**Deployment Time:** 2-3 minutes after push
**SSL Certificate:** Auto-provisioned by GitHub
**CDN:** Included with GitHub Pages (global edge network)
**Uptime:** 99.9% SLA from GitHub

---

## 🎯 Final Pre-Submission Steps

1. **Run all validation scripts**:
   ```bash
   ~/InfluencerOps/scripts/deploy-check.sh
   ~/InfluencerOps/scripts/lighthouse-check.sh https://razonin4k.github.io/chess-arena-minisite/
   ~/InfluencerOps/scripts/broken-link-check.sh https://razonin4k.github.io/chess-arena-minisite/
   ```

2. **Take screenshots** for application:
   - Homepage (desktop)
   - Homepage (mobile)
   - Assets page
   - Lighthouse score (90+)

3. **Verify analytics**:
   - Visit site, check Simple Analytics dashboard
   - Confirm tracking works

4. **Test on real devices**:
   - Open on phone
   - Share link with friend
   - Verify looks professional

5. **Backup**:
   ```bash
   git clone --mirror https://github.com/RazonIn4K/chess-arena-minisite.git backup/
   ```

6. **Document**:
   - Note live URL in application
   - Screenshot Lighthouse scores
   - Save any custom changes made

---

**Ready to deploy?** Follow this checklist and you'll have a production-ready site in under 30 minutes!

**Questions?** Check `README.md` for troubleshooting or create a GitHub issue.
