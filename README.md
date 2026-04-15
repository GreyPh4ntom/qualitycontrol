# QualityControl - Premium Barber Services Website

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

**image naming:**
- `low-fade-before.jpg`
- `low-fade-after.jpg`
- `skin-fade-before.jpg`
- `skin-fade-after.jpg`
- etc.

#### About Section Image
Replace the placeholder in `images/about/`:

```html
<div class="placeholder-image">
    <img src="images/about/zackry.jpg" alt="Zaykie">
</div>
```

###  Update Contact Information

In `index.html`, update:
- Phone number
- Location
- Business hours
- Social media links (Instagram, Facebook, TikTok)

###  Update Services & Pricing

Edit the services section in `index.html` to adjust:
- Service names
- Descriptions
- Prices

###  Add More Testimonials

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

All rights reserved - QualityControl © 2025

## Contact

For questions or support, contact Zaykie via WhatsApp.
