# LiteAI Lab Website

A modern, fully static website for the LiteAI Lab YouTube channel. Built with vanilla HTML, CSS, and JavaScript - no build process required!

## 🚀 Quick Start

1. Extract the ZIP archive
2. Open `index.html` in your web browser
3. That's it! The site works locally and is ready to deploy.

## 📁 Project Structure

```
liteailab-website/
├── index.html              # Home page with video list
├── about.html              # About page
├── contact.html            # Contact page with form
├── favicon.ico             # Multi-size favicon
├── site.webmanifest        # PWA manifest
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling
│   ├── js/
│   │   ├── main.js         # Theme toggle, accordions, etc.
│   │   └── videos.js       # Video data and filtering logic
│   ├── images/
│   │   ├── logo.png        # Header logo
│   │   ├── logo-large.png  # Large logo for about page
│   │   ├── favicon-*.png   # Various favicon sizes
│   │   ├── og-image.png    # Open Graph image for social sharing
│   │   └── ...
│   └── generated/
│       └── *.png           # Generated background images
└── README.md               # This file
```

## 🎥 Updating Video Data

Video information is embedded directly in the JavaScript to avoid CORS issues when running locally.

### How to Update Videos

1. Open `assets/js/videos.js` in a text editor
2. Find the `videosData` object at the top of the file
3. Replace the sample videos with your actual video data

### Video Data Format

Each video should follow this structure:

```javascript
{
  "id": "unique-video-id",
  "title": "Video Title",
  "description": "Full video description text",
  "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/mqdefault.jpg",
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "date": "2025-01-15",
  "duration": "12:34",
  "tags": ["tutorial", "ai", "beginner"]
}
```

### Getting YouTube Video Data

For YouTube thumbnails, use this format:
- `https://i.ytimg.com/vi/VIDEO_ID/mqdefault.jpg` (medium quality)
- `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg` (high quality, if available)

Replace `VIDEO_ID` with your actual YouTube video ID.

### Example

```javascript
const videosData = {
  "videos": [
    {
      "id": "abc123",
      "title": "How to Install Docker on Ubuntu",
      "description": "Complete guide to installing Docker on Ubuntu 22.04...",
      "thumbnail": "https://i.ytimg.com/vi/abc123/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=abc123",
      "date": "2025-01-15",
      "duration": "15:30",
      "tags": ["docker", "tutorial", "ubuntu", "devops"]
    }
    // Add more videos...
  ]
};
```

## 🎨 Replacing the Logo

The provided logo has been automatically processed into all necessary variants. If you want to use a different logo:

### Option 1: Online Tool (Recommended)

