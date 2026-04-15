# About Section Images

## How to Add Your Images

1. **Place images in this folder** (`images/about/`)

2. **Recommended files:**
   - `zackry.jpg` - Main photo of Zackry for the about section
   - `shop.jpg` - Photo of the home studio/barbershop setup (optional)

3. **Update `index.html`** - Replace the placeholder:

   Find this block:
   ```html
   <div class="placeholder-image">
       <i class="fas fa-user-tie"></i>
       <span>Zackry R.P</span>
   </div>
   ```

   Replace with:
   ```html
   <img src="images/about/zackry.jpg" alt="Zackry R.P - Barber">
   ```

   Then update the CSS to ensure the image fills the container:
   ```css
   .image-frame img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
   ```

## Tips

- Use a high-quality, well-lit photo
- Professional or action shot works best
- Recommended size: 600x800px (portrait)
- Format: JPG or WebP
