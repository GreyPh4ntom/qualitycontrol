# Gallery Images Guide

## How to Add Your Before/After Images

1. **Place your images in this folder** (`images/gallery/`)

2. **Recommended naming convention:**
   - `low-fade-before.jpg`
   - `low-fade-after.jpg`
   - `skin-fade-before.jpg`
   - `skin-fade-after.jpg`
   - `line-design.jpg`
   - `beard-lineup-before.jpg`
   - `beard-lineup-after.jpg`
   - etc.

3. **Update `index.html`** - Replace the placeholder gallery items:

   Find this block:
   ```html
   <div class="placeholder-gallery-img">
       <i class="fas fa-image"></i>
       <span>Low Fade</span>
   </div>
   ```

   Replace with:
   ```html
   <img src="images/gallery/low-fade-after.jpg" alt="Low Fade Haircut">
   ```

4. **Categories available:**
   - `fades` - For fade cuts
   - `designs` - For hair designs/art
   - `beards` - For beard work
   - `before-after` - For before/after comparisons

5. **Update the data-category attribute** to match your image type:
   ```html
   <div class="gallery-item" data-category="fades before-after">
   ```

## Tips for Best Results

- Use consistent lighting for before/after shots
- Same angle for before and after photos
- Recommended size: 800x800px or larger
- Format: JPG or WebP for optimal loading
- Compress images for faster page loads
