import { useEffect, useRef, useState } from 'react'
import profileImage from './assets/Image/olira.png'
import projectImage1 from './assets/Image/project1.png'
import projectImage2 from './assets/Image/project2.png'
import projectImage3 from './assets/Image/project3.png'
import projectImage4 from './assets/Image/project4.png'

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
    image: projectImage1,
  },
  {
    title: 'Movie Titles API',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Version control'],
    description:
      'A clean interface for browsing movie titles from an API with filtering, lightweight search, and structured data cards.',
    preview: 'Poster Gallery',
    image: projectImage2,
  },
  {
    title: 'Javascript Calculator',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    description:
      'A keyboard-friendly calculator with expression evaluation, intuitive layout, and robust input handling.',
    preview: 'Terminal Output',
    image: projectImage3,
  },
  {
    title: 'SaaS Landing Page',
    tags: ['HTML', 'CSS'],
    description:
      'A conversion-focused landing page with sharp hierarchy, polished components, and smooth responsive behavior.',
    preview: 'Landing Screenshot',
    image: projectImage4,
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

const homeLinks = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
  { label: 'Telegram', icon: 'telegram', href: 'https://t.me' },
  { label: 'X', icon: 'x', href: 'https://x.com' },
  { label: 'Email', icon: 'gmail', href: 'mailto:youremail@example.com' },
]

