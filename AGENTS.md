# Repository Guidelines

## Project Structure & Module Organization
This is a Vite React portfolio app. `index.html` provides the root DOM node and loads `src/App.jsx`. The React entry point, page content, portfolio data, navigation items, resume entries, and project entries all live in `src/App.jsx`, which mounts the app with `createRoot`. Global styling lives in `src/styles.css` and uses CSS custom properties in `:root` for the visual system.

The portfolio is organized as one scrolling site with anchor sections for home, about, resume, projects, documentation, and contact. Keep those section ids aligned with the `navItems` array so navigation links remain usable.

## Build, Test, and Development Commands
Use the scripts defined in `package.json`:

- `npm run dev` starts the local Vite development server on `127.0.0.1`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally on `127.0.0.1`.

There is no configured test script or test framework yet.

## Coding Style & Naming Conventions
Use JSX in `src/App.jsx` and keep React components in PascalCase. Portfolio content is currently stored in plain constants near the top of the file, then rendered by section components below. Preserve that simple data-first structure unless the app grows enough to justify splitting files.

CSS is plain global CSS in `src/styles.css`. Reuse existing variables such as `--ink`, `--paper`, `--cream`, `--line`, `--gold`, `--sage`, and `--clay` before adding new colors. Existing layout patterns use CSS Grid, section bands, thin borders, and responsive media queries at `900px` and `560px`.

## Portfolio Requirements
Future edits should protect the rubric-facing sections: About, Resume, Projects, Documentation, and Contact. The Projects section should keep at least two project cards, with project name, course, dates, objective, responsibilities, learning, skills, visual area, documentation link, and rubric link.
