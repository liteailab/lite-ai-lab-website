# LiteAI Lab Website - Development Specification

You are a senior front-end developer. Build a complete, production-ready STATIC website for the YouTube channel:
https://www.youtube.com/@LiteAILab

---

## Delivery Format

- Output MUST be a single ZIP archive containing the entire website.
- The website must be fully static and compatible with GitHub Pages.
- No backend, no server, no database.
- Use only HTML/CSS/JS (vanilla) or a static-site approach that outputs plain HTML (but do NOT require Node build steps to run the site).
- Everything must work by opening index.html locally and also when hosted on GitHub Pages.

---

## Site Goals

- Modern, clean, AI-lab / tech feel (dark theme by default, with optional light toggle).
- Fast, responsive, accessible (WCAG-friendly), SEO-friendly.
- Use semantic HTML, good typography, and a consistent design system.

---

## Pages Required

### 1. Home (index.html)

- Hero section introducing "LiteAI Lab" (short tagline + CTA buttons).
- A "Latest Videos" / "All Videos" section that lists ALL videos.

**Video Layout:**
- Videos displayed in a **vertical list layout** (one below the other), NOT a grid.

**Thumbnail Display:**
- Full thumbnail visible with **proper aspect ratio maintained** (no cropping).

**Video Information:**
Each video entry must display ALL information from the provided JSON:
- Thumbnail (full size, aspect ratio preserved)
- Title
- Publish date
- Full description
- Duration
- Tags (displayed as clickable badges)
- Link/button to YouTube watch page

**Tag-based Filtering:**
- Clickable tag buttons to filter videos by tags/categories.
- Show all unique tags from the video data as filter options.

**Search Functionality:**
- Search input that filters videos by matching against BOTH **description** AND **tags** (not just title).

### 2. About Us (about.html)

- Mission, what the channel covers, what viewers will learn.
- A section explaining content categories (e.g., Tutorials, Experiments, Tools, Reviews).
- Add a simple timeline or milestones section (generic content is fine).

### 3. Contact Us (contact.html)

- A contact form UI (name, email, message) that works in a static way:
  - Use a "mailto:" fallback OR integrate with Formspree as a configurable placeholder (no secrets in code).
- Include social links placeholders (YouTube, X/Twitter, LinkedIn, GitHub).
- Include a small FAQ accordion (3–5 items) about collaborations, sponsorships, requests, etc.

---

## Global Requirements

- Top nav: Home, About, Contact + a "Subscribe" button that links to the YouTube channel.
- Footer: copyright, quick links, and social icons.
- Add a favicon and meta tags (Open Graph + Twitter Card).
- Add a simple blog-like "Highlights" section on the homepage (static cards, no extra pages required).

---

## Video Data Handling (IMPORTANT)

**Input:**
- User will provide a JSON file containing video details.

**Implementation:**
- Video data MUST be **embedded directly within the HTML or JavaScript** file (no external JSON fetching).

**Reason:**
- Avoids CORS issues when opening files directly from filesystem (file:// protocol).

**Requirements:**
- The embedded video data structure should support: id, title, description, thumbnail, url, date, duration, and tags (array).
- **No fetch() calls for video data** - everything must work offline after opening index.html.

### Video Data Structure Expected

```json
{
  "videos": [
    {
      "id": "videoId",
      "title": "Video Title",
      "description": "Full description text",
      "thumbnail": "https://i.ytimg.com/vi/videoId/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=videoId",
      "date": "2025-01-15",
      "duration": "12:34",
      "tags": ["tutorial", "docker", "beginner"]
    }
  ]
}
```

---

## Logo and Favicon Processing (IMPORTANT)

**Input:**
- User will provide a single logo image file (may be any size/format).

**Required Processing:**
- Automatically resize and transform the provided logo to generate ALL necessary variants.

### Logo Variants

| File | Description |
|------|-------------|
| `/assets/images/logo.png` | Main logo for header (appropriately sized, e.g., 40-50px height) |
| `/assets/images/logo-large.png` | Larger version for about page or hero if needed |

### Favicon Variants (Generate ALL)

| File | Size | Purpose |
|------|------|---------|
| `/favicon.ico` | 16x16, 32x32, 48x48 | Multi-size ICO file |
| `/assets/images/favicon-16x16.png` | 16x16 | Standard favicon |
| `/assets/images/favicon-32x32.png` | 32x32 | Standard favicon |
| `/assets/images/apple-touch-icon.png` | 180x180 | iOS home screen |
| `/assets/images/android-chrome-192x192.png` | 192x192 | Android/Chrome |
| `/assets/images/android-chrome-512x512.png` | 512x512 | Android/PWA |
| `/assets/images/og-image.png` | 1200x630 | Open Graph (logo centered on branded background) |

### Web App Manifest

- `/site.webmanifest` - JSON manifest referencing the Android Chrome icons

### HTML References

- Include proper `<link>` tags in all HTML pages for all favicon variants.

**Important:** Do NOT expect the user to pre-resize images - handle all transformations programmatically.

---

## Assets / Images

- All other images MUST be generated (placeholders are acceptable):
  - Provide 3–6 generated hero/background/section images (tech/AI abstract).
  - Store them in `/assets/generated/`
  - Include short alt text for every image.
- Use SVG icons (inline or local) — do not rely on external CDNs for icons.

---

## Technical / Structure

### File Structure

```
/index.html
/about.html
/contact.html
/favicon.ico
/site.webmanifest
/assets/
  /css/
    styles.css
  /js/
    main.js
    videos.js (video rendering, filtering, search logic)
  /images/
    logo.png
    logo-large.png
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
    og-image.png
  /generated/
/README.md
```

### README.md Must Include

- How to upload to GitHub Pages (steps).
- **How to replace the logo:** Instructions noting that if user provides a new logo, all favicon variants should be regenerated (provide link to online favicon generator tool as alternative).
- **How to update video data:** Clear instructions on editing the embedded video array in videos.js.
- How to configure contact form (mailto or Formspree).
- Any limitations and how to customize colors/text.

---

## Design Details

- Use CSS variables for theming and spacing.
- Add subtle animations (hover states, fade-in on scroll) but respect prefers-reduced-motion.
- Ensure good performance: lazy-load thumbnails, optimize images, avoid heavy JS.
- **Video list design:** Clean vertical cards with thumbnail on left or top, all metadata clearly organized.

---

## Content

- Write tasteful, concise copy suitable for an AI/tech YouTube channel named "LiteAI Lab".
- Do NOT invent specific personal claims. Keep it generic and professional.

---

## Final Output

- Return ONLY the ZIP archive (no extra commentary).
- Ensure all links work, all pages are connected, and the homepage successfully displays and filters videos from the embedded data.
- Ensure all logo and favicon variants are properly generated and referenced.
