# Mahishika Digital — Frontend Assignment

Responsive single-page digital agency landing page with custom mega-menu interactions.

## Stack
- HTML5, CSS3, Vanilla JavaScript
- Bootstrap 5.3 for responsive grid/layout utilities
- Custom navigation and mega-menu implementation (no prebuilt navbar/mega-menu component)

## Run locally
1. Open this folder in VS Code.
2. Install the Live Server extension, or serve the folder with any static web server.
3. Open `index.html` using Live Server.

## Structure
- `index.html` — page content and semantic navigation
- `css/variables.css` — design tokens
- `css/style.css` — global and section styles
- `css/header.css` — header/navigation
- `css/mega-menu.css` — mega-menu
- `css/responsive.css` — responsive breakpoints
- `js/navigation.js` — menu keyboard and disclosure interactions
- `js/mobile-menu.js` — mobile navigation
- `js/main.js` — shared page behaviour

## Accessibility decisions
- Semantic `header`, `nav`, `main`, `section`, `footer`, lists, links and buttons.
- Skip-to-content link.
- Disclosure buttons expose `aria-expanded` and `aria-controls`.
- Visible keyboard focus styles.
- Escape closes open menus and restores focus to the trigger.
- Arrow Down opens a disclosure and focuses its first link; Arrow Up/Down moves through links.
- Reduced-motion preference is respected.

The navigation uses disclosure patterns rather than `role="menu"` because these are ordinary website navigation links, not application menu commands. `aria-haspopup="menu"` is therefore intentionally omitted.

## Responsive testing targets
320, 375, 768, 1024, 1280 and 1536 CSS pixels.

## Performance notes
- JavaScript files use `defer`.
- No large hero image is loaded in this starter, so there are no image assets to lazy-load yet.
- When adding images, provide intrinsic `width` and `height` (or `aspect-ratio`) to reduce layout shift. Use `loading="lazy"` for below-the-fold images, not the primary hero image.

## Known limitations / assumptions
- The Zeplin design files were not accessible during implementation. Current copy, colors and sample service/industry/project labels are placeholders and must be checked against the supplied design.
- Contact email is a placeholder.
- Lighthouse scores and WCAG 2.1 AA conformance are not claimed until manual and automated testing is completed.
- Test latest Chrome and Firefox locally; Safari testing requires Safari on a supported Apple device/environment.
- Contrast must be rechecked if design tokens are changed to match Zeplin.

## Suggested final checks
1. Keyboard-only navigation, including Tab, Shift+Tab, Enter, Space, Escape and Arrow keys.
2. Axe DevTools or equivalent accessibility scan.
3. Responsive layout at all six required widths.
4. Lighthouse Performance, Accessibility and Best Practices.
5. Latest Chrome, Firefox and Safari.
