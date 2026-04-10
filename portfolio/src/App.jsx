import { useEffect, useRef, useState } from 'react'
import profileImage from './assets/Image/olira.png'

const services = [
  { icon: '</>', title: 'Website Development' },
  { icon: '[]', title: 'App Development' },
  { icon: '<#>', title: 'Website Hosting' },
]

const stats = [
  { value: '120+', label: 'Completed Projects' },
  { value: '95%', label: 'Client satisfaction' },
  { value: '10+', label: 'Years of experience' },
]

const projects = [
  {
    title: 'Battleship',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    description:
      'A tactical game implementation with smooth turn-by-turn interactions, responsive controls, and game state persistence.',
    preview: 'Code Preview',
  },
  {
    title: 'Movie Titles API',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Version control'],
    description:
      'A clean interface for browsing movie titles from an API with filtering, lightweight search, and structured data cards.',
    preview: 'Poster Gallery',
  },
  {
    title: 'Javascript Calculator',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    description:
      'A keyboard-friendly calculator with expression evaluation, intuitive layout, and robust input handling.',
    preview: 'Terminal Output',
  },
  {
    title: 'SaaS Landing Page',
    tags: ['HTML', 'CSS'],
    description:
      'A conversion-focused landing page with sharp hierarchy, polished components, and smooth responsive behavior.',
    preview: 'Landing Screenshot',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Next.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Django', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Vercel', level: 70 },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Flutter', level: 85 },
      { name: 'Swift', level: 60 },
    ],
  },
]

const servicesShowcase = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces using React, Next.js, Tailwind, and more.',
  },
  {
    title: 'Backend/API Development',
    description: 'RESTful API design, database management, and business logic with clean architecture.',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deployments, CI/CD pipelines, and cloud automation with AWS, Docker, and Vercel.',
  },
]