1. Visit [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
2. Upload your new logo image
3. Download the generated favicon package
4. Replace the files in `assets/images/` with the new ones
5. Update `favicon.ico` in the root directory

### Option 2: Manual Processing

If you have image editing software (Photoshop, GIMP, etc.):

**Required Logo Variants:**
- `assets/images/logo.png` - Header logo (approximately 40-50px height)
- `assets/images/logo-large.png` - Larger version (approximately 150px height)

**Required Favicon Variants:**
- `favicon.ico` - Multi-size ICO file (16x16, 32x32, 48x48)
- `assets/images/favicon-16x16.png` - 16x16 pixels
- `assets/images/favicon-32x32.png` - 32x32 pixels
- `assets/images/apple-touch-icon.png` - 180x180 pixels
- `assets/images/android-chrome-192x192.png` - 192x192 pixels
- `assets/images/android-chrome-512x512.png` - 512x512 pixels
- `assets/images/og-image.png` - 1200x630 pixels (for social media)

### After Replacing Logo

Make sure to:
1. Clear your browser cache to see the new logo
2. Test on different devices and browsers
3. Check social media previews using tools like [OpenGraph.xyz](https://www.opengraph.xyz/)

## 📧 Configuring the Contact Form

By default, the contact form uses a `mailto:` fallback which opens the user's default email client.

### Option 1: Mailto (Default - No Setup Required)

The form is already configured to use `mailto:contact@liteailab.com`. To change the email address:

1. Open `assets/js/main.js`
2. Find the contact form section
3. Change `contact@liteailab.com` to your email address

### Option 2: Formspree (Recommended for Production)

Formspree allows you to receive form submissions without a backend:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Open `contact.html`
4. Update the form tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Remove or comment out the JavaScript form handler in `assets/js/main.js`

### Option 3: Other Form Services

You can also use services like:
- [Netlify Forms](https://www.netlify.com/products/forms/) (if deploying to Netlify)
- [Getform](https://getform.io/)
- [Basin](https://usebasin.com/)

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the '+' icon → 'New repository'
3. Name it `liteailab-website` (or your preferred name)
4. Make it public or private
5. Don't initialize with README (we already have one)
6. Click 'Create repository'

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface

1. In your new repository, click 'uploading an existing file'
2. Drag all files and folders from the website directory
3. Commit the changes

#### Option B: Using Git (Recommended)

```bash
# Navigate to your website directory
cd liteailab-website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/liteailab-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to 'Pages' in the left sidebar
3. Under 'Source', select 'Deploy from a branch'
4. Select branch: `main` and folder: `/ (root)`
5. Click 'Save'
6. Wait a few minutes for deployment
7. Your site will be available at: `https://YOUR_USERNAME.github.io/liteailab-website/`

### Custom Domain (Optional)

1. Buy a domain from any registrar (Namecheap, Google Domains, etc.)
2. In your repository settings → Pages, add your custom domain
3. Update your DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. GitHub will automatically provision an SSL certificate

## 🎨 Customization

### Changing Colors

All colors are defined as CSS variables in `assets/css/styles.css`:

```css
:root {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-accent: #3b82f6;
  /* ... more variables */
}
```

Edit these values to change the entire color scheme.

### Changing Fonts

Update the font variables in `assets/css/styles.css`:

```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
  --font-mono: 'SF Mono', Monaco, ...;
}
```

To use Google Fonts:
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Add the `<link>` tag to the `<head>` of each HTML file
4. Update the CSS variables

### Modifying Content

All text content is in the HTML files. Simply open any `.html` file in a text editor and modify the text between the tags.

### Adding More Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it (e.g., `services.html`)
3. Update the content
4. Add a navigation link in all HTML files:
   ```html
   <li><a href="services.html">Services</a></li>
   ```

## 🎯 Features

- ✅ Fully static (no build process required)
- ✅ Dark/Light theme toggle
- ✅ Responsive design (mobile-friendly)
- ✅ Video filtering by tags
- ✅ Search functionality (searches descriptions and tags)
- ✅ Vertical video list layout with full thumbnails
- ✅ SEO optimized (meta tags, Open Graph, Twitter Cards)
- ✅ Accessible (WCAG-friendly)
- ✅ Fast loading (optimized assets)
- ✅ PWA support (web manifest)
- ✅ Smooth animations (respects prefers-reduced-motion)

## 🔧 Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Limitations

1. **No Backend**: This is a static site. Form submissions require external services.
2. **No CMS**: Content updates require editing HTML/JS files directly.
3. **Video Data**: Must be updated manually in `videos.js`.
4. **No Search Engine**: Uses simple client-side filtering (not full-text search).

## 🆘 Troubleshooting

### Videos Not Showing

1. Check browser console for errors (F12)
2. Verify `videos.js` is properly formatted (valid JSON syntax)
3. Ensure video thumbnails are accessible (not blocked by CORS)

### Contact Form Not Working

1. Check if your email client is configured
2. Consider using Formspree or another form service
3. Check browser console for JavaScript errors

### Styles Not Loading

1. Verify file paths are correct (case-sensitive on some servers)
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Check that `styles.css` is in `assets/css/`

### Images Not Loading

1. Check file paths in HTML files
2. Verify images exist in `assets/images/`
3. Try opening images directly in browser to test accessibility

## 📝 License

This website template is provided as-is for your use. Customize it however you like!

## 🤝 Support

For issues with the website template:
1. Check this README thoroughly
2. Review browser console for errors
3. Ensure all files are properly uploaded

For YouTube-specific questions, refer to [YouTube Help](https://support.google.com/youtube).

---

**Happy coding! 🚀**

Built with ❤️ for LiteAI Lab
