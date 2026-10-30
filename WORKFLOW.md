# Development Workflow

## Daily Development

### Starting Work
```bash
npm run dev
```
Hot reload enabled. Changes to components, styles, and content update instantly.

### Making Changes

#### Update Portfolio Content
1. Edit `src/data/portfolio.ts`
2. Add/modify projects, skills, or contact info
3. Changes appear immediately on page refresh

#### Modify Component Layout
1. Edit component in `src/components/`
2. TypeScript highlights type mismatches
3. Test at different screen sizes (mobile, tablet, desktop)

#### Adjust Colors/Fonts
1. Edit `tailwind.config.ts`
2. Changes apply everywhere using those tokens
3. No need to hunt through components

### Before Committing

```bash
npm run type-check    # Catch TypeScript errors
npm run lint          # Check code style
npm run build         # Verify static export works
```

All should pass with no errors.

## Common Tasks

### Add a New Project
```typescript
// In src/data/portfolio.ts, add to projects array:
{
  id: "4",
  name: "Project Name",
  summary: "One-line summary",
  description: "Detailed description of what was built and why",
  role: "Your role",
  technologies: ["Tech1", "Tech2"],
  impact: "Measurable outcome or result",
}
```

### Update Contact Information
```typescript
// In src/data/portfolio.ts:
export const contact = {
  email: "your-email@example.com",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
};
```

### Add New Skill Category
```typescript
// In src/data/portfolio.ts skills array:
{
  category: "DevOps",
  items: ["Kubernetes", "AWS", "CI/CD"],
}
```

### Change Design Colors
```typescript
// In tailwind.config.ts theme.extend.colors:
colors: {
  primary: "#0b1623",        // Background
  secondary: "#f0f0f0",      // Text
  accent: "#00ff9d",         // Highlights
  // ... add or modify colors
}
```

### Update Typography
```typescript
// In tailwind.config.ts theme.extend:
fontFamily: {
  mono: ["JetBrains Mono", "monospace"],
}
fontSize: {
  hero: "clamp(2.5rem, 5vw, 4rem)",
}
```

## Responsive Testing

Design is mobile-first. Test at key breakpoints:

- **Mobile:** < 768px (md breakpoint)
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Use browser DevTools to simulate different screen sizes.

## TypeScript & Linting

### Common Errors

**Property does not exist on type**
- Ensure you're using correct property names from `portfolio.ts` types
- Check `src/data/portfolio.ts` for interface definitions

**Type mismatch in component**
- Verify component props match what's being passed
- Import types from `portfolio.ts` if needed

### Fixing Issues

```bash
# Check what errors exist
npm run type-check

# Auto-fix some linting issues
npx eslint --fix src/
```

## Performance

### Static Export Benefits
- No JavaScript runtime needed
- Can deploy to any static host
- Instant page load (no server roundtrip)
- SEO-friendly (all content in HTML)

### What's NOT Allowed
- ❌ `fetch()` without `revalidate` (static export)
- ❌ API routes (`app/api/`)
- ❌ Real-time features (WebSocket, polling)
- ❌ Database queries
- ❌ Server-side authentication

## Deployment Checklist

Before deploying:

1. [ ] All TODO items removed or completed
2. [ ] `npm run build` succeeds
3. [ ] No `npm run type-check` errors
4. [ ] No `npm run lint` errors
5. [ ] Tested on mobile (< 768px)
6. [ ] All links verified (internal + external)
7. [ ] Metadata accurate (title, description)
8. [ ] No console errors in DevTools

## Building & Exporting

```bash
# Build for static export
npm run build

# Output directory: out/

# Test the build locally
cd out/
python -m http.server 3000   # or your preferred local server
```

Then visit http://localhost:3000 to test the production build.

## Troubleshooting

### "Module not found" error
```bash
npm install    # Re-install dependencies
npm run dev    # Restart dev server
```

### Changes not appearing
1. Save the file
2. Check browser console for errors
3. Hard refresh (Ctrl+Shift+R)
4. Clear `.next/` cache if persists: `rm -rf .next && npm run dev`

### Build fails
```bash
npm run type-check   # Find TypeScript errors
npm run build        # See full build error message
```

### Tailwind classes not applying
- Verify file is in `content` array in `tailwind.config.ts`
- Check class name matches Tailwind syntax
- Rebuild CSS: `npm run build`

## Notes

- Keep `src/data/portfolio.ts` as your single source of truth for content
- Components should stay presentational; logic belongs in `portfolio.ts`
- All styling uses Tailwind tokens; avoid `!important` or inline styles
- Comments should explain "why", not "what" (anti-slop code)
- Never commit node_modules, .next, out directories
