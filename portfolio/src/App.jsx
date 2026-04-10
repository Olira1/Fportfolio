import profileImage from './assets/Image/olira.png'

const techStack = ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub']

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

function App() {
  return (
    <div className="min-h-screen bg-[#071a2d] text-slate-100 selection:bg-[#c10007] selection:text-white">
      <header className="mx-auto w-full max-w-6xl px-6 pt-8 md:px-10">
        <nav className="section-divider animate-fade-up flex items-center justify-between pb-6">
          <p className="text-sm font-semibold tracking-wide text-slate-300">
            Jensen Omega
          </p>
          <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <li>
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section
          id="home"
          className="section-divider grid min-h-[62vh] items-end gap-10 pt-12 md:grid-cols-2 md:pt-14"
        >
          <div className="animate-fade-up pb-10">
            <h1 className="text-4xl leading-tight font-semibold text-white md:text-5xl">
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
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-primary">Got a project?</button>
              <button className="btn-outline">My resume</button>
            </div>
          </div>

          <div className="animate-fade-up delay-200 relative mx-auto w-full max-w-lg self-end -mb-7 md:-mb-7">
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
              className="hero-portrait relative z-10 mx-auto h-auto w-[90%] drop-shadow-[0_22px_30px_rgba(0,0,0,0.45)]"
            />
          </div>
        </section>

        <section className="section-divider animate-fade-up py-6">
          <ul className="grid grid-cols-2 gap-3 text-center text-xs text-slate-400 sm:grid-cols-4 md:grid-cols-7 md:text-sm">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-white/8 bg-white/[0.03] px-3 py-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="about"
          className="section-divider grid gap-12 py-16 md:grid-cols-[260px_1fr]"
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

        <section id="projects" className="py-16">
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

        <section
          id="contact"
          className="section-top-divider grid gap-10 py-16 md:grid-cols-2"
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
