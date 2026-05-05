---
name: Geometric Precision
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad7f3'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e8e5ff'
  surface-container-highest: '#e2e0fc'
  on-surface: '#1a1a2e'
  on-surface-variant: '#3d4850'
  inverse-surface: '#2f2e43'
  inverse-on-surface: '#f2efff'
  outline: '#6d7981'
  outline-variant: '#bcc8d1'
  surface-tint: '#00668a'
  primary: '#00668a'
  on-primary: '#ffffff'
  primary-container: '#00bfff'
  on-primary-container: '#004a65'
  inverse-primary: '#7ad0ff'
  secondary: '#3a5f94'
  on-secondary: '#ffffff'
  secondary-container: '#9ec2fe'
  on-secondary-container: '#284f83'
  tertiary: '#0061a4'
  on-tertiary: '#ffffff'
  tertiary-container: '#75b6ff'
  on-tertiary-container: '#00467a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c3e8ff'
  primary-fixed-dim: '#7ad0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3b'
  on-secondary-fixed-variant: '#1f477b'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#9fcaff'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#00497d'
  background: '#fcf8ff'
  on-background: '#1a1a2e'
  surface-variant: '#e2e0fc'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system centers on a "Geometric Precision" aesthetic, blending the technical rigor of a software engineering firm with the creative fluidity of a digital agency. The visual language is inspired by high-end SaaS platforms, prioritizing clarity, intentionality, and structural transparency.

The personality is professional yet innovative, characterized by:
*   **Architectural Clarity:** Utilizing airy spacing and grid-based alignment to reflect organized codebases.
*   **Technical Sophistication:** Subtle wireframe textures and cube-based motifs symbolize the building blocks of digital products.
*   **Dynamic Professionalism:** A bright, high-energy primary accent provides a sense of momentum against a stable, corporate foundation.

## Colors

The palette is anchored in a high-contrast relationship between deep architectural blues and a vibrant, electrified cyan.

*   **Primary Accent (#00BFFF):** Reserved for interactive elements, primary CTAs, and critical visual highlights. It represents the "spark" of innovation.
*   **Secondary Navy (#0D3B6E):** Used for structural typography and grounding elements like footers and headers. It provides authority and stability.
*   **Mid Blue (#1A6BAF):** Employed for secondary headings and information hierarchy to bridge the gap between deep navy and bright cyan.
*   **Neutral Text (#1A1A2E):** A deep charcoal used for maximum readability in body copy, avoiding the harshness of pure black.
*   **Surfaces:** Pure white is the primary canvas, while the soft off-white is used for sectioning and background differentiation.

## Typography

This design system utilizes **Inter** for its systematic, utilitarian nature, which aligns with the agency's technical focus. 

*   **Headlines:** Set in Secondary Navy with tight tracking for a precise, "locked-in" feel.
*   **Subheadings:** Set in Mid Blue to distinguish secondary information from primary titles.
*   **Body Copy:** Prioritize generous line height (1.6) to ensure high readability across long-form content.
*   **Labels:** Use uppercase with increased letter spacing for small metadata or categorization chips to maintain a technical, schematic feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop environments, ensuring that content remains contained and readable.

*   **Grid System:** A 12-column grid with wide 32px gutters creates an "airy" feel that prevents the UI from feeling cluttered.
*   **Rhythm:** Spacing follows a strict 8px base unit. Section-to-section padding is intentionally large (120px) to allow the technical wireframe textures room to breathe without competing with content.
*   **Alignment:** Use left-aligned layouts for technical copy and centered layouts for high-level marketing hero sections.

## Elevation & Depth

Depth is achieved through a combination of **low-contrast outlines** and **ambient shadows**.

*   **Layering:** Elements appear to sit just above the surface. Avoid heavy, dark shadows; instead, use soft, multi-layered shadows with a very low opacity (e.g., `rgba(13, 59, 110, 0.08)`).
*   **Background Textures:** Use subtle, light grey (#F4F7FA) geometric wireframe or cube patterns in the background of large sections to provide a sense of 3D space without adding physical weight.
*   **Accents:** Depth is reinforced by "light-leaks" or thin 1px Cyan borders on the top or left side of cards, suggesting a light source or technical highlight.

## Shapes

The shape language is **Soft**, leaning toward the "geometric" end of the spectrum to maintain a professional, SaaS-like tone.

*   **Corner Radii:** Use a standard 0.25rem (4px) for small elements like checkboxes and 0.5rem (8px) for larger components like buttons and cards.
*   **Geometric Motifs:** Incorporate hard-edged 45-degree angles in decorative wireframe elements to contrast the soft-roundedness of the functional UI components.

## Components

*   **Buttons:** Primary buttons use a solid Cyan Blue background with white text. Hover states should slightly darken the blue. Secondary buttons use a transparent background with a 1px Mid Blue border.
*   **Cards:** These are the centerpiece. Use a white background, an 8px corner radius, and a 1px border in #F4F7FA. Add a subtle Cyan top-border (2px) to signify "active" or "featured" states. Apply a soft ambient shadow on hover.
*   **Inputs:** Minimalist style with a 1px light grey border that transitions to Cyan on focus. Labels should use the `label-caps` typography style.
*   **Chips/Tags:** Small, pill-shaped elements using #F4F7FA background and Mid Blue text for categorization.
*   **Geometric Textures:** Utilize SVG-based cube patterns as background decorations for hero sections or card clusters, set at 5-10% opacity in Mid Blue.
*   **Progress Indicators:** Use thin, horizontal Cyan bars to reflect the agency's data-driven and precise nature.