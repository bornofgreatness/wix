# Wix Rebuild Guide — Homepage (Russell brief)

**Reference design feel:** elegant · modern · minimal · no clutter  
**Local prototype:** `prototype/index.html`  
**Live site:** https://www.tbi-redefined.org  

Homepage order:

1. **Hero** (Russell)  
2. **Bridge** (Russell)  
3. **The Problem**  
4. **The Solution**  
5. **The Impact**  
6. **Take Action**  
7. **Founder message**

---

## Fonts in use

| Role | Font |
|---|---|
| Headings / brand moments | **Playfair Display** |
| Body / UI | **Inter** |

These match the current Figma direction and are free via Google Fonts / Wix font library.

If Russell has preferred brand fonts instead, swap them in Site settings → Fonts before publishing.

---

## Design tokens

| Token | Value | Use |
|---|---|---|
| Navy | `#0D1B2A` | Headings, footer |
| Teal | `#3AAFA9` | Nav CTA, accents |
| Gold | `#D4B483` | Soft rule under bridge tagline |
| Mist | `#FAF9F7` | Soft bridge fade (not flat matte navy) |
| White | `#FFFFFF` | Hero CTA button, page ground |

**Hero note:** Do **not** use a flat matte navy fill. Use the neural hero image with a soft radial/gradient veil so the photo still shows through — luminous, not dull.

**Images:** upload `prototype/assets/hero-neural.jpg` and logo.

---

## Header / footer

Keep existing site-wide header + footer structure (logo, nav, Get Involved, contact).  
Nav **Get Involved** can link to Partnership & Support (or scroll to Join CTA).

---

## Homepage section 1 — Hero

Full-bleed photo background + soft dark veil (not solid matte).

**Brand line (small):** `TBI Redefined`  
**H1:** `Redefining Traumatic Brain Injury for a New Era of Understanding`  
**Lead:** `TBI is not a momentary event — it is a long‑term neurological condition that reshapes how a person experiences themselves and the world.`  
**Mission:** `We are building a national movement grounded in clarity, emotional intelligence, and lived experience — so survivors can finally be understood, and society can finally evolve.`  
**Button:** `Join the Movement` → Partnership & Support  

Keep hero sparse: brand, one headline, two short paragraphs, one button. No cards, badges, or extra widgets.

---

## Homepage section 2 — Bridge (immediately after hero)

Light / soft background.

**H2:** `A Dynamic Bridge Between Awareness and Empowerment.`  
**Tagline (italic):** `Where compassion meets curiosity — and understanding begins.`  
**Thin gold rule**  
**Body 1:** `We believe emotional intelligence is the foundation of understanding — and the key to changing how the world responds to TBI.`  
**Body 2:** `Across the arc of human history, TBI survivors have lived in a world that never understood their reality — a world without the recognized awareness, clarity, guidance, or recognition they needed.`  
**Emphasis:** `This movement exists to change that`  
**Close:** `You’re in the right place. This movement understands you.`  

---

## Homepage sections 3–7 (restored structure)

### 3) The Problem (white)
- Eyebrow: `The Problem`
- H2: `The world has never truly understood TBI.`
- Body: `For generations, survivors have lived without the awareness, clarity, guidance, or recognition they deserved — often navigating invisible challenges alone.`

### 4) The Solution (mist)
- Eyebrow: `The Solution`
- H2: `This movement exists to change that — decisively.`
- Body 1: `TBI Redefined brings emotional intelligence, cognitive clarity, and trauma-informed understanding to survivors, families, and communities.`
- Body 2: `We create the learning experiences, tools, and awareness needed to help people rebuild confidence, connection, and identity.`

### 5) The Impact (white)
- Eyebrow: `The Impact`
- H2: `Impact begins with understanding.`
- Body: `When people learn what TBI truly is — and how it affects thinking, emotion, and daily life — families become steadier, communities become more supportive, and survivors finally feel seen.`

### 6) Take Action (mist)
- Eyebrow: `Take Action`
- H2: `Help Prevent the Next Avoidable Tragedy`
- Body: `Your support brings clarity, compassion, and empowerment to people who need it most.`
- Button: `Join the Movement →` → Partnership & Support

### 7) Founder message (white)
- Title: `A message from our founder`
- Quote (gold left border): `TBI Redefined was created to bring humanity, clarity, and emotional intelligence to a space that has been misunderstood for far too long. This movement is built for survivors — and shaped by compassion.`

---

## Wix build order

1. Duplicate current Home as backup.
2. Clear homepage sections below header.
3. Build Hero + Bridge (Russell copy).
4. Add Problem → Solution → Impact → Take Action → Founder.
5. Preview desktop + mobile.
6. Send to Russell for approval, then publish.

---

## Reply note for Russell (fonts)

If needed, tell Russell:

> For the homepage I’m using Playfair Display for headings and Inter for body text — elegant, modern, and easy to read. If you have preferred brand fonts for the movement, send those and I’ll switch them before we publish.
