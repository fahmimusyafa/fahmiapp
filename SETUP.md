# Portfolio Project Setup Guide

## What Was Created

A complete Next.js portfolio website based on your AGENTS.md and DESIGN.md specifications:

### Project Features
- ✅ Next.js 15 with TypeScript (strict mode)
- ✅ Tailwind CSS with design system tokens
- ✅ Static site export ready (no runtime server needed)
- ✅ Blueprint aesthetic (dark blue, monospace, technical)
- ✅ Fully responsive (mobile-first)
- ✅ Semantic HTML and accessibility
- ✅ Anti-slop implementation (no generic templates)

### File Structure

```
fahmiapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          Root layout with metadata
│   │   ├── page.tsx            Home page (composition of sections)
│   │   └── globals.css         Tailwind + component utilities
│   ├── components/
│   │   ├── Header.tsx          Navigation bar
│   │   ├── Hero.tsx            Hero section with CTA
│   │   ├── About.tsx           About section
│   │   ├── Projects.tsx        Projects showcase (zig-zag layout)
│   │   ├── Skills.tsx          Skills grouped by category
│   │   ├── Contact.tsx         Contact information and links
│   │   └── Footer.tsx          Footer
│   └── data/
│       └── portfolio.ts        All content (typed, editable)
├── tailwind.config.ts          Design tokens
├── next.config.ts              Static export config
├── tsconfig.json               TypeScript config
├── package.json                Dependencies
└── README.md                   Full documentation
```

## Setup Instructions

### 1. Install Dependencies
```bash
cd c:\laragon\www\fahmiapp
npm install
```

### 2. Update Portfolio Content
Edit `src/data/portfolio.ts` and replace TODO items:

- Email address (line ~63)
- GitHub URL (line ~64)
- LinkedIn URL (line ~65)
- Work experience details (if available)
- Project descriptions (verify accuracy and impact)

### 3. Start Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see your portfolio.

### 4. Type Check & Lint
```bash
npm run type-check    # TypeScript verification
npm run lint          # ESLint check
```

### 5. Build for Static Export
```bash
npm run build         # Outputs to out/ directory
```

## Customization

### Change Colors/Typography
Edit `tailwind.config.ts` to match your preferences. Design system tokens are defined there:
- Primary, secondary, accent colors
- Font family and sizes
- Spacing scale
- Max-width container

### Modify Components
Each component in `src/components/` is self-contained and can be edited independently:
- Update copy, styling, or structure
- TypeScript ensures type safety
- No props drilling needed for portfolio sections

### Adjust Layout
- Hero section: Split screen layout (text + visual placeholder)
- Projects: Zig-zag alternating layout with impact callout
- Skills: 2-column grid by category
- All sections collapse to single column on mobile

## Anti-Slop Practices Applied

✅ No AI template patterns:
  - No generic hero gradients or glow effects
  - No emoji placeholders
  - No "passionate developer" filler text
  - No progress bars or fake statistics

✅ Content is verifiable:
  - All projects require real project description
  - Technologies must match actual stack used
  - Impact statements are factual, not fabricated
  - TODO placeholders are clear and explicit

✅ Code quality:
  - Comments only explain non-obvious logic
  - TypeScript strict mode enabled
  - ESLint configured
  - Semantic HTML throughout
  - Accessibility built-in (keyboard nav, focus states)

## Deployment

The site is ready for static hosting:

1. **Vercel** (recommended for Next.js)
   - Connect your GitHub repo
   - Auto-deploys on push
   - Free hosting for static sites

2. **Netlify**
   - Deploy `out/` directory
   - Automatic builds on push

3. **GitHub Pages**
   - Deploy `out/` to `gh-pages` branch
   - Point custom domain to GitHub Pages

## Verification Checklist

Before considering the project complete:

- [ ] All TODO items in `portfolio.ts` are updated
- [ ] Project descriptions are accurate and verified
- [ ] Email and social links are valid
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` shows no issues
- [ ] `npm run type-check` passes
- [ ] Site looks good on mobile (< 768px)
- [ ] All links are functional (hover states work)
- [ ] No placeholder text remains visible

## Notes

- Portfolio content is centralized in `src/data/portfolio.ts` for easy updates
- Static export is configured; do not add server-only features
- All styling uses design tokens from DESIGN.md
- Comments are minimal and informative (anti-slop code hygiene)
- The project is 100% type-safe with strict TypeScript

## Support Files

- `AGENTS.md` - Project vision and requirements
- `DESIGN.md` - Visual design system and blueprint aesthetics
- `README.md` - Full project documentation
- This file - Setup and customization guide
