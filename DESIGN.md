---
name: UDive Bali
description: Tulamben entry document — oxblood passport cover, vermillion stamp, official paper panes.
colors:
  cover: "oklch(0.21 0.072 22)"
  cover-deep: "oklch(0.16 0.055 22)"
  cover-lift: "oklch(0.27 0.068 22)"
  page: "oklch(0.945 0.012 22)"
  page-2: "oklch(0.90 0.018 22)"
  ink: "oklch(0.23 0.042 22)"
  ink-soft: "oklch(0.40 0.038 22)"
  foam: "oklch(0.96 0.012 22)"
  foam-dim: "oklch(0.82 0.035 22)"
  stamp: "oklch(0.54 0.185 32)"
  stamp-bright: "oklch(0.60 0.175 36)"
  foil: "oklch(0.79 0.09 82)"
typography:
  display:
    fontFamily: "Big Shoulders Display, Noto Sans SC, sans-serif"
    fontSize: "clamp(3.2rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Big Shoulders Display, Noto Sans SC, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Public Sans, Noto Sans SC, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  section: "88px"
  page: "clamp(20px, 5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.page}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.stamp-bright}"
    textColor: "{colors.page}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-ghost:
    backgroundColor: "oklch(0.14 0.05 22 / 0.62)"
    textColor: "{colors.foam}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  nav-capsule:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 12px 10px 18px"
---

## Overview

UDive Bali's marketing site is a **Tulamben entry document**: oxblood passport cover as the page ground, official paper panes for content, and a vermillion wet-stamp reserved for booking actions. It is not a navy luxury-travel landing and not a five-card course catalog. Chinese and English share the same hierarchy; Noto Sans SC covers CJK.

## Colors

Committed strategy: oxblood (`cover`) owns the viewport. Paper (`page`) is chroma-tinted toward the same hue (22), not a warm cream. Ink and muted text stay on that hue — never gray. `stamp` is the only action color. `foil` marks credentials (PADI, ratings), not buttons.

On oxblood, body copy is `foam` / `foam-dim`. On paper, body copy is `ink` / `ink-soft`.

## Typography

Display is **Big Shoulders Display** (condensed travel-document). Body is **Public Sans** (form language). Headings `text-wrap: balance`; prose `text-wrap: pretty`. Display tracking floor is −0.03em. Chinese headings drop letter-spacing and use Noto Sans SC. One MRZ line is allowed in the hero; section kickers are not.

## Layout

Sticky paper capsule nav inset from the edges. Hero is a two-column visa page: type left, photographic portrait right (hidden below 900px). Stats and rooms sit on paper; courses, about, location, booking sit on cover. Courses are a permit board: one featured Open Water pane plus compact rows — not identical icon cards. Measure cap ~68ch. Breakpoint: 900px stacks grids and shows the hamburger.

## Elevation & Depth

Primary actions use a short offset stamp shadow (`0 8px 0 oklch(0.32 0.12 28)`), not a wide halo. The nav capsule uses `0 12px 32px oklch(0 0 0 / 0.38)`. Visa portraits use an 8–10px paper frame, not a drop-card. No glassmorphism.

## Shapes

Controls: 6px. Larger panes: 12px. Nav, language chips, and the WhatsApp control: full pill. Avoid 24px+ card rounding.

## Components

### Buttons
Primary is a vermillion stamp: uppercase Big Shoulders, 6px radius, short offset shadow. Ghost is a translucent cover fill with a 1px light line. Card actions invert to ink, then stamp on hover.

### Navigation
Paper pill, dark ink, vermillion Book. Mobile: hamburger in the same pill; oxblood drawer from the right.

### Permit / course panes
Paper field on cover. Featured Open Water is a large pane; other courses are rows (description hidden). No emoji icons.

### Forms
Cover-recessed fields, stamp focus ring, stamp submit. Instant quote lives in Shadow DOM but shares the same oxblood / stamp tokens.

### Modals
Paper sheet on a cover-tinted backdrop. Header band is cover + foil meta.

## Do's and Don'ts

### Do:
- **Do** keep vermillion for commit actions only.
- **Do** treat each section as one visa pane: one statement, charged emptiness.
- **Do** set `document.documentElement.lang` when toggling EN/ZH.

### Don't:
- **Don't** restore Inter, Playfair, navy, or orange-SaaS CTAs.
- **Don't** put a tracked uppercase kicker above every heading.
- **Don't** nest cards or use a 1px side-stripe as an accent.
- **Don't** use gray text on oxblood; tint foam or ink instead.