function SocialSymbol({ icon }) {
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-icon-svg">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18a2.66 2.66 0 0 0-1.11-1.47c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.15 2.15 0 0 0 2.93.84 2.14 2.14 0 0 1 .64-1.35c-2.22-.25-4.56-1.11-4.56-4.94a3.88 3.88 0 0 1 1.03-2.7 3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.38.85.42 1.81.11 2.69a3.87 3.87 0 0 1 1.02 2.67c0 3.84-2.34 4.68-4.57 4.93a2.4 2.4 0 0 1 .69 1.87v2.77c0 .26.18.58.69.48A10 10 0 0 0 12 2z"
        />
      </svg>
    )
  }

  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-icon-svg">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001A2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3V9zm7 0h3.82v1.7h.05c.53-1.01 1.82-2.07 3.75-2.07 4.01 0 4.75 2.64 4.75 6.08V21h-4v-5.52c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21h-4V9z"
        />
      </svg>
    )
  }

  if (icon === 'telegram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-icon-svg">
        <path
          fill="currentColor"
          d="M21.94 4.66a1 1 0 0 0-1.07-.16L2.65 11.61a1 1 0 0 0 .07 1.87l4.66 1.55 1.72 5.12a1 1 0 0 0 1.7.36l2.61-2.69 4.24 3.1a1 1 0 0 0 1.57-.57l2.87-14.6a1 1 0 0 0-.15-.79zM9.2 14.35l8.65-6.31-6.95 7.25-.35 1.95-1.35-2.89z"
        />
      </svg>
    )
  }

  if (icon === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-icon-svg">
        <path
          fill="currentColor"
          d="M18.24 2h3.28l-7.16 8.19L22.8 22h-6.6l-5.17-6.76L5.1 22H1.8l7.66-8.75L1.2 2h6.77l4.67 6.17L18.24 2zm-1.16 18h1.82L6.98 3.9H5.02L17.08 20z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-icon-svg">
      <path
        fill="currentColor"
        d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11zm2.2-.5L12 11.1 18.8 6H5.2zm13.8 2.26-6.4 4.8a1 1 0 0 1-1.2 0L5 8.26V17.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V8.26z"
      />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [animatedSection, setAnimatedSection] = useState('')
  const [visibleSections, setVisibleSections] = useState(() => new Set(['home']))
  const sectionAnimationTimerRef = useRef(null)
  const previousActiveSectionRef = useRef('home')
  const animatedByScrollRef = useRef(new Set(['home']))

  const triggerSectionAnimation = (id) => {
    if (sectionAnimationTimerRef.current) {
      window.clearTimeout(sectionAnimationTimerRef.current)
    }

    setAnimatedSection(id)
    sectionAnimationTimerRef.current = window.setTimeout(() => {
      setAnimatedSection('')
    }, 780)
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const getScrollOffset = () => (window.innerWidth < 768 ? 112 : 132)

    const detectActiveSection = () => {
      const marker = window.scrollY + getScrollOffset()
      let current = sections[0].id

      sections.forEach((section) => {
        if (section.offsetTop <= marker) {
          current = section.id
        }
      })

      if (current !== previousActiveSectionRef.current) {
        previousActiveSectionRef.current = current
        setActiveSection(current)
      }
    }

    const onScroll = () => {
      window.requestAnimationFrame(detectActiveSection)
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev)
              next.add(entry.target.id)
              return next
            })

            if (!animatedByScrollRef.current.has(entry.target.id)) {
              animatedByScrollRef.current.add(entry.target.id)
              triggerSectionAnimation(entry.target.id)
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -12% 0px' },
    )

    sections.forEach((section) => revealObserver.observe(section))
    detectActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', detectActiveSection)

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', detectActiveSection)
    }
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
    previousActiveSectionRef.current = id
    animatedByScrollRef.current.add(id)
    triggerSectionAnimation(id)
  }

  const sectionClass = (baseClass, id) =>
    `${baseClass} section-scroll ${visibleSections.has(id) ? 'section-in-view' : ''} ${
      animatedSection === id ? 'section-selected' : ''
    }`

  return (
    <div className="min-h-screen bg-[#071a2d] text-slate-100 selection:bg-[#c10007] selection:text-white">
      <header className="sticky top-0 z-50 mx-auto w-full max-w-6xl bg-[#071a2d]/92 px-4 pt-5 backdrop-blur sm:px-6 md:px-10 md:pt-8">
        <nav className="section-divider-nav animate-fade-up flex items-center justify-between pb-6">
          <p className="text-sm font-semibold tracking-wide text-slate-300">
            Olira Tesgera 
          </p>
          <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`menu-toggle md:hidden ${mobileMenuOpen ? "open" : ""}`}
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
        <div
          id="mobile-nav-panel"
          className={`mobile-nav md:hidden ${mobileMenuOpen ? "open" : ""}`}
        >
          <ul className="space-y-1 pb-3">
            {navItems.map((item) => (
              <li key={`mobile-${item.id}`}>
                <a
                  className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
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
          className={sectionClass(
            'section-divider grid items-end gap-8 pt-8 md:min-h-[62vh] md:grid-cols-2 md:gap-10 md:pt-14',
            'home',
          )}
        >
          <div className="animate-fade-up pb-8 md:pb-10">
            <h1 className="text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl">
              Hello<span className="text-[#ff6b47]">.</span>
              <br />
              <span className="intro-line text-2xl font-normal text-slate-200 md:text-3xl">
                I&apos;m Olira Tesgera
              </span>
              <br />
              <span className="mt-2 inline-block">
                Full Stack Web Developer
              </span>
            </h1>
            <div className="hero-contact-links mt-5">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  className="hero-contact-link"
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={link.label}
                  title={link.label}
                >
                  <SocialSymbol icon={link.icon} />
                </a>
              ))}
            </div>
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
              alt="Portrait of Olira Tesgera"
              className="hero-portrait relative z-10 mx-auto h-auto w-[85%] drop-shadow-[0_22px_30px_rgba(0,0,0,0.45)] sm:w-[82%] md:w-[90%]"
            />
          </div>
        </section>

        <section
          id="about"
          className={sectionClass('section-divider grid gap-12 py-16 md:grid-cols-[260px_1fr]', 'about')}
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

        <section
          id="projects"
          className={sectionClass('py-14 md:py-16', 'projects')}
        >
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
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover object-top"
                  />
                  <span className="preview-title">{project.preview}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className={sectionClass('section-divider py-14 md:py-16', 'skills')}
        >
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
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {group.title}
                </h3>
                <div className="mt-6 space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className={sectionClass('section-divider py-14 md:py-16', 'services')}
        >
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
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
            <article className="feature-card animate-fade-up rounded-xl p-8 text-center md:col-span-2 md:mx-auto md:w-[50%]">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {servicesShowcase[2].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {servicesShowcase[2].description}
              </p>
            </article>
          </div>
        </section>

        <section
          id="certifications"
          className={sectionClass('section-divider py-14 md:py-16', 'certifications')}
        >
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
                <h3 className="text-xl leading-tight font-semibold text-white md:text-2xl">
                  {cert.title}
                </h3>
                <p className="mt-2 text-slate-300">{cert.provider}</p>
                <p className="mt-1 text-sm text-slate-400">{cert.date}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {cert.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={sectionClass('section-top-divider grid gap-10 py-16 md:grid-cols-2', 'contact')}
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
        <p className="text-sm text-slate-300">Olira Tesgera </p>
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
