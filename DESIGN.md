---
name: Technical Playfulness
colors:
  surface: '#1a063b'
  surface-dim: '#1a063b'
  surface-bright: '#412f63'
  surface-container-lowest: '#150136'
  surface-container-low: '#231043'
  surface-container: '#271448'
  surface-container-high: '#322053'
  surface-container-highest: '#3d2b5e'
  on-surface: '#ebddff'
  on-surface-variant: '#c3c9b8'
  inverse-surface: '#ebddff'
  inverse-on-surface: '#38265a'
  outline: '#8d9384'
  outline-variant: '#43493c'
  surface-tint: '#a5d480'
  primary: '#bdee96'
  on-primary: '#183800'
  primary-container: '#a2d17d'
  on-primary-container: '#335a14'
  inverse-primary: '#406922'
  secondary: '#cdc6b8'
  on-secondary: '#343026'
  secondary-container: '#4d493e'
  on-secondary-container: '#beb8aa'
  tertiary: '#ead8ff'
  on-tertiary: '#3f1b6f'
  tertiary-container: '#d4b6ff'
  on-tertiary-container: '#603e92'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c0f199'
  primary-fixed-dim: '#a5d480'
  on-primary-fixed: '#0b2000'
  on-primary-fixed-variant: '#29500a'
  secondary-fixed: '#e9e2d3'
  secondary-fixed-dim: '#cdc6b8'
  on-secondary-fixed: '#1e1b13'
  on-secondary-fixed-variant: '#4b463c'
  tertiary-fixed: '#eddcff'
  tertiary-fixed-dim: '#d7baff'
  on-tertiary-fixed: '#280056'
  on-tertiary-fixed-variant: '#563487'
  background: '#1a063b'
  on-background: '#ebddff'
  surface-variant: '#3d2b5e'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system embodies a "Technical Playfulness" aesthetic, specifically tailored for a developer-centric audience that values both precision and personality. It bridges the gap between high-performance engineering tools and a laid-back, creative lifestyle.

The style is a fusion of **Modern Corporate** and **Neo-Brutalism**. It utilizes the structural integrity and clarity of developer tools (monospaced sensibilities, clean lines) but injects a vibrant, rebellious energy through high-contrast colors and soft, approachable geometry. The goal is to evoke a sense of focused expertise that doesn't take itself too seriously—reliable enough for production code, yet friendly enough for a weekend hackathon.

## Colors

The palette is optimized for a high-performance dark mode environment, providing a sophisticated backdrop for technical workflows while maintaining brand vibrancy.

*   **Primary (Lime Green):** Used for critical actions, success states, and primary brand highlights. It provides a luminous, high-visibility pop against deep dark surfaces.
*   **Secondary (Warm Cream):** In this dark-themed system, the warm cream is used sparingly as a high-contrast accent or for specific "paper-like" component surfaces to provide warmth and legibility.
*   **Tertiary (Vibrant Purple):** Used for interactive elements, headers, and distinct accents to provide structural depth and brand character.
*   **Neutral (Deep Purple):** This serves as the foundation of the dark mode environment, forming the base background and surface containers, ensuring a "technical" and cohesive feel.

## Typography

The design system exclusively uses **Geist**, a typeface designed for developers. Its geometric precision and high legibility make it perfect for technical content, while its modern proportions support the "playful" aspect of the brand.

Headlines should be set with tight tracking and heavy weights to create an impactful, editorial feel. Body text remains spacious to ensure readability in documentation and long-form content. A mono-spaced stylistic set should be prioritized for data, code snippets, and UI labels to reinforce the technical nature of the product.

## Layout & Spacing

The design system employs a **Fluid-Fixed Hybrid Grid**. On desktop, content is contained within a 1280px max-width container with a 12-column structure. On smaller breakpoints, the grid transitions to 4 columns (mobile) and 8 columns (tablet).

Spacing follows a strict 8px base unit. Gutters are intentionally wide (24px) to provide "breathing room" between technical components, preventing the UI from feeling cluttered. Alignment should be rigid and mathematical, reflecting the precision of a code editor.

## Elevation & Depth

In dark mode, depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**. Surfaces become lighter as they "rise" toward the user.

1.  **Level 0 (Base):** The Deep Purple (`#2D1B4E`) background provides the foundational technical environment.
2.  **Level 1 (Cards/Surface):** Slightly elevated purple surfaces that use subtle 1px borders to define boundaries.
3.  **Level 2 (Popovers/Modals):** Lighter tonal shifts of purple or secondary accents to indicate foreground priority.

Interaction states (hover/active) use "ghost borders"—thin, high-contrast outlines (Lime Green or Warm Cream) that appear on focus, rather than lifting the element with shadows. This maintains a flat, technical aesthetic.

## Shapes

The shape language utilizes a **Rounded** profile to soften the technical edges of the typography and layout. 

Standard components (buttons, inputs) use a 0.5rem radius. Larger containers (cards, modals) use a 1rem radius. This specific level of roundedness is critical; it prevents the UI from looking too "sharp" and aggressive (Brutalism) or too "bubbly" and juvenile (Soft UI), hitting the perfect balance of "Technical Playfulness."

## Components

*   **Buttons:** Primary buttons are solid Lime Green with Deep Purple text for high visibility. Secondary buttons use a Warm Cream or Lime Green outline with transparent backgrounds. Use heavy weights for button labels.
*   **Inputs:** Field backgrounds should be darker than the main surface to create an "inset" technical feel. The active state is indicated by a 2px Lime Green border.
*   **Chips:** Use them for tags and categories. These should have a slight background tint of the primary color (at 15% opacity) and a solid border.
*   **Cards:** Cards are the primary container. They should use a subtle 1px border in a lighter shade of the Neutral palette to define their boundaries against the dark background.
*   **Status Indicators:** Use the Lime Green for "Success/Active," and a muted orange for "Warning" or "Pending."
*   **Scrollbars:** Should be customized to be thin, rounded, and use the Tertiary Purple for the thumb to blend into the interface.
