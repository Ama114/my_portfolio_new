# How to Use the 3 Variations

This guide shows you how to switch between the 3 different navigation variations.

## Current Setup (Variation 1)

**File:** `components/navigation.tsx`
**Navigation Items:** About, Projects, Contact

---

## Switch to Variation 2: Simple Portfolio

**Navigation Items:** About, Work, Contact

### Steps:

1. **Backup current navigation:**
   ```bash
   cp components/navigation.tsx components/navigation-variation-1.tsx
   ```

2. **Use Variation 2:**
   ```bash
   cp components/navigation-variation-2.tsx components/navigation.tsx
   ```

3. **Update page structure** in `app/page.tsx`:
   ```tsx
   import Hero from "@/components/hero"
   import About from "@/components/about"
   import Work from "@/components/work" // Combined component
   import Contact from "@/components/contact"
   import Navigation from "@/components/navigation"

   export default function Home() {
     return (
       <div className="min-h-screen">
         <Navigation />
         <main>
           <Hero />
           <About />
           <Work /> {/* Combined Projects + Experience */}
           <Contact />
         </main>
       </div>
     )
   }
   ```

4. **Update section IDs** to match navigation:
   - Work section: `id="work"`

---

## Switch to Variation 3: Creative Portfolio

**Navigation Items:** Home, Portfolio, Connect

### Steps:

1. **Use Variation 3:**
   ```bash
   cp components/navigation-variation-3.tsx components/navigation.tsx
   ```

2. **Update page structure** in `app/page.tsx`:
   ```tsx
   import Hero from "@/components/hero"
   import Portfolio from "@/components/portfolio" // Combined component
   import Contact from "@/components/contact"
   import Navigation from "@/components/navigation"

   export default function Home() {
     return (
       <div className="min-h-screen">
         <Navigation />
         <main>
           <Hero id="home" />
           <Portfolio id="portfolio" /> {/* Combined About + Projects + Skills */}
           <Contact id="connect" />
         </main>
       </div>
     )
   }
   ```

3. **Update section IDs** to match navigation:
   - Hero section: `id="home"`
   - Portfolio section: `id="portfolio"`
   - Contact section: `id="connect"`

---

## Quick Customization

### To Create Your Own Variation:

1. **Edit `components/navigation.tsx`:**
   ```tsx
   const navItems = [
     { name: "Your Item 1", href: "#section1" },
     { name: "Your Item 2", href: "#section2" },
     { name: "Your Item 3", href: "#section3" },
   ]
   ```

2. **Update section IDs** in your components to match the `href` values

3. **Update `app/page.tsx`** to include only the sections you need

---

## Tips

- Always keep 3 navigation items
- Ensure section IDs match navigation hrefs (without the `#`)
- Test navigation on mobile and desktop
- Update Resume button link if needed

---

## File Structure

```
components/
├── navigation.tsx              # Current active navigation
├── navigation-variation-1.tsx  # Variation 1 (About, Projects, Contact)
├── navigation-variation-2.tsx  # Variation 2 (About, Work, Contact)
└── navigation-variation-3.tsx  # Variation 3 (Home, Portfolio, Connect)
```

---

**Remember:** Only `components/navigation.tsx` is used by the app. The variation files are templates you can copy from.

