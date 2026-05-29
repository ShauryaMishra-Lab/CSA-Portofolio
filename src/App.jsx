import React, { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  Eye,
  FileText,
  Flag,
  Github,
  GraduationCap,
  Mail,
  Target,
  Trophy,
  X
} from "lucide-react";
import { createRoot } from "react-dom/client";
import golfCsHero from "./assets/golf-cs-hero.png";
import "./styles.css";

const student = {
  name: "Shaurya Mishra",
  initials: "SM",
  school: "Emerald High School",
  location: "Dublin, California",
  graduation: "2028",
  course: "Computer Science Application",
  updated: "Last Updated 2026",
  email: "shauryakumarmishra@gmail.com",
  github: "https://github.com/ShauryaMishra-Lab"
};

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${student.email}`;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Documentation", href: "#documentation" },
  { label: "Contact", href: "#contact" }
];

const education = [
  {
    period: "2024-2025 Academic Year",
    entries: ["Algebra 2", "Biology", "English 1", "Spanish 2", "Computer Science Essentials"]
  },
  {
    period: "Summer 2025",
    entries: ["Spanish 3", "AP Computer Science through Berkeley ATDP"]
  },
  {
    period: "2025-2026 Academic Year",
    entries: [
      "Computer Science Application",
      "AP Precalculus",
      "AP World History",
      "AP Computer Science Principles",
      "AP Computer Science A",
      "Honors Chemistry",
      "English 2"
    ]
  },
  {
    period: "Summer 2026",
    entries: [
      "Stanford CS106B: Programming Abstractions",
      "Future C programming",
      "Teaching Assistant for Berkeley ATDP professor Flint Christensen"
    ]
  }
];

const skills = {
  technical: [
    "Java fundamentals",
    "HTML and CSS",
    "Python fundamentals",
    "React",
    "Website design",
    "UML diagrams",
    "Debugging",
    "Project organization"
  ],
  professional: ["Problem solving", "Communication", "Leadership", "Teamwork", "Time management", "Resilience"]
};

const boardItems = [
  {
    label: "Focus",
    title: "Tournament focus, coding discipline",
    copy: "Golf has trained me to stay patient under pressure. Computer science gives me a way to turn that focus into organized, working projects.",
    stat: "01"
  },
  {
    label: "Build",
    title: "From scorecards to source code",
    copy: "I like systems: a golf round has strategy, feedback, and adjustments; a program has structure, testing, and iteration.",
    stat: "02"
  },
  {
    label: "Compete",
    title: "Pressure becomes a process",
    copy: "Competing in events has helped me build resilience, communication, and the habit of improving after every attempt.",
    stat: "03"
  },
  {
    label: "Lead",
    title: "Technical skill with real-world goals",
    copy: "My long-term goal is to connect technology, business, leadership, and athletics into work that is useful and clear.",
    stat: "04"
  }
];

const performanceStats = [
  { icon: Trophy, label: "Competitive Golf", value: "JTNC / AJGA / JGANC / NCGA" },
  { icon: Code2, label: "Code Stack", value: "Java / Python / React / HTML / CSS" },
  { icon: Cpu, label: "CS Growth", value: "Berkeley ATDP + Stanford CS106B" },
  { icon: Target, label: "Mindset", value: "Focus / patience / resilience" }
];

const projects = [
  {
    number: "01",
    title: "F1 Race Trace",
    course: "Computer Science Application / Python Data Project",
    dates: "November 2025",
    objective:
      "Use Formula 1 telemetry data to create a race trace chart for the 2021 Bahrain Grand Prix, showing each driver's gap to the race leader by lap.",
    responsibilities:
      "I loaded race lap data with FastF1, calculated total race time and gap to leader, exported the results as a CSV file, and generated a PNG line graph to show race progress.",
    learned:
      "I learned how sports data can be turned into a clear visualization, and how data processing, debugging, and chart design work together in a Python project.",
    skills: ["Python", "FastF1", "Race telemetry", "CSV export", "Data visualization"],
    imageAlt: "Formula 1 race trace chart preview with telemetry-style lines",
    visualType: "race",
    links: [
      { label: "GitHub Source", href: "https://github.com/ShauryaMishra-Lab/F1_Race_Trace_Student" },
      { label: "README", href: "https://github.com/ShauryaMishra-Lab/F1_Race_Trace_Student/blob/main/README.md" },
      { label: "Rubric", href: "#documentation" }
    ]
  },
  {
    number: "02",
    title: "Java Inheritance Program",
    course: "Computer Science Application",
    dates: "Spring 2026",
    objective:
      "Practice object-oriented programming by creating a superclass and multiple subclasses that show how related classes share methods and variables.",
    responsibilities:
      "I created the class structure, added superclass and subclass relationships, wrote methods, and explained how inheritance helps organize code.",
    learned:
      "I learned that inheritance reduces repeated code and makes programs easier to extend because shared behavior can live in one superclass.",
    skills: ["Java", "OOP", "Inheritance", "UML", "Debugging"],
    imageAlt: "Java inheritance program preview with superclass and subclass structure",
    visualType: "java",
    links: [
      { label: "Project Documentation", href: "#documentation" },
      { label: "Java / UML File", href: "#documentation" },
      { label: "Rubric", href: "#documentation" }
    ]
  }
];

const documentationItems = [
  {
    icon: FileText,
    title: "F1 Race Trace Documentation",
    note: "Python FastF1 project source, README, CSV output, chart image, and process reflection."
  },
  {
    icon: BookOpen,
    title: "Java Inheritance Program Documentation",
    note: "Java source, superclass/subclass structure, UML diagram, explanation, and project reflection."
  },
  {
    icon: FileText,
    title: "Portfolio Rubric",
    note: "The grading rubric or project requirement sheet."
  }
];

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-36% 0px -48% 0px", threshold: [0.08, 0.18, 0.3, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = [...document.querySelectorAll(".reveal-on-scroll")];
    if (!elements.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return progress;
}

function usePageMotion() {
  useEffect(() => {
    let frame = 0;

    const updateMotion = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty("--scroll-ratio", scrollRatio.toFixed(4));
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY.toFixed(0)}px`);
    };

    const requestMotionUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    const updatePointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);
}

