# Chess Arena - Campaign Mini-Site

> **Live Demo**: https://razonin4k.github.io/chess-arena-minisite/

A modern, responsive marketing mini-site for the Chess Arena campaign — a chess × MOBA hybrid game concept targeting Alexandra Botez's audience.

![Chess Arena Preview](assets/hero-bg.png)

## 🎯 Project Overview

This mini-site demonstrates a complete marketing campaign infrastructure for Chess Arena, featuring:

- **Modern Design**: Tailwind CSS with custom neon-glow styling and brand palette
- **Responsive Layout**: Mobile-first design that works flawlessly from 320px to 4K
- **Analytics Ready**: Simple Analytics integration with event tracking
- **Asset Management**: UTM tracking workflow for performance measurement
- **Accessibility**: WCAG AA compliant colors, semantic HTML, screen reader support

## 🎨 Design System

**Color Palette:**
- Midnight Navy `#0D1B2A` - Primary background
- Lichess Slate `#415A77` - Secondary elements
- Electric Teal `#00C6AE` - CTAs and highlights (with neon-glow effect)
- Tactical Gold `#F8D57E` - Accents and badges
- Alert Coral `#FF6F61` - Warnings and emphasis

**Typography:**
- **Headlines**: Space Grotesk Bold
- **Body**: Inter Regular/Medium
- **Code/UI**: JetBrains Mono

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- (Optional) Node.js 18+ for validation scripts

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RazonIn4K/chess-arena-minisite.git
   cd chess-arena-minisite
   ```

2. **Open in browser**
   ```bash
   open index.html
   # Or just double-click index.html
   ```

3. **Configure environment** (optional for production)
   ```bash
   cp .env.sample .env
   # Edit .env with your values
   ```

### GitHub Pages Deployment

Already configured! Visit: https://razonin4k.github.io/chess-arena-minisite/

To enable on your fork:
1. Go to repository Settings → Pages
2. Source: Deploy from branch `main`, folder `/ (root)`
3. Save and wait 2-3 minutes for deployment

## 📁 Project Structure

```
chess-arena-minisite/
├── index.html          # Landing page (hero, gameplay, playtest CTA)
├── assets.html         # Asset tracking grid with UTM workflow
├── video.html          # Video embed + stream guidelines
├── safety.html         # Community guidelines & safety policy
├── script.js           # Simple Analytics tracking + smooth scroll
├── assets/             # 15 placeholder images (ads, thumbnails, memes)
│   ├── ad-A.png
│   ├── thumb-A.png
│   ├── meme-1.png
│   └── ...
├── _config.yml         # Jekyll configuration for GitHub Pages
├── .env.sample         # Environment variable template
├── .gitignore          # Excludes .env and .DS_Store
└── robots.txt          # SEO configuration
```

## 🎭 Features

### Landing Page (`index.html`)
- **Hero Section**: "Chess Instincts, MOBA Chaos" with CTA
- **Gameplay Snapshot**: Three key mechanics (Dodge, Abilities, Outlast)
- **Playtest Banner**: Center CTA with background overlay
- **Creator Spotlight**: Alexandra Botez endorsement
- **Community Clips**: Video thumbnail grid

### Assets Page (`assets.html`)
- **UTM Workflow Visualization**: Asset → Figma → Export → Tracking
- **Creative Grid**: Ads, thumbnails, and memes with metadata
- **Performance Targets**: CTR/CPC goals by asset type
- **Naming Convention**: Explains `utm_content` = filename system

### Video Page (`video.html`)
- **YouTube Embed**: 20-second teaser (placeholder ready)
- **Stream Guidelines**: Lower third template + callouts
- **Timeline Breakdown**: What to expect at each timestamp

### Safety Page (`safety.html`)
- **Community Principles**: "Competitive but Inclusive" brand voice
- **Zero Tolerance Policy**: Clear hate/harassment/cheating stance
- **Guidelines**: Do's and Don'ts with examples
- **Legal Compliance**: FTC, COPPA, DMCA notes

## 🔧 Technology Stack

- **Frontend**: Pure HTML5, CSS (via Tailwind CDN), Vanilla JavaScript
- **Styling**: Tailwind CSS 3.x with custom config
- **Analytics**: Simple Analytics (privacy-friendly)
- **Hosting**: GitHub Pages (Jekyll)
- **Version Control**: Git

**No build step required** — works immediately in any browser!

## 📊 Analytics & Tracking

Simple Analytics integration ready:
- Page view tracking on all pages
- Event tracking via `data-sa-event` attributes
- CTA click tracking (hero, playtest, video)

**To activate**:
1. Sign up at [simpleanalytics.com](https://simpleanalytics.com)
2. Snippet already added to all HTML files (lines 64-65)
3. Replace domain in Simple Analytics dashboard

## 🎨 Brand Voice Guidelines

Based on Botez Chess × MOBA campaign positioning:

**✅ Do:**
- Use inclusive language ("players," "folks")
- Explain gaming/chess jargon
- Celebrate skill and improvement
- Welcome newcomers

**❌ Avoid:**
- Gatekeeping ("Only 1800+ will understand")
- Toxic slang ("hardstuck," "skill issue")
- Gendered language ("chess bros," "guys")
- Elitism or punching down

Full guidelines in `safety.html`

## 🖼️ Placeholder Assets

15 placeholder images included (all optimized <100KB each):

**Ads** (3):
- `ad-A.png` (1080×1080) - Instagram, Electric Teal
- `ad-B.png` (1200×628) - Twitter/X, Tactical Gold
- `ad-C.png` (1080×1920) - TikTok Stories, Alert Coral

**Thumbnails** (3):
- `thumb-A.png` (1280×720) - Dramatic mood
- `thumb-B.png` (1280×720) - Approachable mood
- `thumb-C.png` (1280×720) - Meme-style

**Memes** (3):
- `meme-1.png` - Chess rage quit theme
- `meme-2.png` - Botez Gambit theme
- `meme-3.png` - Elo hell theme

**Backgrounds** (6):
- `hero-bg.png`, `playtest-bg.png`, `botez-headshot.png`
- `video-thumb-1.png`, `video-thumb-2.png`, `video-thumb-3.png`

### Replacing Placeholders

See `ASSET-CREATION.md` for complete Figma and video generation prompts.

## 🚀 Deployment Checklist

Before going live:

- [x] Simple Analytics snippet added to all pages
- [x] `.env.sample` documented with examples
- [x] `.gitignore` excludes sensitive files
- [x] All placeholder images present
- [x] Responsive design tested (320px → 1920px)
- [x] WCAG AA color contrast verified
- [ ] Replace placeholder images with real assets
- [ ] Add YouTube video embed to `video.html`
- [ ] Update meta tags with production URLs
- [ ] Run Lighthouse audit (target: 90+ score)

See `DEPLOYMENT.md` for full deployment guide.

## 📈 Performance

**Targets:**
- Lighthouse Performance: ≥ 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Optimization:**
- All images optimized (<2MB, most <100KB)
- Tailwind CDN (no build required)
- Minimal JavaScript (event tracking only)
- Semantic HTML for fast rendering

## 🤝 Contributing

This is a portfolio/application project for the Botez Chess Arena campaign.

**If forking:**
1. Update `_config.yml` with your URLs
2. Replace placeholder images
3. Customize brand colors in Tailwind config
4. Update Simple Analytics domain

## 📝 License

Created for the Alexandra Botez Chess Arena campaign application.

**Technologies used:**
- Tailwind CSS (MIT License)
- Simple Analytics (privacy-first analytics)
- Fonts: Google Fonts (Open Font License)

## 🙏 Credits

**Campaign Concept**: Botez Chess × MOBA hybrid
**Design System**: Based on brand-voice.md guidelines
**Built by**: [Your Name] for Botez campaign application
**Repository**: https://github.com/RazonIn4K/chess-arena-minisite

---

## 📞 Contact

For questions about this campaign site:
- **GitHub**: [@RazonIn4K](https://github.com/RazonIn4K)
- **Live Demo**: https://razonin4k.github.io/chess-arena-minisite/

**Campaign Tag**: "Your Move" 🎯

---

**Last Updated**: October 2025
**Status**: Portfolio/Application Showcase
