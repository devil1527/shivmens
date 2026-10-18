# SHIV MENS — Premium Men's Fashion Website

A complete, high-end, production-ready static website built for **SHIV MENS** (Shiv Mens), an independent men's fashion boutique located at Sai Vasanshah Square, Jaripatka, Nagpur, Maharashtra, India.

---

## 1. Design System & Theme: Light Royal Blue

Following client art-direction, the website features a **crisp light luxury theme with deep royal blue and vibrant sapphire accents**, tailored to prestigious menswear aesthetics:

- **Background Canvas**: Ultra-clean `#F8FAFC` off-white with `#FFFFFF` elevated cards and `#F1F5F9` surfaces.
- **Brand Navy / Royal Blue**: `#0A192F` and `#0F2C59` — deep, classic menswear luxury (Ralph Lauren / Brooks Brothers tone).
- **Vibrant Accent Blue**: `#2563EB` / `#1D4ED8` — modern sapphire for active filters, navigation indicators, and primary CTAs.
- **Ice-Blue Tints**: `#EFF6FF` / `#DBEAFE` for category tags, pill highlights, and hover cards.
- **Typography**: `Cinzel` (authoritative serif displays), `Outfit` (modern uppercase labels), and `Inter` (refined body reading).
- **Interactive Lightbox Quick View**: Modal preview for full clothing details with instant WhatsApp inquiry pre-filled with the exact garment name.

---

## 2. Quick Start & Local Preview

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

## 3. Project Directory Structure

```
shivmens/
├── index.html              # Homepage (Hero Video, Signature Line, 6 Wardrobe Edits, Featured Pieces, Instagram Strip)
├── about.html              # Brand Story, Philosophy, Store Atelier & Live Video Demo
├── collection.html         # Interactive Catalog (Filterable by 5 Departments with 33 Real Pieces & QuickView Modal)
├── contact.html            # Verified Store Details, Live WhatsApp Builder & Location Map
├── 404.html                # Custom 404 Error Page
├── README.md               # Documentation & Asset Inventory
├── css/
│   ├── style.css           # Light Royal Blue Design System, Typography & Shadows
│   └── responsive.css      # Full Mobile, Tablet & Desktop Media Queries
├── js/
│   ├── config.js           # Centralized Business Data (Phone, Address, WhatsApp, Social URLs)
│   ├── main.js             # Sticky Nav, Mobile Drawer, Video Controls & Dynamic Links
│   └── collection.js       # Filter Engine, Lightbox Modal & WhatsApp Message Builder
└── assets/
    ├── brand/              # Logos (SVG), Monogram Favicon (SVG), Official Brand Poster
    ├── icons/              # Self-contained SVG Icons (WhatsApp, Instagram, Facebook, etc.)
    ├── images/
    │   ├── collection/     # 33 Real Boutique Products (Kurtas, Shirts, T-Shirts, Denim, Cargos)
    │   ├── editorial/      # High-Resolution Flat Lays & Catalog Shoot Posters
    │   ├── hero/           # Hero Background Poster & Model Featured Cuts
    │   └── social/         # Instagram Lookbook Feed Grid
    └── videos/
        ├── hero-bg.mp4     # Web-Optimized Background Loop
        ├── denim-fit-reel.mp4
        ├── cargo-fit-reel.mp4
        ├── ethnic-kurta-reel.mp4
        ├── street-display.mp4
        └── posters/        # Video Thumbnail Fallback Posters
```

---

## 4. Complete Apparel Inventory (33 Real Boutique Items)

All media shared by the boutique—including the 4 video walkthroughs and high-res photography—have been processed, cropped, and organized into 33 dedicated apparel pieces:

