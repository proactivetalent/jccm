# Homepage design foundations

Source: Figma frame `8179:1391` (`Home Page`) in the JCCM website file.
These values describe only that 1920 px desktop frame and the component variants
directly referenced by it. They are not a responsive specification.

## Typography

All four families used by the frame are available through `next/font/google` and
are configured in the root layout. Figma reports no missing fonts.

| Role | Figma typography |
| --- | --- |
| Primary display / section title | Stack Sans Headline, usually Regular or Medium, 72 px. Observed line heights are 72 px (hero), 89.297 px (section titles), 92% (Trusted Expertise), 100% (CTA), and 101.751% (Testimonials); these are not interchangeable. |
| Process / feature card title | Stack Sans Headline Medium, 44 px, 99.554–99.6% line height, brand teal. |
| Service title | Stack Sans Headline Regular, 40 px, 113.426% line height. |
| Portfolio title | Stack Sans Headline Regular, 28 px or 32 px with 38.629 px line height; both sizes appear in carousel states. |
| Supporting heading / value label | Stack Sans Headline Light or Regular, 24–26 px. Common line heights are 24 px, 30 px, or 113.426%. |
| Navigation | Stack Sans Headline Regular, 20 px, auto line height, no tracking, original case. |
| Standard CTA label | Stack Sans Text Regular, 19.646 px with a 19.646 px line height, no tracking, original case. |
| Compact CTA label | Stack Sans Text Regular, 16 px with a 19.646 px line height. |
| Primary body | Stack Sans Text Light, 16 px. The most repeated line height is 123% (19.68 px); 113.426% and a fixed 24 px are also used in specific sections. |
| Hero body | Stack Sans Text Light, 24 px / 30 px. |
| Testimonial body | Stack Sans Text Light, 20 px / auto. |
| Eyebrow / section label | Stack Sans Headline Medium, 24 px / 32 px, uppercase, `#868686`; the process eyebrow instead uses Geist Medium, 24 px / 31.792 px, uppercase, `#B5B9BB`. |
| Metrics | Geist SemiBold, 64 px / 101.751%; metric labels use Geist Regular, 24 px / auto. |
| Footer | Stack Sans Text Regular or Medium around 19.214 px; headings are uppercase with -1% tracking. Copyright is 17.079 px / 129.967%. |

Stack Sans Headline weights present in the frame are Light (300), Regular (400),
Medium (500), and SemiBold (600). Stack Sans Text uses Light (300), Regular
(400), and Medium (500). Geist uses Regular (400), Medium (500), and SemiBold
(600). Figtree Bold (700), 24 px / 30 px, appears only in “Million SQ Feet” and
is retained as a one-off rather than promoted into the main type hierarchy.

Recurring casing is deliberate: main copy uses original case, primary section
titles use Figma's Title case setting, and eyebrows/footer category labels use
uppercase. No general letter-spacing token is warranted; most text uses 0%, with
the footer category pattern using -1%.

## Colors

The global CSS exposes only the recurring foundation colors as Tailwind theme
aliases. Near-black colors are kept separate because both are explicit in Figma.

| Value | Usage on the homepage |
| --- | --- |
| `#2B7F73` | Primary brand teal: fills, CTA backgrounds, icons, active labels, and section accents. |
| `#205351` | Deep teal used as the dark endpoint of major background gradients. |
| `#ECF4F3` | Main page surface, light cards, light text on dark sections, and light borders. |
| `#000000` | Primary text and dark icon strokes. |
| `#101010` | Alternate strong text used by specific headings/body copy. Do not collapse into black. |
| `#868686` | Muted labels and inactive feature text/icons. |
| `#616161` | Secondary service numbers and inactive service labels. |
| `#B5B9BB` | Structural dividers and the process eyebrow. |
| `#79EBDB` | Footer category accent. |
| `#FFFFFF` | White controls/text; the sticky header uses white at 80% opacity. |

