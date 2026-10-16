# SHIV MENS — Premium Men's Fashion Website

A complete, high-end, production-ready static website built for **SHIV MENS** (Shiv Mens), an independent men's fashion boutique located at Sai Vasanshah Square, Jaripatka, Nagpur, Maharashtra, India.

---

## 1. Quick Start & Local Preview

This is a **pure static website** built with HTML5, CSS3, and Vanilla JavaScript. It requires no database, backend server, node build steps, or external build dependencies.

### Option A: Open Directly in Any Web Browser
Double-click `index.html` to open it directly in Chrome, Edge, Safari, or Firefox.

### Option B: Local Web Server (Recommended)
Run a local static server from the project directory:

```bash
# Using Python:
python -m http.server 8085

# Using Node / npx:
npx serve .
```
Then open [http://localhost:8085](http://localhost:8085) in your web browser.

---

## 2. Project Directory Structure

```
shivmens/
├── index.html              # Homepage (Hero Video, Brand Intro, Categories, Preview, Social Feed)
├── about.html              # Brand Story, Philosophy, Store Atelier & Pillars
├── collection.html         # Interactive Catalog (Filtering by Category & Lightbox QuickView)
├── contact.html            # Verified Store Details, Live WhatsApp Builder & Location Map
├── 404.html                # Custom 404 Error Page
├── README.md               # Documentation & Asset Inventory
├── css/
│   ├── style.css           # Core Design System, Luxury Color Palette & Typography
│   └── responsive.css      # Full Mobile, Tablet & Desktop Media Queries + Reduced Motion
├── js/
│   ├── config.js           # Centralized Business Data (Phone, Address, WhatsApp, Social URLs)
│   ├── main.js             # Sticky Nav, Mobile Drawer, Video Controls & Dynamic Links
│   └── collection.js       # Filter Engine, Lightbox Modal & WhatsApp Message Builder
└── assets/
    ├── brand/              # Logos (SVG), Monogram Favicon, Official Brand Poster
    ├── icons/              # Self-contained SVG Icons (WhatsApp, Instagram, Facebook, etc.)
    ├── images/
    │   ├── hero/           # Hero Background Poster & Model Featured Cuts
    │   ├── collection/     # Denim, Linen Sets, Shirts, Cargo Trousers & Kurtas
    │   ├── editorial/      # High-Resolution Flat Lays & Catalog Shoot Posters
    │   └── social/         # Instagram Lookbook Feed Grid
    └── videos/
        ├── hero-bg.mp4     # Web-Optimized Lightweight Background Loop (crf 26)
        ├── denim-fit-reel.mp4
        ├── cargo-fit-reel.mp4
        ├── ethnic-kurta-reel.mp4
        ├── street-display.mp4
        └── posters/        # Video Thumbnail Fallback Posters
```

---

## 3. Centralized Business Configuration

All contact numbers, WhatsApp target numbers, social media links, store addresses, and UPI IDs are maintained in **`js/config.js`**. 

To update the phone number or links across all pages, edit `js/config.js`:

```javascript
const SHIV_CONFIG = {
  brand: {
    name: "SHIV MENS",
    legalName: "Shiv Mens",
    tagline: "Style That Speaks For You",
    description: "Curated men's fashion in Nagpur..."
  },
  contact: {
    primaryPhone: "+91 88300 12212",
    secondaryPhone: "+91 94228 08260",
    phoneRawPrimary: "8830012212",
    whatsappNumber: "918830012212", // International format for wa.me
    whatsappDefaultMessage: "Hi SHIV MENS, I would like to know more about your collection.",
    address: {
      landmark: "Sai Vasanshah Square",
      area: "Jaripatka",
      city: "Nagpur",
      state: "Maharashtra",
      pincode: "440014",
      country: "India"
    }
  },
  social: {
    instagram: {
      handle: "@shivmens_nagpur",
      url: "https://www.instagram.com/shivmens_nagpur"
    },
    facebook: {
      url: "https://www.facebook.com/shivmens_nagpur"
    }
  },
  payment: {
    upiId: "mukeshkngp-1@oksbi",
    payeeName: "Mukesh Kukreja / Shiv Mens"
  }
};
```

---

## 4. Source Asset Inventory & Usage Report

All brand media supplied in the original ZIP and WhatsApp files were inspected, organized, and converted for production web use:

| Source File | Processed Web Asset | Section Where Used | Description / Details |
|---|---|---|---|
| `WhatsApp Image ... 4.46.08 PM.jpeg` | `assets/brand/brand-poster.jpg`, `assets/brand/logo.svg` | Header, Brand Monogram, Avatar, Footer | Official brand poster with "Sm" crest, Jaripatka address & phone numbers. |
| `WhatsApp Image ... 4.42.36 PM (1).jpeg` | `assets/images/hero/hero-model-denim.jpg`, `assets/images/editorial/denim-poster-classic.jpg` | Hero Intro, About Gallery, Collection | Bluesmith Denim model shoot (white collared shirt, washed denim front/back). |
| `WhatsApp Image ... 4.42.36 PM.jpeg` | `assets/images/hero/hero-model-light.jpg`, `assets/images/editorial/denim-poster-light.jpg` | Collection Catalog, Lookbook | Bluesmith Denim model shoot (white tee, light blue wash denim front/back). |
| `WhatsApp Image ... 4.42.35 PM.jpeg` | `assets/images/editorial/linen-collection-flatlay.jpg`, `assets/images/collection/linen-co-ord-sets.jpg` | Editorial Banner ("OWN YOUR LOOK"), Collection | Luxury flat lay of "COS-123 Linen-Look Textile" shirts & trousers in 3 colors. |
| `WhatsApp Image ... 4.46.32 PM.jpeg` | 6 cropped denim products: `denim-khaki-chino.jpg`, `denim-crest-blue.jpg`, `denim-ab-black.jpg`, etc. | Collection Page Catalog Grid | 6 individual pairs of jeans held up in store with organized garment racks behind. |
| `WhatsApp Image ... 4.41.04 PM.jpeg` | `assets/images/collection/streetwear-shark-tshirt.jpg` | Collection Page (Streetwear) | Cookyss Dark Grey Shark Graphic T-Shirt. |
| `WhatsApp Image ... 4.41.51 PM.jpeg` | `assets/images/collection/premium-textured-shirt.jpg` | Category Tiles, Collection Page | Cookyss Dark Charcoal Structured Collared Shirt. |
| `WhatsApp Video ... 4.44.43 PM.mp4` | `assets/videos/hero-bg.mp4`, `denim-fit-reel.mp4` | Hero Section (silent web loop) & About Page | In-store live demonstration of comfort-stretch denim fit at Jaripatka store. |
| `WhatsApp Video ... 4.43.31 PM.mp4` | `assets/videos/cargo-fit-reel.mp4`, `cargo-utility-white.jpg` | Category Card, Collection Catalog | In-store showcase of white multi-pocket utility cargo trousers. |
| `WhatsApp Video ... 4.44.08 PM.mp4` | `assets/videos/ethnic-kurta-reel.mp4`, `ethnic-embroidered-black-kurta.jpg` | Category Card, Collection Catalog | In-store showcase of black embroidered and maroon festive kurta sets. |
| `WhatsApp Video ... 4.42.36 PM.mp4` | `assets/videos/street-display.mp4`, `store-mannequins-casuals.jpg` | Social Grid, Collection Catalog | Exterior storefront display of mannequins dressed in casual attire. |

---

## 5. Business Details Verified & Items for Attention

### Verified Authentic Business Details (Used on Site):
- **Brand Name**: SHIV MENS (physical store signboard: SHIV MENS)
- **Store Location**: Sai Vasanshah Square, Jaripatka, Nagpur, Maharashtra 440014, India
- **Primary Contact Number**: `+91 88300 12212`
- **Secondary Contact Number**: `+91 94228 08260`
- **WhatsApp**: `https://wa.me/918830012212`
- **Instagram Handle**: `@shivmens_nagpur` (`https://www.instagram.com/shivmens_nagpur`)
- **Facebook Profile**: `shivmens_nagpur` (`https://www.facebook.com/shivmens_nagpur`)

### Business Items Requiring Owner Attention (If Applicable):
1. **Domain Registration**: If setting up a custom domain (e.g., `shivmens.com` or `shivmensnagpur.in`), configure DNS records to point to your static hosting provider (e.g. Netlify, Vercel, GitHub Pages, or Hostinger).
2. **Google Business Profile Verification**: Claim and link your exact Google Business listing for "Shiv Mens Jaripatka" to get a direct review link and verified map pin.
3. **Email Address**: Currently all inquiries route directly to WhatsApp and phone calls. If you wish to display an official email (e.g. `info@shivmens.com`), simply add it in `js/config.js`.

---

## 6. How to Deploy to Static Hosting

### Deploying to Netlify / Vercel / GitHub Pages
- **Netlify**: Drag and drop the `shivmens` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages**: Push the repository to GitHub and enable GitHub Pages under Settings > Pages (Branch: `main`, Folder: `/root`).
- **Apache Web Server**: Copy all files to `/var/www/html/` or your virtual host directory.
