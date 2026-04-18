# Launchpad Solutions — Brand Identity

Official brand reference for Launchpad Solutions. Use this any time you're building UI, writing marketing copy, designing documents, or placing the logo.

**Last updated:** April 2026

---

## 1. Logo

Launchpad Solutions has two lockups, each available in a color and a single-color variant.

### Horizontal lockup (mark + wordmark)

| Source file | Suggested repo name | Use on | Description |
|---|---|---|---|
| `Asset_5.svg` | `launchpad-horizontal-color.svg` | Light / neutral backgrounds | **Primary** — navy wordmark + orange-to-amber gradient mark. Default for websites, documents, presentations. |
| `Asset_7.svg` | `launchpad-horizontal-mono.svg` | Any single-color application | Monochrome lockup. Paths have no `fill` set, so you can color it anything via CSS — see recoloring example below. |
| `Asset_6_4x-8.png` | `launchpad-horizontal-on-dark.png` | Dark navy/black backgrounds, photos | Orange mark + white wordmark. |
| `Asset_8_4x-8.png` | `launchpad-horizontal-white.png` | Dark surfaces where only one ink is available | All-white monochrome. |

### Mark only (icon)

Use the mark by itself when you need a compact, square format — favicons, app icons, social avatars, small badges.

| Source file | Suggested repo name | Description |
|---|---|---|
| `Asset_4.svg` | `launchpad-mark-color.svg` | Gradient "L" mark — full color |
| `Asset_2.svg` | `launchpad-mark-mono.svg` | Single-color "L" mark — recolorable |

### Clear space
Maintain clear space around any logo equal to the **height of the "L" mark** on all sides.

### Minimum size
- **Horizontal lockup:** 120 px wide (digital), 1.0 in / 25 mm wide (print)
- **Mark only:** 24 px wide (digital), 0.25 in / 6 mm wide (print)

### Don'ts
- Don't recolor the color variants outside the approved palette
- Don't stretch, skew, or rotate
- Don't place the full-color logo on busy or low-contrast backgrounds — switch to a monochrome variant
- Don't add drop shadows, outlines, or effects
- Don't re-typeset "Launchpad Solutions" in other fonts — always use the logo file

### Recoloring the monochrome SVGs

`Asset_7.svg` and `Asset_2.svg` have no hardcoded fills, so they inherit whatever color you set. Two common patterns:

**CSS fill:**

```html
<img src="/brand/logos/launchpad-horizontal-mono.svg" class="logo-white" alt="Launchpad Solutions">
```

```css
.logo-white path,
.logo-white polygon { fill: #ffffff; }
```

**Inline SVG with `currentColor`** (inherits the text color of the parent, handy for themed apps):

```html
<span style="color: var(--color-navy);">
  <!-- paste SVG contents here, then add fill="currentColor" to the root <svg> -->
</span>
```

---

## 2. Color palette

### Primary

| Role | Name | Hex | RGB |
|---|---|---|---|
| Primary navy — wordmark, headings, body text | Launchpad Navy | `#1B2A4A` | 27, 42, 74 |
| Primary orange — mark, CTAs, accents | Launchpad Orange | `#FF6B2B` | 255, 107, 43 |
| Secondary amber — gradient end, highlights | Launchpad Amber | `#F5A623` | 245, 166, 35 |

### Brand gradient
The "L" mark uses a vertical orange → amber gradient:

```css
background: linear-gradient(180deg, #FF6B2B 0%, #F5A623 100%);
```

### Neutrals

| Role | Hex |
|---|---|
| White | `#FFFFFF` |
| Off-white surface | `#F8F9FB` |
| Light border | `#E5E7EB` |
| Muted text | `#6B7280` |
| Near-black | `#0F172A` |

### CSS variables

Drop into your root stylesheet:

```css
:root {
  /* Brand */
  --color-navy: #1B2A4A;
  --color-orange: #FF6B2B;
  --color-amber: #F5A623;

  /* Neutrals */
  --color-bg: #FFFFFF;
  --color-surface: #F8F9FB;
  --color-border: #E5E7EB;
  --color-text: #1B2A4A;
  --color-text-muted: #6B7280;

  /* Gradient */
  --gradient-brand: linear-gradient(180deg, #FF6B2B 0%, #F5A623 100%);
}
```