Section-specific colors that are documented but not globalized are `#DAEAE8`
(testimonial card surfaces), `#D9D9D9` (inactive pagination marks), `#D8D8D8`
(light icon strokes), `#7B7B7B` (one body paragraph), and `#535353` (one service
label).

The repeated dark section gradient runs from `#205351` to `#2B7F73`. The Our
Process background is represented by Figma as approximately
`linear-gradient(75.0807deg, #205351 22.829%, #2B7F73 88.348%)`. Decorative
white-to-transparent gradients are used only on the floating ellipse artwork.
The final CTA combines a full-bleed image at 24% opacity with a teal overlay.

## Layout

- Desktop frame: 1920 × 7352 px, clipped.
- Sticky header frame: 1920 × 114 px.
- The common main-content rail is x = 200 to x = 1720 (1520 px), used by the
  hero and multiple section headings. It is a recurring rail, not a universal
  container.
- Hero: headline at x = 200, width 659; media wrapper at x = 1140, width 580;
  supporting copy at x = 1081, width 612.
- Hero/trusted structural dividers sit at x = 28 and x = 1889.
- Portfolio carousel viewport: x = 19, width 1888. Its visible slide begins at
  x = 28 and is 1860 px wide. Four 445 px columns start at x = 28, 500, 971,
  and 1443, with exact gaps of 27, 26, and 27 px.
- Services content: x = 126, width 1674. It uses a 488 px service-index region,
  a 1224 × 300 px media band beginning 450 px into the component, and separate
  detail columns beginning 547 px and 1086 px into the component.
- Our Process is full width (1920 × 814). Vertical rails are at x = 99, 531,
  961, 1392, and 1823, producing 430–431 px columns. Cards are 384 × 458 px at
  x = 123, 556, 984, and 1414.
- The Values composition is intentionally wider than the frame: x = -22,
  width 1966.
- Testimonials wrapper: x = 270, width 1378; 54 px arrow controls occupy both
  edges. The inner carousel is 1271 px wide and uses a 414 px card pitch.
- Final CTA: full width, 1920 × 577 px; copy begins at x = 160.
- Footer vertical rails are at x = 108, 535, 962, 1388, and 1815.

Do not force these sections into one `Container` variant. Section implementation
should use the rail that the corresponding Figma composition actually follows.

## Spacing

- Portfolio and Services intros begin 96–98 px below their preceding divider;
  Our Process and Testimonials begin 107 px below their section boundary.
- Large section heading to primary content is repeatedly 45–51 px: Portfolio
  heading bottom to carousel is 51 px, Services is 45 px, and Our Process is
  49 px.
- The four process cards use 44–49 px inter-card gaps because they are inset
  within the 430–431 px structural columns; use the rail geometry rather than a
  rounded generic gap token.
- Process cards have approximately 24–26 px horizontal inner padding. Their icon
  rows begin 38–48 px from the top, depending on the asset.
- Portfolio cards use the exact 26/27 px horizontal gaps noted above.
- Testimonial cards use a 414 px horizontal pitch.

These patterns are documented rather than exposed as global spacing tokens; the
frame does not show one consistent spacing scale.

## Buttons / CTAs

All observed CTA shapes are square-cornered.

### Standard hero CTA

- Height: 56 px.
- Width is content-specific: 277 px (“Explore Our Projects”) or 366 px
  (“Schedule a Free Consultation”).
- Background: `#2B7F73`; outline layer: 1 px `#2B7F73`.
- Icon: 44.204 × 44.204 px, positioned 6 px from the top and left.
- Label: Stack Sans Text Regular, 19.646 px / 19.646 px, white or `#ECF4F3`.
- Label x-position: 66–68 px; top: 18 px; right remainder: 13–14 px.
- Radius: 0.

### Compact outlined Explore CTA

- Light-section version: 167 × 54 px; dark-section version: 172 × 54 px.
- Outer border: 3 px; 54 × 54 px icon cell with 2 px border.
- Label starts at x = 75–76 px and y = 17 px.
- Light-section colors: `#2B7F73`; dark-section colors: `#ECF4F3`.
- Radius: 0.

