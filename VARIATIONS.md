# Portfolio Template - 3 Variations

This document describes 3 different variations/configurations of the portfolio template.

## Variation 1: Minimal Portfolio (Current)

**Navigation Items:**
- About
- Projects
- Contact

**Sections:**
1. Hero
2. About
3. Experience
4. Projects
5. Skills
6. Contact

**Best For:** Full portfolio with all details

---

## Variation 2: Simple Portfolio

**Navigation Items:**
- About
- Work
- Contact

**Sections:**
1. Hero
2. About
3. Work (Combined Projects + Experience)
4. Contact

**Best For:** Minimalist portfolio focusing on work

**To Implement:**
1. Update navigation in `components/navigation.tsx`:
   ```tsx
   const navItems = [
     { name: "About", href: "#about" },
     { name: "Work", href: "#work" },
     { name: "Contact", href: "#contact" },
   ]
   ```

2. Update `app/page.tsx`:
   ```tsx
   <Hero />
   <About />
   <Work /> {/* Combined component */}
   <Contact />
   ```

---

## Variation 3: Creative Portfolio

**Navigation Items:**
- Home
- Portfolio
- Connect

**Sections:**
1. Hero (as Home)
2. Portfolio (Combined About + Projects + Skills)
3. Connect (Contact)

**Best For:** Creative professionals, designers

**To Implement:**
1. Update navigation in `components/navigation.tsx`:
   ```tsx
   const navItems = [
     { name: "Home", href: "#home" },
     { name: "Portfolio", href: "#portfolio" },
     { name: "Connect", href: "#connect" },
   ]
   ```

2. Update `app/page.tsx`:
   ```tsx
   <Hero id="home" />
   <Portfolio /> {/* Combined component */}
   <Contact id="connect" />
   ```

---

## Quick Switch Guide

### To Switch Between Variations:

1. **Change Navigation Items:**
   - Edit `components/navigation.tsx`
   - Update `navItems` array

2. **Update Page Structure:**
   - Edit `app/page.tsx`
   - Add/remove/combine sections

3. **Update Section IDs:**
   - Match section `id` attributes with navigation `href` values
   - Example: `href="#about"` → `id="about"`

4. **Customize Section Content:**
   - Edit individual component files
   - Update titles, descriptions, and content

---

## Custom Variation

Create your own variation by:

1. Choosing 3 navigation items that represent your content
2. Organizing sections logically
3. Ensuring navigation links match section IDs
4. Customizing content to match your style

**Example Custom Navigation:**
```tsx
const navItems = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Hire Me", href: "#hire" },
]
```

---

**Note:** All variations maintain the same design system (black & white, progressive fonts) but differ in structure and navigation.

