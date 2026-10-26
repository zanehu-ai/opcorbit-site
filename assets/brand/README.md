# Supplied OpcOrbit logos

The two original PNGs were supplied by the user on 2026-10-26 and are retained byte-for-byte.

- `wordmark-original.png`: `0E158376-8552-4872-AAF1-0F96B9265A22.png`, 799 × 826.
- `symbol-original.png`: `41D23FA3-B731-4CC1-8C4C-2658513B845C.png`, 798 × 826.

`public/brand/wordmark.png` crops the wordmark's whitespace and converts white to transparency, preserving its original raster silhouette and edge coverage. CSS inverts it in the existing dark theme. The source crop is x=83, y=343, width=633, height=149.

The supplied symbol is used for `public/favicon.ico` (16/32/48 px), `public/brand/icon-32.png`, and `public/brand/apple-touch-icon.png` (180 px). Its source crop is x=116, y=108, width=584, height=580. The square icons retain a white background and a small inset to stay legible on light and dark browser chrome.

These are deterministic raster derivatives, with no AI generation, redrawing, changed lettering, or altered orbit geometry. Original assets are outside `public/` so the full-resolution source files are retained for maintenance without adding them to the static export.
