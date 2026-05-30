# CSA Portfolio

A React portfolio website for Shaurya Mishra, built for Computer Science Application. The site presents a competitive golfer and developer identity with animated visuals, resume content, project documentation areas, and two project features.

Live site:

- [GitHub Pages Portfolio](https://shauryamishra-lab.github.io/CSA-Portofolio/)

## Theme

The portfolio is designed around the connection between competitive golf and computer science:

- Golf brings focus, patience, resilience, and performance under pressure.
- Computer science brings structure, debugging, data, logic, and project building.
- The design uses fairway greens, warm golds, motion, project cards, and a real golf-course photo to make that identity clear.

## Featured Projects

### F1 Race Trace

A Python data visualization project that uses FastF1 race telemetry for the 2021 Bahrain Grand Prix.

It loads lap data, calculates each driver's gap to the race leader by lap, exports a CSV file, and creates a PNG line chart showing race progress.

Project links:

- [GitHub Source](https://github.com/ShauryaMishra-Lab/F1_Race_Trace_Student)
- [README](https://github.com/ShauryaMishra-Lab/F1_Race_Trace_Student/blob/main/README.md)

### Java Inheritance Program

A Java object-oriented programming project focused on superclass and subclass relationships using `Pet`, `Cat`, `Dog`, and `InheritedPet`.

It demonstrates how `Cat` and `Dog` inherit shared pet actions from `Pet`, while adding unique methods such as `purr()` and `walk()`. The runner class creates pet objects, names them, and calls inherited and subclass-specific methods.

Project links:

- [GitHub Source](https://github.com/ShauryaMishra-Lab/Java-Inheritance-Program)
- [README](https://github.com/ShauryaMishra-Lab/Java-Inheritance-Program/blob/main/README.md)
- [Pet.java](https://github.com/ShauryaMishra-Lab/Java-Inheritance-Program/blob/main/Pet.java)
- [InheritedPet.java](https://github.com/ShauryaMishra-Lab/Java-Inheritance-Program/blob/main/InheritedPet.java)

## Built With

- React
- Vite
- JavaScript / JSX
- CSS
- Lucide React icons

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project deploys automatically with GitHub Actions when changes are pushed to `main`.

The workflow builds the Vite app into `dist/` and publishes that folder to GitHub Pages. The production Vite base path is configured as `/CSA-Portofolio/` so the built `index.html` loads the JavaScript, CSS, and image assets correctly from the repository Pages URL.

## Project Structure

```text
.
├── .github
│   └── workflows
│       └── deploy-pages.yml
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── styles.css
│   └── assets
│       └── golf-profile-photo.jpg
└── README.md
```

## Portfolio Sections

- Home: competitive golfer and developer identity
- Performance: highlights for golf, coding, CS growth, and mindset
- About: background, interests, and growth goals
- Resume: education timeline, technical skills, activities, and professional skills
- Projects: F1 Race Trace and Java Inheritance Program
- Documentation: placeholder area for project files, rubrics, and final documents
- Contact: email and GitHub links

## Notes

The documentation and rubric links are ready to be replaced with final class documents when those files are available.
