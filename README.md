# RANTAU - Ruang Temu Anak Perantau

Platform digital untuk mahasiswa perantau di Bali dalam mencari kost, teman sekamar, dan membangun komunitas.

## 🎯 Fitur Utama

- **Smart Kost Finder** - Cari kost dengan quiz interaktif atau mode eksplorasi
- **Roommate Matching** - Temukan teman sekamar yang cocok berdasarkan kepribadian
- **UMKM Kost Owners** - Koneksi dengan pemilik kost lokal
- **Forum Perantau** - Berbagi cerita dan tips dengan sesama mahasiswa
- **Split & Reminder** - Kelola tagihan bersama teman kost
- **Profil Personal** - Kelola akun dan lihat pencapaian

## 🎨 Teknologi

- **React + Vite** - Framework modern untuk performa optimal
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first styling dengan custom design system
- **Framer Motion** - Animasi smooth dan interaktif
- **React Leaflet** - Peta interaktif untuk lokasi kost
- **Shadcn UI** - Komponen UI yang dapat dikustomisasi

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📱 Navigasi Aplikasi

- **/** - Landing page dengan hero dan story carousel
- **/kost-finder** - Smart Kost Finder (Quiz & Explore Mode)
- **/roommate** - Roommate Matching System
- **/owner** - Dashboard UMKM Kost Owners
- **/forum** - Forum Komunitas Perantau
- **/split-reminder** - Patungan & Pengingat Tagihan
- **/profile** - Profil & Dashboard Personal

## 🎨 Design System

### Colors (HSL)
- **Primary**: `hsl(358 71% 42%)` - Maroon brand color
- **Secondary**: `hsl(0 0% 100%)` - Clean white
- **Accent**: `hsl(0 0% 96.5%)` - Light gray

### Typography
- **Headings**: Montserrat
- **Body**: Poppins

### Custom Utilities
- `gradient-primary` - Primary gradient background
- `shadow-card` - Card shadow
- `shadow-hover` - Hover state shadow
- `transition-smooth` - Smooth transitions

## 📂 Struktur Project

```
src/
├── assets/          # Images and static files
├── components/      # Reusable components
│   ├── ui/         # Shadcn UI components
│   ├── AnimatedLogo.tsx
│   ├── BottomNav.tsx
│   ├── KostCard.tsx
│   └── StoryCarousel.tsx
├── data/           # Mock data
│   └── mockData.ts
├── pages/          # Page components
│   ├── Landing.tsx
│   ├── KostFinder.tsx
│   ├── Roommate.tsx
│   ├── Forum.tsx
│   ├── Owner.tsx
│   ├── SplitReminder.tsx
│   └── Profile.tsx
└── App.tsx         # Main app with routing
```

## 💡 Fitur Teknis

- ✅ Mobile-first responsive design
- ✅ Bottom navigation dengan active indicator
- ✅ Framer Motion animations
- ✅ Interactive quiz systems
- ✅ Swipeable cards
- ✅ Confetti celebrations
- ✅ Carousel dengan autoplay
- ✅ Dark mode support (optional)

## 🔗 Links

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/403d842b-1cbb-4c23-9943-1c80793eb686) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/403d842b-1cbb-4c23-9943-1c80793eb686) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
