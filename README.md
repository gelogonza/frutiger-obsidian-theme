# Frutiger

An original Obsidian theme inspired by Frutiger Aero: clear blue glass, a spring-green landscape, bright controls, and readable note panes. The wallpaper is bundled locally, so the theme makes no network requests.

[Install Frutiger](https://community.obsidian.md/themes/frutiger) · [Add Frutiger Liquid Glass](https://community.obsidian.md/plugins/frutiger-liquid-glass)

![Frutiger for Obsidian](screenshots/promo.jpg)

## Install

Choose **Frutiger** under Settings → Appearance → Themes. For local testing, copy `theme.css` and `manifest.json` into `<vault>/.obsidian/themes/Frutiger/`, then select it in Appearance.

The optional **Frutiger Liquid Glass** companion plugin adds a WebGL2 glass effect on desktop. The theme works by itself with CSS glass and a static wallpaper.

## Customize

Install the **Style Settings** community plugin to reveal Frutiger's visual controls under Settings → Style Settings. Version 0.2.0 adds:

- Frutiger Aero and orange industrial-futurist **DORFic** styles.
- Aero Landscape, Aqua Current, Glass Bubbles, and DORFic Daylight wallpapers.
- Clear, Balanced, and Solid glass-density presets.
- Controls for blur, saturation, panel radius, note/sidebar tint, accent color, and icon contrast.

The three additional wallpapers are procedural CSS, so they add no downloads or network requests. Frutiger Liquid Glass recognizes the same Style Settings classes and updates its WebGL backdrop automatically.

## Development

`theme.template.css` is the authored CSS. `npm run build` embeds `aero-landscape.jpg` into `theme.css` as a data URI. No package installation or downloaded assets are required for the build. The repository includes only original Frutiger styling and the locally generated landscape image.

## Release checklist

- [x] Test reading and the companion plugin in a clean vault on macOS Obsidian 1.14.5.
- [x] Capture sample-only screenshots.
- [ ] Check editing, light and dark modes, and Settings before community submission.
- [x] Publish this source in a public GitHub repository.
- [x] Create release `0.1.0` with `manifest.json` and `theme.css` attached separately.
- [x] Publish through [Obsidian Community](https://community.obsidian.md/themes/frutiger).
- [x] Release and test version `0.2.0` with Style Settings and wallpaper packs.
