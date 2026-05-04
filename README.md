# 👑 Mcsteeze

A bold, royal-themed restaurant & lounge website built for **Mcsteeze** — serving up Banku & Tilapia, Jollof Rice, Fried Rice, and Shawarma with a side of late-night vibes.

---

## ✨ Features

- **Hero** — Cinematic restaurant interior with gold accents
- **About** — The story behind Mcsteeze
- **Menu** — Signature dishes (Banku & Tilapia, Jollof, Fried Rice, Shawarma)
- **Gallery** — A taste of the vibe
- **Reservation** — Book a table directly via WhatsApp
- **Contact** — Find us, call us, message us
- **Floating WhatsApp button** — One tap to chat

## 🛠 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with a custom royal-gold design system
- **shadcn/ui** components
- **Zod** for form validation
- **Sonner** for toast notifications
- **lucide-react** icons
- Fonts: **Cinzel** (display) + **Inter** (body)

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build
```

The dev server runs on **http://localhost:8080**.

## 📂 Project Structure

```
src/
├── assets/          # Images & logo
├── components/      # Hero, About, Menu, Gallery, Reservation, Contact, Footer…
│   └── ui/          # shadcn/ui primitives
├── pages/           # Index, NotFound
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── index.css        # Design tokens & global styles
```

## 🎨 Design System

All colors live as HSL semantic tokens in `src/index.css` and are exposed via `tailwind.config.ts`:

- `--background`, `--foreground`, `--card`, `--border`
- `--gold`, `--gold-deep`, `--amber-glow`, `--cream`
- Gradients: `--gradient-gold`, `--gradient-dark`, `--gradient-radial-gold`
- Shadows: `--shadow-gold`, `--shadow-glow`, `--shadow-deep`

Never hardcode colors in components — always use the tokens.

## 📱 Reservations

The reservation form validates input with Zod and opens WhatsApp with a prefilled booking message sent to `+233 24 144 7429`.

## 📦 Download / Export

To get a ZIP of the full project, connect to **GitHub** via the Connectors panel, then use **Code → Download ZIP** on the repo page.

---

Built with ❤️ on [Lovable](https://lovable.dev).
