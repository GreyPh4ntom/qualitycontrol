# QualityControl - Premium Barber Services Website

A modern, mafia-themed barber shop website for **QualityControl** by Zackry R.P.

## Features

- 🎨 **Mafia Theme** - Dark, luxurious design with gold accents
- ✨ **Amazing Animations** - Smooth transitions, parallax effects, custom cursor
- 📱 **Fully Responsive** - Works on all devices
- 🖼️ **Gallery with Filters** - Showcase before/after cuts by style
- 💬 **Testimonials Slider** - Client reviews with auto-rotation
- 📞 **WhatsApp Integration** - Direct booking via WhatsApp
- 🏠 **House Calls Section** - Highlight mobile barber services
- ⚡ **GitHub Pages Ready** - Static site, no build process needed

## Live Demo

Host on GitHub Pages:
1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Select branch: `main`, folder: `/ (root)`
4. Save

## Customization Guide

### 1. Update WhatsApp Number

Replace `1234567890` with Zackry's actual WhatsApp number (with country code, no + or spaces):

**Files to edit:**
- `index.html` (search for `wa.me/1234567890`)
- `js/main.js` (search for `1234567890`)

Example: If number is +1 (555) 123-4567, use `15551234567`

### 2. Add Your Images

#### Gallery Images (Before/After Cuts)
Place images in `images/gallery/` and update the gallery items in `index.html`:

```html
<div class="gallery-item" data-category="fades before-after">
    <div class="gallery-image">
        <img src="images/gallery/low-fade-before.jpg" alt="Low Fade Before">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>Low Fade</h4>
                <p>Before & After</p>
            </div>
            <button class="gallery-zoom" aria-label="View image">
                <i class="fas fa-expand"></i>
            </button>
        </div>
    </div>
</div>
```

**Recommended image naming:**
- `low-fade-before.jpg`
- `low-fade-after.jpg`
- `skin-fade-before.jpg`
- `skin-fade-after.jpg`
- etc.

#### About Section Image
Replace the placeholder in `images/about/`:

```html
<div class="placeholder-image">
    <img src="images/about/zackry.jpg" alt="Zackry R.P">
</div>
```

### 3. Update Contact Information

In `index.html`, update:
- Phone number
- Location
- Business hours
- Social media links (Instagram, Facebook, TikTok)

### 4. Update Services & Pricing

Edit the services section in `index.html` to adjust:
- Service names
- Descriptions
- Prices

### 5. Add More Testimonials

Copy a `testimonial-card` block and update the content.

## Project Structure

```
qualitycontrol/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   ├── gallery/        # Before/after cut images
│   └── about/          # About section images
└── videos/             # Video content (optional)
```

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons (CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved - QualityControl © 2026

## Contact

For questions or support, contact Zackry R.P via WhatsApp.