| Department | Product Title | Source Media | Image Path |
|---|---|---|---|
| **Festive Kurtas** | Royal Maroon Silk Kurta with Stole | WhatsApp Video 4.44.08 PM (sec 14) | `assets/images/collection/ethnic-festive-kurta-stole.jpg` |
| **Festive Kurtas** | White Royal Embroidered Kurta Set | WhatsApp Video 4.44.08 PM (sec 6) | `assets/images/collection/ethnic-embroidered-white-kurta.jpg` |
| **Festive Kurtas** | Vibrant Haldi Yellow Festive Kurta | WhatsApp Video 4.44.08 PM (sec 18) | `assets/images/collection/ethnic-haldi-yellow-kurta.jpg` |
| **Festive Kurtas** | Olive Green Botanical Embroidered Kurta | WhatsApp Video 4.44.08 PM (sec 24) | `assets/images/collection/ethnic-embroidered-olive-kurta.jpg` |
| **Festive Kurtas** | Lavender Pastel Embroidered Kurta | WhatsApp Video 4.44.08 PM (sec 30) | `assets/images/collection/ethnic-lavender-kurta.jpg` |
| **Festive Kurtas** | Wine Magenta Sequin Festive Kurta | WhatsApp Video 4.44.08 PM (sec 36) | `assets/images/collection/ethnic-wine-sequin-kurta.jpg` |
| **Festive Kurtas** | Blush Peach Resham Embroidered Kurta | WhatsApp Video 4.44.08 PM (sec 43) | `assets/images/collection/ethnic-peach-embroidered-kurta.jpg` |
| **Festive Kurtas** | Royal Blue Heritage Printed Kurta | WhatsApp Video 4.44.08 PM (sec 48) | `assets/images/collection/ethnic-royal-blue-print-kurta.jpg` |
| **Festive Kurtas** | Pastel Floral Motif Designer Kurta | WhatsApp Video 4.44.08 PM (sec 48) | `assets/images/collection/ethnic-floral-festival-kurta.jpg` |
| **Festive Kurtas** | Turquoise Sky Blue Silk Kurta | WhatsApp Video 4.44.08 PM (sec 43) | `assets/images/collection/ethnic-turquoise-silk-kurta.jpg` |
| **Festive Kurtas** | Black Embroidered Kurta Set | Store Shoot / Video Frame | `assets/images/collection/ethnic-embroidered-black-kurta.jpg` |
| **Shirts & Co-Ords** | Cookyss Charcoal Structured Shirt | WhatsApp Image 4.41.51 PM | `assets/images/collection/premium-textured-shirt.jpg` |
| **Shirts & Co-Ords** | Black & Charcoal Striped Casual Shirt | WhatsApp Video 4.44.43 PM (sec 9) | `assets/images/collection/shirt-charcoal-striped-casual.jpg` |
| **Shirts & Co-Ords** | Sand Textured Linen Co-Ord Set | WhatsApp Image 4.42.35 PM | `assets/images/collection/linen-sand-coord-shirt.jpg` |
| **Shirts & Co-Ords** | Earth Brown Mocha Linen Shirt | WhatsApp Image 4.42.35 PM | `assets/images/collection/linen-earth-brown-shirt.jpg` |
| **Shirts & Co-Ords** | Olive Moss Green Linen Shirt | WhatsApp Image 4.42.35 PM | `assets/images/collection/linen-olive-green-shirt.jpg` |
| **Shirts & Co-Ords** | Complete 3-Piece Linen Co-Ord Edit | WhatsApp Image 4.42.35 PM | `assets/images/collection/linen-co-ord-sets.jpg` |
| **T-Shirts & Streetwear** | Shark Graphic Heavyweight Streetwear Tee | WhatsApp Image 4.41.04 PM | `assets/images/collection/streetwear-shark-tshirt.jpg` |
| **T-Shirts & Streetwear** | "DECIDE" Distressed Acid-Wash Tee | WhatsApp Video 4.42.36 PM (sec 0) | `assets/images/collection/streetwear-decide-acidwash-tee.jpg` |
| **T-Shirts & Streetwear** | "CREW 38" Neutral Sand Graphic Tee | WhatsApp Video 4.42.36 PM (sec 9) | `assets/images/collection/streetwear-crew38-beige-tee.jpg` |
| **T-Shirts & Streetwear** | Burgundy Stag Line-Art Streetwear Tee | WhatsApp Video 4.42.36 PM (sec 9) | `assets/images/collection/streetwear-burgundy-stag-tee.jpg` |
| **T-Shirts & Streetwear** | Olive Green Horse Line-Art Graphic Tee | WhatsApp Video 4.42.36 PM (sec 6) | `assets/images/collection/streetwear-olive-horse-tee.jpg` |
| **T-Shirts & Streetwear** | Donald Duck Lavender Streetwear Tee | WhatsApp Video 4.43.31 PM (sec 12) | `assets/images/collection/streetwear-donald-lavender-tee.jpg` |
| **Denim & Jeans** | Bluesmith Comfort-Stretch Denim (Front) | WhatsApp Image 4.42.36 PM (1) | `assets/images/collection/denim-classic-front.jpg` |
| **Denim & Jeans** | Bluesmith Denim (Rear Yoke & Pocket) | WhatsApp Image 4.42.36 PM (1) | `assets/images/collection/denim-classic-back.jpg` |
| **Denim & Jeans** | Light Wash Streetwear Denim | WhatsApp Image 4.42.36 PM | `assets/images/collection/denim-light-front.jpg` |
| **Denim & Jeans** | Sand Khaki Chino Denim | WhatsApp Image 4.46.32 PM | `assets/images/collection/denim-khaki-chino.jpg` |
| **Denim & Jeans** | Indigo Crest Monogram Denim | WhatsApp Image 4.46.32 PM | `assets/images/collection/denim-crest-blue.jpg` |
| **Denim & Jeans** | AB Raw Black Tailored Denim | WhatsApp Image 4.46.32 PM | `assets/images/collection/denim-ab-black.jpg` |
| **Denim & Jeans** | Vintage Mid-Blue Washed Denim | WhatsApp Image 4.46.32 PM | `assets/images/collection/denim-washed-redtag.jpg` |
| **Denim & Jeans** | Deep Indigo Flap-Pocket Designer Denim | WhatsApp Video 4.44.43 PM (sec 18) | `assets/images/collection/denim-flap-pocket-designer.jpg` |
| **Cargos & Trousers** | White Multi-Pocket Utility Cargo | WhatsApp Video 4.43.31 PM (sec 12) | `assets/images/collection/cargo-utility-white.jpg` |
| **Cargos & Trousers** | Acid-Wash Grey Denim Cargo Joggers | WhatsApp Video 4.43.31 PM (sec 21) | `assets/images/collection/cargo-acidwash-grey-jogger.jpg` |

---

## 5. Centralized Business Configuration

Maintained in **`js/config.js`**:

- **Brand Name**: SHIV MENS
- **Store Location**: Sai Vasanshah Square, Jaripatka, Nagpur, Maharashtra 440014, India
- **Primary Phone**: `+91 88300 12212`
- **Secondary Phone**: `+91 94228 08260`
- **WhatsApp**: `https://wa.me/918830012212`
- **Instagram Handle**: `@shivmens_nagpur` (`https://www.instagram.com/shivmens_nagpur`)
- **Facebook Profile**: `shivmens_nagpur` (`https://www.facebook.com/shivmens_nagpur`)