const certifications = [
  {
    title: 'Introduction to Frontend Development',
    provider: 'Meta',
    date: 'April 6, 2024',
    summary: 'Certified in building responsive frontends with React, JavaScript, HTML, and CSS.',
  },
  {
    title: 'Programming Fundamentals',
    provider: 'Udacity',
    date: 'February 1, 2025',
    summary: 'Certified in core programming concepts, problem solving, and software fundamentals.',
  },
  {
    title: 'Manager of AI Workshop',
    provider: 'Elvis Melia',
    date: 'September 20, 2025',
    summary: 'Certified for successful completion of a full-day AI workshop and project exercises.',
  },
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contacts' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [animatedSection, setAnimatedSection] = useState('')
  const sectionAnimationTimerRef = useRef(null)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.25, 0.45, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    return () => {
      if (sectionAnimationTimerRef.current) {
        window.clearTimeout(sectionAnimationTimerRef.current)
      }
    }
  }, [])

  const handleNavClick = (id) => {
    setActiveSection(id)
    setMobileMenuOpen(false)

    if (sectionAnimationTimerRef.current) {
      window.clearTimeout(sectionAnimationTimerRef.current)
    }

    setAnimatedSection('')
    window.requestAnimationFrame(() => {
      setAnimatedSection(id)
      sectionAnimationTimerRef.current = window.setTimeout(() => {
        setAnimatedSection('')
      }, 700)
    })
  }

  return (
    <div className="min-h-screen bg-[#071a2d] text-slate-100 selection:bg-[#c10007] selection:text-white">
      <header className="sticky top-0 z-50 mx-auto w-full max-w-6xl bg-[#071a2d]/92 px-4 pt-5 backdrop-blur sm:px-6 md:px-10 md:pt-8">
        <nav className="section-divider animate-fade-up flex items-center justify-between pb-6">
          <p className="text-sm font-semibold tracking-wide text-slate-300">
            Jensen Omega
          </p>
          <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`menu-toggle md:hidden ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        <div id="mobile-nav-panel" className={`mobile-nav md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="space-y-1 pb-3">
            {navItems.map((item) => (
              <li key={`mobile-${item.id}`}>
                <a
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
        <section
          id="home"
          className={`section-divider grid items-end gap-8 pt-8 md:min-h-[62vh] md:grid-cols-2 md:gap-10 md:pt-14 ${animatedSection === 'home' ? 'section-selected' : ''}`}
        >
          <div className="animate-fade-up pb-8 md:pb-10">
            <h1 className="text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl">
              Hello<span className="text-[#ff6b47]">.</span>
              <br />
              <span className="intro-line text-2xl font-normal text-slate-200 md:text-3xl">
                I&apos;m Jensen
              </span>
              <br />
              <span className="mt-2 inline-block">
                Full Stack Web Developer
              </span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4">
              <button className="btn-primary">Got a project?</button>
              <button className="btn-outline">My resume</button>
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative mx-auto w-full max-w-lg self-end -mb-4 md:-mb-7">
            <div className="hero-spotlight absolute inset-0" />
            <div className="ring-glow absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-72 md:w-72" />
            <span className="arrow-shape left-2 top-1/2 -translate-y-1/2">
              {"<"}
            </span>
            <span className="arrow-shape right-2 top-2/3 -translate-y-1/2">
              {">"}
            </span>
            <img
              src={profileImage}
              alt="Portrait of Jensen Omega"
              className="hero-portrait relative z-10 mx-auto h-auto w-[85%] drop-shadow-[0_22px_30px_rgba(0,0,0,0.45)] sm:w-[82%] md:w-[90%]"
            />
          </div>
        </section>

        <section
          id="about"
          className={`section-divider grid gap-12 py-16 md:grid-cols-[260px_1fr] ${animatedSection === 'about' ? 'section-selected' : ''}`}
        >
          <div className="animate-fade-up space-y-5">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="service-icon">{service.icon}</span>
                <h3 className="text-sm font-medium text-slate-100">
                  {service.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="animate-fade-up delay-200">
            <p className="section-label">About me</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              I started my software journey from photography. Through that, I
              learned to love creation and building from scratch. Since then,
              this has led me to software development as I fulfill my love for
              learning and building things.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`py-14 md:py-16 ${animatedSection === 'projects' ? 'section-selected' : ''}`}>
          <div className="animate-fade-up mb-12">
            <p className="section-label">Projects</p>
          </div>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card animate-fade-up grid gap-6 rounded-xl bg-white/[0.02] p-5 md:grid-cols-2 md:items-center"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="btn-primary">View GitHub</button>
                    <button className="btn-outline">View project</button>
                  </div>
                </div>

                <div
                  className={`project-preview ${index % 2 === 1 ? "md:order-1" : ""}`}
                  aria-label={`${project.title} preview`}
                >
                  <span className="preview-title">{project.preview}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className={`section-divider py-14 md:py-16 ${animatedSection === 'skills' ? 'section-selected' : ''}`}>
          <div className="animate-fade-up mb-10">
            <p className="section-label">Skills</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="feature-card animate-fade-up rounded-xl p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{group.title}</h3>
                <div className="mt-6 space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className={`section-divider py-14 md:py-16 ${animatedSection === 'services' ? 'section-selected' : ''}`}>
          <div className="animate-fade-up mb-10">
            <p className="section-label">Services</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesShowcase.slice(0, 2).map((service, index) => (
              <article
                key={service.title}
                className="feature-card animate-fade-up rounded-xl p-8 text-center"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
            <article className="feature-card animate-fade-up rounded-xl p-8 text-center md:col-span-2 md:mx-auto md:w-[50%]">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">{servicesShowcase[2].title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{servicesShowcase[2].description}</p>
            </article>
          </div>
        </section>

        <section id="certifications" className={`section-divider py-14 md:py-16 ${animatedSection === 'certifications' ? 'section-selected' : ''}`}>
          <div className="animate-fade-up mb-10">
            <p className="section-label">Certifications</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <article
                key={cert.title}
                className="feature-card animate-fade-up rounded-xl p-6 text-center"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="cert-thumb mx-auto mb-5" />
                <h3 className="text-xl leading-tight font-semibold text-white md:text-2xl">{cert.title}</h3>
                <p className="mt-2 text-slate-300">{cert.provider}</p>
                <p className="mt-1 text-sm text-slate-400">{cert.date}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{cert.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`section-top-divider grid gap-10 py-16 md:grid-cols-2 ${animatedSection === 'contact' ? 'section-selected' : ''}`}
        >
          <div className="animate-fade-up">
            <p className="section-label">Contacts</p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold text-white">
              Have a project?
              <br />
              Let&apos;s talk!
            </h2>
            <button className="btn-primary mt-8">Submit</button>
          </div>

          <form className="animate-fade-up delay-200 space-y-6">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" />
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows="4" />
            </label>
          </form>
        </section>
      </main>

      <footer className="section-top-divider bg-[#0a2238] py-8 text-center">
        <p className="text-sm text-slate-300">Jensen Omega</p>
        <p className="mt-1 text-xs text-slate-400">
          Designed with love, all rights reserved.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            className="social-link"
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            className="social-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>
          <a
            className="social-link"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            IN
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App