### Tailwind config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        brand: {
          orange: '#FF6B2B',
          amber: '#F5A623',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(180deg, #FF6B2B 0%, #F5A623 100%)',
      },
    },
  },
}
```

---

## 3. Typography

### Primary typeface — Stolzl
Stolzl (geometric sans-serif by René Bieder) is the official Launchpad Solutions typeface.

> **Note on licensing:** Stolzl is a **commercial font**. You must purchase a web-font license from the foundry or a distributor (e.g. MyFonts) before embedding it on a public site. Self-host the files — don't load from unlicensed CDNs.

```css
@font-face {
  font-family: 'Stolzl';
  src: url('/fonts/stolzl/Stolzl-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Stolzl';
  src: url('/fonts/stolzl/Stolzl-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Stolzl';
  src: url('/fonts/stolzl/Stolzl-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

### Fallback — Manrope (free)
If Stolzl isn't yet licensed, **Manrope** on Google Fonts is a close free alternative with a similar geometric character. Use it as the fallback regardless:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Font stack

```css
body {
  font-family: 'Stolzl', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Type scale

| Role | Size / line-height | Weight | Use |
|---|---|---|---|
| Display | 56 / 64 px | 700 | Hero headings |
| H1 | 40 / 48 px | 700 | Page titles |
| H2 | 32 / 40 px | 600 | Section headings |
| H3 | 24 / 32 px | 600 | Subsections |
| H4 | 20 / 28 px | 600 | Card titles |
| Body large | 18 / 28 px | 400 | Lead paragraphs |
| Body | 16 / 24 px | 400 | Default copy |
| Body small | 14 / 20 px | 400 | Captions, helpers |
| Eyebrow | 12 / 16 px, `letter-spacing: 0.08em`, uppercase | 600 | Section labels |

### Rules
- The uppercase, tightly tracked treatment of **SOLUTIONS** in the wordmark is reserved for the logo — don't replicate it in body copy.
- Headings use `#1B2A4A`; body copy uses `#1B2A4A` or `#0F172A`.

---

## 4. Voice & tone

Launchpad Solutions is **professional, practical, builder-focused**. The tone should feel:

- **Clear, not corporate.** Plain words before buzzwords.
- **Confident, not boastful.** State what the product does; let results speak.
- **Helpful and specific.** Concrete examples over abstract claims.

**Do write:** "Run your 50/50 lottery compliantly and grow revenue year over year."
**Don't write:** "Leverage our world-class synergistic platform to unlock next-generation charitable gaming paradigms."

---

## 5. Quick-start HTML template

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Launchpad Solutions</title>
  <link rel="icon" type="image/svg+xml" href="/brand/logos/launchpad-mark-color.svg" />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-navy: #1B2A4A;
      --color-orange: #FF6B2B;
      --color-amber: #F5A623;
      --gradient-brand: linear-gradient(180deg, #FF6B2B 0%, #F5A623 100%);
    }
    body {
      font-family: 'Stolzl', 'Manrope', system-ui, sans-serif;
      color: var(--color-navy);
      margin: 0;
      background: #fff;
    }
    .logo { height: 40px; width: auto; }
    .btn-primary {
      background: var(--color-orange);
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
    }
    .btn-primary:hover { background: #E55A1F; }
  </style>
</head>
<body>
  <header>
    <img src="/brand/logos/launchpad-horizontal-color.svg" alt="Launchpad Solutions" class="logo">
  </header>
  <!-- your content -->
</body>
</html>
```

---

## 6. Favicon & app icons

Use the **mark alone** (`Asset_4.svg` / `launchpad-mark-color.svg`), cropped tight. Modern browsers accept SVG favicons directly:

```html
<link rel="icon" type="image/svg+xml" href="/brand/logos/launchpad-mark-color.svg" />
<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
```

For broad compatibility, also export PNG/ICO raster versions from the SVG:

- `favicon.ico` — 32×32, 48×48 (multi-size)
- `apple-touch-icon.png` — 180×180
- `icon-192.png` — 192×192 (PWA)
- `icon-512.png` — 512×512 (PWA)

A tool like [realfavicongenerator.net](https://realfavicongenerator.net/) can produce the whole set from the mark SVG.

---

## 7. Recommended repo structure

```
/public
  /brand
    /logos
      launchpad-horizontal-color.svg   # Asset 5 — primary
      launchpad-horizontal-mono.svg    # Asset 7 — recolorable
      launchpad-horizontal-on-dark.png # Asset 6 — orange mark + white text
      launchpad-horizontal-white.png   # Asset 8 — all-white mono
      launchpad-mark-color.svg         # Asset 4 — gradient mark only
      launchpad-mark-mono.svg          # Asset 2 — recolorable mark only
    /fonts
      Stolzl-Regular.woff2
      Stolzl-Medium.woff2
      Stolzl-Bold.woff2
    favicon.ico
    apple-touch-icon.png
    icon-192.png
    icon-512.png
BRAND.md   <-- this file (at repo root)
```

---

## 8. To-do / open items

- [ ] Secure a **Stolzl web-font license** before deploying any public-facing app that embeds it.
- [ ] Generate the **favicon and app-icon set** from `launchpad-mark-color.svg`.
- [ ] Export SVG versions of `launchpad-horizontal-on-dark` and `launchpad-horizontal-white` from source, so all lockups are available as vectors.