### Compact services CTA

- 131 × 36 px with a 3 px brand outline.
- 32 × 32 px brand icon cell at x = 0, y = 2; icon glyph is 12 × 12 px.
- Label starts at x = 50, y = 8 and uses Stack Sans Text Regular 16 px /
  19.646 px in `#2B7F73`.
- Radius: 0.

### Light-on-dark consultation CTA

- 361 × 56 px (the outline layer is 364 px wide in Figma).
- 3 px `#ECF4F3` outer border; 56 × 56 px white icon cell with a 1 px light
  border.
- Label starts at x = 68, y = 18 and uses the standard 19.646 px CTA style.
- Radius: 0.

Each source component set includes an alternate variant, but those variants are
named only `Variant2`/`Variant3`; Figma does not identify them as hover, focus, or
pressed states. Their visual deltas are recorded, but no CSS interaction state
is assigned until the intended semantics are confirmed.

## Borders / Radii / Shadows

- Recurring card and image radius: exactly 10 px (34 occurrences).
- Social controls use a one-off 24.281 px radius.
- Testimonial frames also use asymmetric 10 px single-corner radii.
- Structural divider strokes are `#B5B9BB` at 2.09 or 2.104 px in the scaled
  Figma geometry.
- CTA borders use exact 1 px, 2 px, and 3 px layers as described above.
- The only drop shadow is on the Trusted Expertise building image:
  x = 12.611 px, y = 2.522 px, blur = 18.916 px, spread = 0,
  `rgba(0, 0, 0, 0.25)`. It is not a reusable global shadow.

## Images

- Hero media wrapper: 580 × 346 px. The image is 665 × 415 px, shifted -85 px
  horizontally inside the clipped wrapper, with a 10 px image radius.
- Portfolio: alternating 445 × 545 px (0.817 ratio) and 445 × 436 px (1.021
  ratio) images, all `CROP`, all with 10 px radii. Crop transforms are
  image-specific; there is no shared object-position.
- Trusted Expertise: 440 × 415 px `CROP` image with the one-off shadow above.
- Services media: 1224 × 300 px (4.08 ratio), 10 px radius, using Figma's image
  fill/crop treatment.
- Final CTA media: full bleed at 1920 × 577 px, `CROP`, 24% image opacity under
  the teal overlay.
- Images are not downloaded in this phase. Exact Figma exports must be used when
  their sections are implemented; no placeholders or stock substitutions are
  appropriate.

## Important Figma observations

- The page is composed mostly with explicit desktop geometry and section-level
  component instances. It does not define responsive behavior.
- Portfolio and Testimonials contain repeated off-canvas tracks, indicating
  future carousel behavior. No motion or carousel code belongs in this phase.
- The sticky header uses `rgba(255, 255, 255, 0.8)`, but its blur behavior is not
  specified by the inspected node.
- The root frame contains duplicate hero CTA instances at identical positions.
  Treat these as Figma layering/prototype artifacts until interaction behavior
  is confirmed.
- No reusable React primitive was created in this phase. A universal Container
  would misrepresent the differing section rails, and Button interaction states
  are not semantically named in Figma.

## Ambiguities / unresolved items

- Alternate CTA variants are visually inspectable but not named as hover/focus/
  pressed states. The designer should confirm their interaction mapping.
- The frame height is 7352 px, while a background rectangle extends to 7598 px
  and an additional footer-link group begins at y = 7598 outside the clipped
  frame. The visible 7352 px frame is treated as authoritative.
- Several carousel/component layers contain duplicated or off-canvas content;
  their future interaction timing and controls are not specified.
- Exact mobile/tablet rails, typography changes, crop changes, and overflow
  behavior remain undefined because only the desktop frame was supplied.
- Figma image exports have not been added to the repository. They will be needed
  section by section.
