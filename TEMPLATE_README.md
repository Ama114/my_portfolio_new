# Portfolio Template - 3 Navigation Items

This is a customizable portfolio template with a clean black & white design and progressive font sizing.

## 🎨 Features

- **Black & White Color Scheme** - Clean, minimalist design
- **Progressive Font Sizing** - 3 levels of typography hierarchy
- **3 Navigation Items** - Simple, focused navigation
- **Dark/Light Mode** - Theme toggle support
- **Responsive Design** - Mobile-first approach
- **Modern Animations** - Smooth transitions and effects

## 📁 Project Structure

```
my_portfolio_new/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles & color scheme
├── components/
│   ├── navigation.tsx       # Navigation bar (3 items)
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About section
│   ├── experience.tsx        # Experience section
│   ├── projects.tsx         # Projects section
│   ├── skills.tsx           # Skills section
│   ├── contact.tsx          # Contact section
│   └── theme-toggle.tsx     # Dark/Light mode toggle
└── public/                   # Static assets
```

## 🚀 Quick Start

1. **Customize Navigation Items**
   Edit `components/navigation.tsx`:
   ```tsx
   const navItems = [
     { name: "About", href: "#about" },
     { name: "Projects", href: "#projects" },
     { name: "Contact", href: "#contact" },
   ]
   ```

2. **Update Your Information**
   - Edit `components/hero.tsx` - Name, title, description
   - Edit `components/about.tsx` - About content
   - Edit `components/experience.tsx` - Experience/Education
   - Edit `components/projects.tsx` - Your projects
   - Edit `components/skills.tsx` - Skills & technologies
   - Edit `components/contact.tsx` - Contact information

3. **Customize Colors**
   Edit `app/globals.css`:
   - Light mode colors in `:root`
   - Dark mode colors in `.dark`

4. **Add Your Images**
   - Profile image: `public/images/profile.jpg`
   - Project images: Update paths in `components/projects.tsx`

## 🎯 Navigation Configuration

The template uses **3 navigation items** by default:
- **About** - Links to about section
- **Projects** - Links to projects section  
- **Contact** - Links to contact section

You can customize these in `components/navigation.tsx`.

## 📐 Font Size Hierarchy

**Level 1 - Largest (Hero/Headings):**
- Hero name: `text-6xl` → `text-9xl` → `text-[10rem]`
- Section titles: `text-4xl md:text-6xl lg:text-7xl`

**Level 2 - Medium (Subheadings/Content):**
- Subheadings: `text-3xl md:text-4xl lg:text-5xl`
- Body text: `text-lg md:text-xl lg:text-2xl`

**Level 3 - Smaller (Details/Labels):**
- Labels: `text-base md:text-lg`
- Navigation: `text-lg md:text-xl`

## 🎨 Color Scheme

**Light Mode:**
- Background: White
- Text: Black
- Accents: Black

**Dark Mode:**
- Background: Black
- Text: White
- Accents: White

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Customization Guide

### Change Logo/Brand Name
Edit `components/navigation.tsx`:
```tsx
<a href="/" className="...">YOUR_NAME</a>
```

### Modify Sections
Each section is a separate component in `components/`:
- Add/remove sections in `app/page.tsx`
- Customize content in individual component files

### Adjust Font Sizes
All font sizes use Tailwind classes. Search for `text-` classes and adjust as needed.

## 📦 Dependencies

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- next-themes (theme switching)

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

3. Deploy to Vercel/Netlify:
   - Connect your repository
   - Deploy automatically on push

## 📝 License

This template is free to use and modify for personal and commercial projects.

---

**Made with ❤️ - Customize and make it yours!**

