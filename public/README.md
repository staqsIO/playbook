# Public Assets Directory

This directory contains static assets that are served directly by Next.js.

## Directory Structure

```
public/
├── images/          # Images (PNG, JPG, WebP, etc.)
├── icons/           # Icons and SVG files
├── fonts/           # Custom font files (if not using next/font)
├── videos/          # Video files
└── files/           # PDFs, documents, etc.
```

## How to Use Assets

### Images

Place your images in `/public/images/` and reference them like this:

#### Using Next.js Image Component (Recommended)
```tsx
import Image from "next/image";

<Image 
  src="/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={100}
  priority // for above-the-fold images
/>
```

#### Using Regular img Tag
```tsx
<img src="/images/photo.jpg" alt="Photo" />
```

### Icons/SVGs

Store SVG icons in `/public/icons/`:

```tsx
<img src="/icons/check.svg" alt="" />
```

Or import SVGs as React components (recommended):
```tsx
import CheckIcon from "@/public/icons/check.svg";
<CheckIcon className="w-6 h-6" />
```

### Favicon

Place favicon files in `/public/`:
- `/public/favicon.ico`
- `/public/favicon.svg`
- `/public/apple-touch-icon.png`

### Fonts

If using custom fonts not via `next/font`:
```css
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
}
```

## Best Practices

### 1. Image Optimization
- Use WebP format when possible
- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images for thumbnails)
- Always use the Next.js `Image` component for automatic optimization

### 2. File Naming
- Use lowercase with hyphens: `my-image.png`
- Be descriptive: `hero-banner.jpg` not `img1.jpg`
- Include dimensions for clarity: `logo-200x100.png`

### 3. Organization
```
images/
├── logos/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── logo-dark.svg
├── heroes/
│   └── home-hero.webp
├── team/
│   ├── john-doe.jpg
│   └── jane-smith.jpg
└── products/
    ├── product-1.webp
    └── product-2.webp
```

### 4. Responsive Images
```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 5. Background Images
```tsx
<div 
  className="bg-cover bg-center" 
  style={{ backgroundImage: "url('/images/bg.jpg')" }}
>
  Content
</div>
```

## File Size Guidelines

- **Icons**: < 10 KB
- **Logos**: < 50 KB
- **Photos**: < 200 KB (optimized)
- **Hero Images**: < 500 KB (optimized)

## Image Formats

- **PNG**: Logos, icons, images needing transparency
- **JPG**: Photos, complex images
- **WebP**: Modern format, best compression (recommended)
- **SVG**: Vector graphics, icons, logos
- **AVIF**: Next-gen format (even better than WebP)

## External Images

To use external images with `next/image`, configure in `next.config.mjs`:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};
```

## Notes

- Files in `/public` are served from the root `/`
- Do not reference as `/public/images/...`, use `/images/...`
- Files are cached by browsers, use query strings for cache busting: `/images/logo.png?v=2`
- All files in public are accessible to anyone

