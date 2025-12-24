# Portfolio Color Palette - Color Codes

## 3-Color Gradient Palette

### Light Mode Colors (`:root`)

#### Gradient Color 1 - Purple
- **OKLCH**: `oklch(0.55 0.25 280)`
- **Usage**: Primary color, main gradient start
- **Approx HEX**: ~#7C3AED (Purple)

#### Gradient Color 2 - Cyan
- **OKLCH**: `oklch(0.60 0.22 200)`
- **Usage**: Accent color, middle gradient
- **Approx HEX**: ~#06B6D4 (Cyan)

#### Gradient Color 3 - Pink
- **OKLCH**: `oklch(0.58 0.24 340)`
- **Usage**: Secondary accent, gradient end
- **Approx HEX**: ~#EC4899 (Pink)

---

### Dark Mode Colors (`.dark`)

#### Gradient Color 1 - Purple (Brighter)
- **OKLCH**: `oklch(0.75 0.28 280)`
- **Usage**: Primary color for dark mode
- **Approx HEX**: ~#A78BFA (Lighter Purple)

#### Gradient Color 2 - Cyan (Brighter)
- **OKLCH**: `oklch(0.80 0.25 200)`
- **Usage**: Accent color for dark mode
- **Approx HEX**: ~#22D3EE (Brighter Cyan)

#### Gradient Color 3 - Pink (Brighter)
- **OKLCH**: `oklch(0.78 0.25 340)`
- **Usage**: Secondary accent for dark mode
- **Approx HEX**: ~#F472B6 (Brighter Pink)

---

## CSS Variable Usage

### Light Mode
```css
--gradient-1: oklch(0.55 0.25 280); /* Purple */
--gradient-2: oklch(0.60 0.22 200); /* Cyan */
--gradient-3: oklch(0.58 0.24 340); /* Pink */
--primary: oklch(0.55 0.25 280);    /* Same as gradient-1 */
--accent: oklch(0.60 0.22 200);     /* Same as gradient-2 */
```

### Dark Mode
```css
--gradient-1: oklch(0.75 0.28 280); /* Brighter Purple */
--gradient-2: oklch(0.80 0.25 200); /* Brighter Cyan */
--gradient-3: oklch(0.78 0.25 340); /* Brighter Pink */
--primary: var(--gradient-1);       /* Uses gradient-1 */
--accent: var(--gradient-2);        /* Uses gradient-2 */
```

---

## OKLCH Color Format Explanation

OKLCH format: `oklch(lightness chroma hue)`

- **Lightness (L)**: 0.0 = black, 1.0 = white
  - Light mode: 0.55-0.60 (darker for contrast)
  - Dark mode: 0.75-0.80 (brighter for visibility)

- **Chroma (C)**: 0.0 = gray, higher = more saturated
  - Range: 0.22-0.28 (vibrant but not overwhelming)

- **Hue (H)**: Color angle in degrees
  - 280° = Purple
  - 200° = Cyan
  - 340° = Pink

---

## Gradient Combinations

### Full Gradient (All 3 Colors)
```css
background: linear-gradient(135deg, 
  var(--gradient-1),  /* Purple */
  var(--gradient-2),  /* Cyan */
  var(--gradient-3)   /* Pink */
);
```

### Two-Color Gradients
```css
/* Purple to Cyan */
background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));

/* Cyan to Pink */
background: linear-gradient(135deg, var(--gradient-2), var(--gradient-3));

/* Purple to Pink */
background: linear-gradient(135deg, var(--gradient-1), var(--gradient-3));
```

---

## Quick Reference

| Color | Light Mode OKLCH | Dark Mode OKLCH | Approx HEX (Light) | Approx HEX (Dark) |
|-------|------------------|-----------------|---------------------|-------------------|
| Purple | `oklch(0.55 0.25 280)` | `oklch(0.75 0.28 280)` | #7C3AED | #A78BFA |
| Cyan | `oklch(0.60 0.22 200)` | `oklch(0.80 0.25 200)` | #06B6D4 | #22D3EE |
| Pink | `oklch(0.58 0.24 340)` | `oklch(0.78 0.25 340)` | #EC4899 | #F472B6 |