function IconButton({ href, children, label }) {
  return (
    <a className="icon-button" href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function MotionLayer() {
  return (
    <div className="motion-layer" aria-hidden="true">
      <span className="motion-card card-a" />
      <span className="motion-card card-b" />
      <span className="motion-card card-c" />
      <span className="motion-line line-a" />
      <span className="motion-line line-b" />
      <span className="pointer-glow" />
    </div>
  );
}

function IntroCurtain() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-curtain ${hidden ? "hidden" : ""}`} aria-hidden="true">
      <div className="intro-mark">{student.initials}</div>
      <div className="intro-track">
        <span />
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, copy }) {
  return (
    <div className="section-header reveal-on-scroll">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header({ activeSection }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span>{student.initials}</span>
        <strong>{student.name}</strong>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a className={activeSection === item.href.slice(1) ? "active" : ""} key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <IconButton href={student.github} label="Open GitHub profile">
          <Github size={18} />
        </IconButton>
        <IconButton href={gmailComposeUrl} label="Email Shaurya">
          <Mail size={18} />
        </IconButton>
      </div>
    </header>
  );
}

function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    "--rotate-x": "0deg",
    "--rotate-y": "0deg",
    "--spot-x": "50%",
    "--spot-y": "50%"
  });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((0.5 - y / rect.height) * 12);

    setCardStyle({
      "--rotate-x": `${rotateX.toFixed(2)}deg`,
      "--rotate-y": `${rotateY.toFixed(2)}deg`,
      "--spot-x": `${((x / rect.width) * 100).toFixed(1)}%`,
      "--spot-y": `${((y / rect.height) * 100).toFixed(1)}%`
    });
  };

  const resetCard = () => {
    setCardStyle({
      "--rotate-x": "0deg",
      "--rotate-y": "0deg",
      "--spot-x": "50%",
      "--spot-y": "50%"
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy reveal-on-scroll">
          <p className="kicker">Golf Athlete / Computer Science Builder</p>
          <h1 className="animated-title">
            <span>Fairway focus.</span>
            <span>Code logic.</span>
            <span>Real progress.</span>
          </h1>
          <p>
            I am {student.name}, a competitive golfer and developer at {student.school}. I bring the same patience,
            pressure control, and discipline from tournament golf into computer science, business, leadership, and
            communication.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#projects">
              View projects <ArrowUpRight size={18} />
            </a>
            <a className="button light" href="#resume">
              Resume
            </a>
          </div>
          <div className="hero-motion-rail" aria-hidden="true">
            <span>Golf</span>
            <span>React</span>
            <span>Java</span>
            <span>Python</span>
            <span>Leadership</span>
          </div>
        </div>
        <div
          className={`profile-card reveal-on-scroll ${isFlipped ? "is-flipped" : ""}`}
          aria-label="Portfolio identity card"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetCard}
          style={cardStyle}
        >
          <div className="card-light" />
          <div className="profile-card-inner">
            <div className="profile-face profile-front">
              <div className="portrait athlete-visual">
                <img src={golfCsHero} alt="Golf course and computer science visual for Shaurya Mishra" />
                <span className="swing-arc" />
                <span className="data-line data-one" />
                <span className="data-line data-two" />
              </div>
              <div className="profile-meta">
                <p>{student.name}</p>
                <h2>Golf Athlete / CS Builder</h2>
                <span>{student.location}</span>
              </div>
              <div className="profile-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="profile-footer">
                <span>{student.updated}</span>
                <button type="button" onClick={() => setIsFlipped(true)}>
                  Portfolio Card
                </button>
              </div>
            </div>

            <div className="profile-face profile-back">
              <div>
                <p className="kicker">Performance Card</p>
                <h2>{student.name}</h2>
                <p>
                  A portfolio built around discipline, tournament experience, computer science growth, and clear project
                  evidence.
                </p>
              </div>
              <div className="pass-grid">
                <span>
                  <strong>Golf</strong>
                  Competitive mindset
                </span>
                <span>
                  <strong>CS</strong>
                  Java / Python / React
                </span>
                <span>
                  <strong>ATDP</strong>
                  Berkeley CS growth
                </span>
                <span>
                  <strong>CS106B</strong>
                  Stanford learning path
                </span>
              </div>
              <div className="profile-footer">
                <a href="#projects">View Work</a>
                <button type="button" onClick={() => setIsFlipped(false)}>
                  Identity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceStrip() {
  return (
    <section className="performance-strip" aria-label="Golf athlete and computer science highlights">
      <div className="performance-inner reveal-on-scroll">
        {performanceStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label}>
              <Icon size={22} />
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function InteractiveBoard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = boardItems[activeIndex];

  return (
    <section className="interactive-band page-band">
      <div className="interactive-board reveal-on-scroll">
        <div className="board-copy">
          <p className="kicker">Performance System</p>
          <h2>Golf habits, coding habits.</h2>
          <p>{activeItem.copy}</p>
        </div>
        <div className="board-panel">
          <div className="board-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="board-tabs" role="tablist" aria-label="Portfolio section preview">
            {boardItems.map((item, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="board-preview" key={activeItem.label}>
            <span>{activeItem.stat}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.copy}</p>
            <div className="board-meter">
              <span style={{ width: `${(activeIndex + 1) * 25}%` }} />
            </div>
          </div>
        </div>
      </div>
      <div className="skill-ticker" aria-label="Skills">
        <div>
          {[...skills.technical, ...skills.professional, ...skills.technical].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="page-band">
      <SectionHeader
        kicker="About Me"
        title="A focused developer building skill through code, school, and competition."
        copy="I am interested in the connection between athletic discipline and technical problem solving. Golf teaches me focus, patience, and adjustment; computer science lets me build systems, test ideas, and solve real problems."
      />
      <div className="about-grid reveal-on-scroll">
        <article>
          <Code2 size={24} />
          <h3>Technology</h3>
          <p>
            I am learning Java, HTML, CSS, Python, React, website structure, debugging, and project organization. I have
            also studied AP Computer Science through Berkeley ATDP and plan to keep growing through Stanford CS106B.
          </p>
        </article>
        <article>
          <Flag size={24} />
          <h3>Golf</h3>
          <p>
            Competitive golf has helped me build discipline, patience, focus, resilience, and confidence under pressure
            through tours such as JTNC, AJGA, JGANC, SCPGA Junior Tour, NCGA, and amateur events.
          </p>
        </article>
        <article>
          <Activity size={24} />
          <h3>Growth</h3>
          <p>
            My goal is to keep improving as a programmer, communicator, teammate, leader, and person who can connect
            technical ideas with real-world goals.
          </p>
        </article>
      </div>
    </section>
  );
}

function Resume() {
  const [activeResumeView, setActiveResumeView] = useState("timeline");

  return (
    <section id="resume" className="page-band cream">
      <SectionHeader
        kicker="Resume"
        title="Education, skills, activities, and experience."
        copy="The resume section is organized into clear columns so visitors can scan dates, coursework, skills, and activities quickly."
      />
      <div className="resume-controls reveal-on-scroll" role="tablist" aria-label="Resume focus">
        {[
          ["timeline", "Timeline"],
          ["skills", "Skills"],
          ["activities", "Activities"]
        ].map(([value, label]) => (
          <button
            className={activeResumeView === value ? "active" : ""}
            key={value}
            type="button"
            onClick={() => setActiveResumeView(value)}
            role="tab"
            aria-selected={activeResumeView === value}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="resume-layout reveal-on-scroll" data-focus={activeResumeView}>
        <aside className="resume-card identity-card">
          <GraduationCap size={30} />
          <h3>{student.name}</h3>
          <p>{student.school}</p>
          <dl>
            <div>
              <dt>Graduation</dt>
              <dd>{student.graduation}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{student.location}</dd>
            </div>
            <div>
              <dt>Course</dt>
              <dd>{student.course}</dd>
            </div>
          </dl>
        </aside>
        <div className="resume-card timeline-card">
          <h3>Education Timeline</h3>
          {education.map((group) => (
            <div className="timeline-row" key={group.period}>
              <h4>{group.period}</h4>
              <ul>
                {group.entries.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="resume-card skill-card">
          <h3>Technical Skills</h3>
          <div className="tag-list">
            {skills.technical.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="resume-card activity-card">
          <h3>Activities</h3>
          <ul className="clean-list">
            <li>Compete in golf tournaments and school team matches.</li>
            <li>Participate in tours including JTNC, AJGA, JGANC, SCPGA Junior Tour, NCGA, and amateur events.</li>
            <li>Help manage a golf tour through organization and communication support.</li>
            <li>Build computer science projects and continue improving academic habits.</li>
          </ul>
        </div>
        <div className="resume-card skill-card">
          <h3>Professional Skills</h3>
          <div className="tag-list">
            {skills.professional.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ index, alt, type }) {
  return (
    <div className={`project-visual visual-${index + 1}`} role="img" aria-label={alt}>
      <span className="project-scan" />
      <span className="motion-dot dot-one" />
      <span className="motion-dot dot-two" />
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      {type === "race" ? (
        <div className="race-trace-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <div className="java-class-stack">
          <span>Superclass</span>
          <span>Subclass A</span>
          <span>Subclass B</span>
        </div>
      )}
      <div className="visual-code">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProjectModal({ selectedProject, onClose }) {
  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedProject]);

  if (!selectedProject) return null;

  const { project, index } = selectedProject;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button
          className="close-button"
          type="button"
          onMouseDown={(event) => {
            event.preventDefault();
            onClose();
          }}
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>
        <ProjectVisual index={index} alt={project.imageAlt} type={project.visualType} />
        <div className="project-modal-content">
          <p className="project-number">Project {project.number}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-meta">
            {project.course} / {project.dates}
          </p>
          <p>
            <strong>Objective:</strong> {project.objective}
          </p>
          <p>
            <strong>My responsibilities:</strong> {project.responsibilities}
          </p>
          <p>
            <strong>What I learned:</strong> {project.learned}
          </p>
          <div className="tag-list">
            {project.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProject = projects[featuredIndex];

  const showPrevious = () => setFeaturedIndex((currentIndex) => (currentIndex === 0 ? projects.length - 1 : currentIndex - 1));
  const showNext = () => setFeaturedIndex((currentIndex) => (currentIndex === projects.length - 1 ? 0 : currentIndex + 1));

  return (
    <section id="projects" className="page-band">
      <SectionHeader
        kicker="Projects"
        title="Two required projects with objective, responsibilities, learning, skills, and documentation."
        copy="Each project is written in a concise format to match the rubric and make the work easy to evaluate."
      />
      <div className="project-feature reveal-on-scroll">
        <div>
          <p className="project-number">Featured Project {featuredProject.number}</p>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.objective}</p>
        </div>
        <div className="project-controls">
          <button type="button" onClick={showPrevious} aria-label="Previous featured project">
            <ArrowLeft size={18} />
          </button>
          <button type="button" onClick={() => setSelectedProject({ project: featuredProject, index: featuredIndex })}>
            <Eye size={18} />
            Details
          </button>
          <button type="button" onClick={showNext} aria-label="Next featured project">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="project-stack">
        {projects.map((project, index) => (
          <article className={`project-card reveal-on-scroll ${index === featuredIndex ? "featured" : ""}`} key={project.title}>
            <ProjectVisual index={index} alt={project.imageAlt} type={project.visualType} />
            <div className="project-content">
              <p className="project-number">Project {project.number}</p>
              <h3>{project.title}</h3>
              <p className="project-meta">
                {project.course} / {project.dates}
              </p>
              <p>
                <strong>Objective:</strong> {project.objective}
              </p>
              <p>
                <strong>My responsibilities:</strong> {project.responsibilities}
              </p>
              <p>
                <strong>What I learned:</strong> {project.learned}
              </p>
              <div className="tag-list">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="document-links">
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
                <button type="button" onClick={() => setSelectedProject({ project, index })}>
                  Open details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function Documentation() {
  const [activeDoc, setActiveDoc] = useState(0);
  const ActiveIcon = documentationItems[activeDoc].icon;

  return (
    <section id="documentation" className="page-band cream">
      <SectionHeader
        kicker="Documentation"
        title="Project documents and rubric links."
        copy="These links are ready to be replaced with final Google Drive, PDF, Java, UML, or rubric files when the documents are available."
      />
      <div className="doc-layout reveal-on-scroll">
        <div className="doc-grid">
          {documentationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                className={activeDoc === index ? "active" : ""}
                key={item.title}
                type="button"
                onClick={() => setActiveDoc(index)}
              >
                <Icon size={24} />
                <span>{item.title}</span>
                <ArrowUpRight size={18} />
              </button>
            );
          })}
        </div>
        <div className="doc-preview">
          <ActiveIcon size={30} />
          <h3>{documentationItems[activeDoc].title}</h3>
          <p>{documentationItems[activeDoc].note}</p>
          <a href="#projects">Connected Projects</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section reveal-on-scroll">
      <div>
        <p className="kicker">Contact</p>
        <h2>Thank you for viewing my portfolio.</h2>
        <p>
          This website presents my progress in Computer Science Application, my resume information, and two required
          project sections with space for final documentation.
        </p>
      </div>
      <div className="contact-links">
        <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
          <span>{student.email}</span>
          <ArrowUpRight size={20} />
        </a>
        <a href={student.github} target="_blank" rel="noreferrer">
          <span>GitHub Profile</span>
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const sectionIds = useMemo(() => ["home", ...navItems.map((item) => item.href.slice(1))], []);
  const activeSection = useActiveSection(sectionIds);
  const progress = useScrollProgress();
  usePageMotion();
  useRevealOnScroll();

  return (
    <>
      <IntroCurtain />
      <MotionLayer />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <PerformanceStrip />
        <InteractiveBoard />
        <About />
        <Resume />
        <Projects />
        <Documentation />
        <Contact />
      </main>
      <footer>
        <span>2026 © {student.name}</span>
        <span>{student.course} Portfolio</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
