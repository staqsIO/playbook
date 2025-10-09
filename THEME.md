# Theme Configuration

## Dark Mode (Default)

Your application is now configured to use **dark mode by default**.

### Current Setup

- **Default Theme**: Dark mode
- **Color Scheme**: Modern dark blue/slate palette
- **Primary Color**: Bright blue accent (#5B9FED)
- **Background**: Deep slate (#080C14)
- **Cards/Surfaces**: Slightly lighter slate (#0C1119)

### Configuration Files

#### 1. Layout (`src/app/layout.tsx`)
The HTML element has `className="dark"` applied:
```tsx
<html lang="en" className="dark">
```

#### 2. Global Styles (`src/app/globals.css`)
Dark mode colors are defined using HSL values:
```css
.dark {
  --background: 222 47% 4%;      /* Deep slate */
  --foreground: 210 40% 98%;     /* Near white text */
  --primary: 217 91% 60%;        /* Bright blue */
  --card: 222 47% 6%;            /* Card background */
  --border: 222 47% 11%;         /* Subtle borders */
  /* ... and more */
}
```

### Using the Theme

All components automatically use dark mode colors through Tailwind's CSS variables:

```tsx
// These classes automatically adapt to dark mode
<div className="bg-background text-foreground">
  <div className="bg-card border border-border">
    <button className="bg-primary text-primary-foreground">
      Button
    </button>
  </div>
</div>
```

### Theme Toggle Component

A theme toggle component is available at `src/components/ui/theme-toggle.tsx`:

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Add anywhere in your app
<ThemeToggle />
```

### Custom Hook

Use the `useTheme` hook for programmatic theme control:

```tsx
import { useTheme } from "@/hooks/use-theme";

function MyComponent() {
  const { theme, toggleTheme, isDark, isLight } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}
```

### Color Reference

#### Dark Mode Colors
- **Background**: Deep slate with blue undertones
- **Cards**: Slightly elevated surface
- **Primary**: Bright blue for CTAs and accents
- **Text**: High contrast white/off-white
- **Muted**: Lower contrast text for secondary content
- **Borders**: Subtle separation between elements

#### Light Mode Colors (Available)
The light mode palette is still configured and can be activated by:
1. Removing `className="dark"` from the HTML element
2. Using the `ThemeToggle` component
3. Using the `useTheme` hook

### Customizing Colors

To modify the dark mode colors, edit `src/app/globals.css`:

```css
.dark {
  --primary: 217 91% 60%;  /* Change this line */
}
```

Colors use the HSL format: `hue saturation% lightness%`

### Best Practices

1. **Use CSS Variables**: Always use Tailwind classes that reference CSS variables:
   - ✅ `bg-background`, `text-foreground`, `bg-primary`
   - ❌ `bg-slate-900`, `text-white`, `bg-blue-500`

2. **Test Both Modes**: Even though dark is default, ensure components look good in light mode too

3. **Semantic Colors**: Use semantic color names:
   - `primary` for main actions
   - `secondary` for less important actions
   - `muted` for disabled/secondary text
   - `destructive` for dangerous actions

4. **Border Consistency**: Use `border-border` for consistent borders across themes

### Making Theme Persistent

To save user preference across sessions, add to `use-theme.ts`:

```tsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

// On load
const savedTheme = localStorage.getItem("theme") as Theme;
```

### Dark Mode Class Strategy

The project uses **class-based** dark mode (not media query):
- Configured in `tailwind.config.ts`: `darkMode: ["class"]`
- Controlled via the `dark` class on the HTML element
- Allows programmatic control without respecting OS preferences

To respect OS preferences instead, change to:
```ts
darkMode: ["media"]
```

