# Kimo & Melia's Hawaiian Grindz - Website

A modern, SEO-optimized website for an authentic Hawaiian food pop-up and catering business on the Big Island.

## Quick Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Deploy automatically!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## File Structure

```
kimo-melia-site/
├── index.html          # Main HTML with full SEO optimization
├── css/
│   └── main.css        # Complete stylesheet
├── js/
│   └── main.js         # All interactivity + plate builder
├── images/
│   ├── logo.jpg        # Business logo
│   ├── hero-plate.jpg  # Hero section image
│   ├── team-photo.jpg  # Team/booth photo
│   └── gallery-*.jpg   # Gallery images
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Features

- **Interactive Plate Builder** - Custom SVG icons for each dish, real-time totals
- **Full SEO/AEO/GEO Optimization** - Schema.org markup, FAQ schema, geo-tags
- **Mobile-First Responsive Design** - Works beautifully on all devices
- **"Elevated Island Soul" Design** - Unique aesthetic avoiding generic AI look
- **Form Integration Ready** - Connect to Formspree, custom API, or email service

## Customization Checklist

Before going live:

1. **Phone Number**: Search for `XXX-XXXX` and replace with actual number
2. **Social Media**: Update footer links with actual profiles
3. **Domain**: Update canonical URLs and schema once domain is set
4. **Images**: Add additional photos as available
5. **Form Backend**: Connect the catering form to your preferred service

## Editing Content

### Menu Items
Edit the `menuItems` array in `js/main.js`

### Locations
Edit the `locations` array in `js/main.js`

### Testimonials
Edit the `testimonials` array in `js/main.js`

### Styling
All design tokens (colors, fonts, spacing) are CSS custom properties in `css/main.css`

## Color Palette

- **Koa (Deep Brown)**: #2C1810
- **Sunset Orange**: #E07B39
- **Taro Purple**: #6B5B7A
- **Ocean Teal**: #3A7D7B
- **Sand (Background)**: #F5F0E8

## Typography

- **Display**: Dela Gothic One
- **Body**: Outfit

## Support

Questions? Contact your consultant.

---

*Built with aloha for Kimo & Melia's Hawaiian Grindz*
