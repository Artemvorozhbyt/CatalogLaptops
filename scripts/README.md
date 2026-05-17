# Laptop Image Generation

This workspace includes a generator script for laptop image paths.

## Workflow

- `js/laptops.source.js` is the raw build source.
- `js/laptops.generated.js` is the runtime module imported by the app.

## Usage

- `npm run build:laptop-images`

This will regenerate `project/js/laptops.generated.js` with image paths based on the laptop name.

On Windows, if Node is not installed, you can also run:

- `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/generate-laptop-images.ps1`

The current generated module is a wrapper around `js/laptops.source.js` that fills missing `images` arrays on import.
