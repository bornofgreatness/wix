# Wix Rebuild Guide — Match the Figma Homepage

**Reference design:** https://pad-peak-39496847.figma.site/  
**Local prototype:** open `prototype/index.html` in your browser  
**Live Wix site to update:** https://www.tbi-redefined.org

This guide is for rebuilding the **homepage only** in Wix Studio / Editor so it matches the new Figma design.

---

## Design tokens (set these first)

| Token | Value | Wix use |
|---|---|---|
| Navy | `#0D1B2A` | Headings, footer background, nav text |
| Teal | `#3AAFA9` | Eyebrows, Get Involved / Join buttons |
| Gold | `#D4B483` | Hero rule, founder quote border |
| Mist | `#F7F7F7` | Alternating section backgrounds |
| Ink | `#1A1A1A` | Body text |
| White | `#FFFFFF` | Hero text, primary section bg |
| Heading font | **Playfair Display** | Brand H1, section H2s, italic headlines |
| Body font | **Inter** | Nav, body copy, eyebrows, buttons |

Upload fonts in Wix (Site settings → Fonts) if they are not already available.

**Images to upload into Wix Media:**
- `prototype/assets/hero-neural.jpg` — hero background
- `prototype/assets/logo.png` — header/footer logo (or keep existing site logo)

---

## Global site chrome

### Header (master / site-wide)
1. White sticky header.
2. Left: logo (height ~44px).
3. Right nav links (13px, Inter Medium, navy):
   - The Learning Experience
   - What TBI Really Is
   - Who We Serve
   - Our Story
   - Our Impact
   - Testimonials
   - Contact
4. Teal button **Get Involved** → link to Partnership & Support (or homepage Take Action anchor).
   - Padding ~10×22, radius 4, uppercase, 12px semibold.

### Footer (master / site-wide)
1. Background navy `#0D1B2A`.
2. Left: logo + italic-style tagline:  
   *Where compassion meets curiosity — and true understanding begins.*
3. Center: same page links as nav + Partnership & Support.
4. Right:
   - Empowering Communities through Comprehensive TBI Education and School Partnerships.
   - `contact@tbiredefined.org`
   - United States
5. Bottom line: `© 2026 TBI Redefined. United States.`

---

## Homepage sections (build top → bottom)

### 1) Hero (full viewport)
1. Full-bleed background image: `hero-neural.jpg` (cover, position center / slightly upper).
2. Dark navy overlay (~55–78% opacity gradient) so white text stays readable.
3. Centered content, max width ~860px, generous vertical padding (~120px top).
4. **H1:** `TBI REDEFINED`  
   Playfair Bold, white, uppercase, letter-spacing ~0.04em, ~52–72px.
5. Gold horizontal rule: 48×2px, centered.
6. **Line 1:** `A dynamic bridge between awareness and empowerment.`  
   Inter, ~18–24px, white ~82% opacity.
7. **Line 2:** `Where compassion meets curiosity — and true understanding begins.`  
   Playfair italic, ~22–30px, white.
8. **Line 3:** `You’re in the right place. This movement sees you, understands you, and stands with you.`  
   Inter, ~16–20px, white ~68% opacity.
9. Do **not** put cards, badges, or extra CTAs in the hero.

### 2) The Problem (white background)
- Eyebrow (teal, 11px, uppercase, letter-spacing 0.28em): `The Problem`
- H2 (Playfair, navy): `The world has never truly understood TBI.`
- Body: `For generations, survivors have lived without the awareness, clarity, guidance, or recognition they deserved — often navigating invisible challenges alone.`
- Content width ~640–760px, left-aligned (or centered if you prefer matching Figma’s text block).

### 3) The Solution (mist `#F7F7F7`)
- Eyebrow: `The Solution`
- H2: `This movement exists to change that — decisively.`
- Body paragraph 1: `TBI Redefined brings emotional intelligence, cognitive clarity, and trauma-informed understanding to survivors, families, and communities.`
- Body paragraph 2: `We create the learning experiences, tools, and awareness needed to help people rebuild confidence, connection, and identity.`

### 4) The Impact (white)
- Eyebrow: `The Impact`
- H2: `Impact begins with understanding.`
- Body: `When people learn what TBI truly is — and how it affects thinking, emotion, and daily life — families become steadier, communities become more supportive, and survivors finally feel seen.`

### 5) Take Action (mist)
- Eyebrow: `Take Action`
- H2: `Help Prevent the Next Avoidable Tragedy`
- Body: `Your support brings clarity, compassion, and empowerment to people who need it most.`
- Button: **Join the Movement →**  
  Teal `#3AAFA9`, white text, ~18×48 padding, radius 8, Inter Bold 20px.  
  Link to `/partnership-support`.

### 6) Founder message (white)
- Title (Inter semibold ~20–26px, navy): `A message from our founder`
- Quote block with **left gold border** (3px `#D4B483`):  
  *TBI Redefined was created to bring humanity, clarity, and emotional intelligence to a space that has been misunderstood for far too long. This movement is built for survivors — and shaped by compassion.*  
  Playfair italic, ~18–24px.

---

## Mobile checklist
- Collapse nav into hamburger; keep Get Involved visible in the open menu.
- Hero text still readable; reduce side padding to ~24px.
- Make **Join the Movement** full-width on small screens.
- Stack footer into one column.

---

## Suggested Wix build order
1. Set colors + fonts site-wide.
2. Update header + footer masters.
3. Clear old homepage sections (or duplicate page first as backup).
4. Add hero strip with background image + overlay.
5. Add Problem / Solution / Impact / Take Action / Founder sections alternating white / mist.
6. Preview desktop + mobile.
7. Publish when it matches the Figma site side-by-side.

---

## Side-by-side QA
Open these three tabs:
1. Figma: https://pad-peak-39496847.figma.site/
2. Prototype: `prototype/index.html`
3. Wix editor preview

Check: brand size, gold rule, section order, teal CTAs, founder gold border, footer navy.
