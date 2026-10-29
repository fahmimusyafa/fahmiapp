# Fahmi's Portfolio

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Blueprint aesthetic, technically precise, static site export ready.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build & Export

```bash
# Build for static export
npm run build

# Output goes to the `out/` directory
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── portfolio.ts  # Content and configuration
```

## Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts`:

- **Projects:** Add/modify projects, technologies, and impact metrics
- **Skills:** Update skill categories and items grouped by role
- **Experience:** Add work history (currently marked as TODO)
- **Contact:** Update email and social links

### Update Design

Edit `tailwind.config.ts` to adjust colors, fonts, or spacing according to `DESIGN.md`.

## Features

- **TypeScript:** Full type safety across the codebase
- **Static Export:** Deploy as a static site (Netlify, GitHub Pages, Vercel)
- **Responsive Design:** Mobile-first, tested on all screen sizes
- **Blueprint Aesthetic:** Technical, engineered visual language
- **Semantic HTML:** Accessibility-first markup
- **No Runtime Server:** Pure static generation

## Deployment

The site is configured for static export. Deploy the `out/` directory to any static host:

- **Vercel:** Connect repo, deploy automatically
- **Netlify:** Drag and drop the `out/` folder
- **GitHub Pages:** Build and push `out/` to `gh-pages` branch

## TODO

- [ ] Add real email address to contact data
- [ ] Add GitHub and LinkedIn profile URLs
- [ ] Update/verify all project descriptions and technologies
- [ ] Add work experience (if available)
- [ ] Customize hero section visual/branding
- [ ] Review and update all copy for tone and accuracy

## Notes

- Do not add server-only features (database, authentication, API endpoints) unless static export is removed from Next.js config
- Keep content in `portfolio.ts` for easy updates
- All styling uses Tailwind CSS with design system tokens from `DESIGN.md`
- Comments follow anti-slop guidelines: minimal, informative, never restating obvious code

## License

Personal portfolio. See AGENTS.md and DESIGN.md for detailed specifications.
