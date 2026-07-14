# 🚀 Portfolio — Your Name

A dark-themed, interactive developer portfolio built with vanilla HTML, CSS & JavaScript.

## ✨ Features

- **3D animated background** – Three.js particle field + wireframe objects with mouse parallax
- **Custom cursor** – dot + lagging ring + ambient glow
- **Interactive terminal** – type `help` in the hero terminal (supports 12+ commands, tab-autocomplete, arrow-key history)
- **Scroll reveal** – sections animate in as you scroll
- **Live map** – Leaflet map with a pulsing cyan location marker
- **Active nav highlight** – current section glows in the nav bar
- **Scanline overlay** – subtle CRT aesthetic

## 📁 Project Structure

```
portfolio/
├── index.html            ← Main HTML (semantic, no inline CSS)
├── css/
│   └── style.css         ← All styles (tokens, layout, components)
├── js/
│   ├── canvas.js         ← Three.js 3-D background
│   ├── cursor.js         ← Custom cursor behaviour
│   ├── map.js            ← Leaflet contact map
│   ├── terminal.js       ← Interactive CLI terminal
│   └── scroll.js         ← Smooth scroll, nav highlight, reveal
└── assets/
    └── images/
        └── profile.jpg   ← Replace with your photo
```

## 🛠️ Getting Started

1. **Clone / download** this folder.
2. Drop your photo into `assets/images/` and name it `profile.jpg`.
3. Open `index.html` in any modern browser — no build step required.

### Customisation checklist

| File | What to change |
|------|----------------|
| `index.html` | Name, bio, projects, education, experience, links |
| `js/terminal.js` | Terminal command responses (`about`, `skills`, `projects`, …) |
| `js/map.js` | `LAT` / `LNG` constants for your city |
| `css/style.css` | `--cyan`, `--blue`, `--dark` tokens to retheme |

## 📦 Dependencies (CDN — no install)

| Library | Version | Purpose |
|---------|---------|---------|
| [Three.js](https://threejs.org/) | r128 | 3-D background |
| [Leaflet](https://leafletjs.com/) | 1.9.4 | Contact map |
| [Google Fonts](https://fonts.google.com/) | — | Syne + Space Mono |

## 📄 License

MIT — free to use and customise.



gJS5Igp0mobnLuOp1

service_usl8vnd

template_84ja6bf