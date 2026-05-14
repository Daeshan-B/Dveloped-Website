import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="topbar" role="banner">
        <div className="container topbar__inner">
          <Link className="brand" href="/" aria-label="Dveloped home">
            <span className="brand__mark" aria-hidden="true">
              D
            </span>
            <span className="brand__name">Dveloped</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link className="nav__link" href="/">
              Home
            </Link>
            <Link className="nav__link" href="/careers">
              Careers
            </Link>
          </nav>

          <div className="topbar__actions">
            <Link className="btn btn--primary" href="/">
              Back home
            </Link>
          </div>
        </div>
      </header>

      <main id="main" className="main" role="main">
        <section className="hero reveal" aria-labelledby="careers-title">
          <div className="container hero__grid careers-hero">
            <div className="hero__copy reveal">
              <p className="eyebrow">Careers</p>
              <h1 id="careers-title" className="display">
                Join us to build the next generation of product workflows.
              </h1>
              <p className="lead">
                Dveloped is hiring people who are excited about applied AI,
                thoughtful software, and interfaces that make complex systems
                feel natural to use.
              </p>

              <div className="hero__cta">
                <a className="btn btn--primary" href="#open-roles">
                  See open roles
                </a>
                <Link className="btn btn--tertiary" href="/">
                  Back to home
                </Link>
              </div>
            </div>

            <div className="hero__panel reveal" aria-label="Hiring focus areas">
              <div className="palette" role="presentation">
                <div className="palette__top">
                  <div className="dots" aria-hidden="true">
                    <span className="dot dot--r" />
                    <span className="dot dot--y" />
                    <span className="dot dot--g" />
                  </div>
                  <div className="palette__title">Hiring Focus</div>
                  <div className="palette__kbd" aria-hidden="true">
                    <span className="keycap">2</span>
                    <span className="keycap">Roles</span>
                  </div>
                </div>
                <div className="palette__list" aria-hidden="true">
                  <div className="row">
                    <span className="row__icon">AI</span>
                    <span className="row__text">Agent engineering</span>
                    <span className="row__meta">Orchestration</span>
                  </div>
                  <div className="row">
                    <span className="row__icon">UX</span>
                    <span className="row__text">AI product design</span>
                    <span className="row__meta">Human centered</span>
                  </div>
                  <div className="row">
                    <span className="row__icon">OP</span>
                    <span className="row__text">Workflow systems</span>
                    <span className="row__meta">Automation</span>
                  </div>
                </div>
                <div className="palette__hint" aria-hidden="true">
                  We are looking for builders who can shape both the product
                  and the process behind it.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="open-roles"
          className="section reveal"
          aria-labelledby="open-roles-title"
        >
          <div className="container">
            <header className="section__header reveal">
              <h2 id="open-roles-title" className="h2">
                Open roles
              </h2>
              <p className="subhead">
                Two foundational hires for how we design, ship, and scale AI-native
                products.
              </p>
            </header>

            <div className="jobs">
              <article className="job-card reveal">
                <div className="job-card__header">
                  <div>
                    <div className="card__tag">Engineering</div>
                    <h3 className="h3">Software Engineer, AI Agents</h3>
                  </div>
                  <div className="job-card__meta">Full stack / applied AI</div>
                </div>
                <p className="body">
                  Build and operationalize agentic systems across product
                  workflows. This role focuses on turning LLM capabilities into
                  dependable tools, assistants, and automations that users can
                  trust in real-world usage.
                </p>
                <div className="job-grid">
                  <div className="job-block">
                    <h4 className="job-block__title">What you&apos;ll do</h4>
                    <ul className="bullets">
                      <li>Design agent workflows, tools, and orchestration layers</li>
                      <li>Prototype and productionize AI-assisted product features</li>
                      <li>Improve evals, observability, and reliability for agent systems</li>
                      <li>Partner with design to make advanced behavior understandable</li>
                    </ul>
                  </div>
                  <div className="job-block">
                    <h4 className="job-block__title">What helps</h4>
                    <ul className="bullets">
                      <li>Strong software engineering fundamentals across frontend and backend</li>
                      <li>Experience with LLM APIs, tool use, prompt design, or eval loops</li>
                      <li>Systems thinking around latency, failure modes, and guardrails</li>
                      <li>Comfort shipping quickly while keeping quality high</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="job-card reveal">
                <div className="job-card__header">
                  <div>
                    <div className="card__tag">Design</div>
                    <h3 className="h3">AI UX Designer</h3>
                  </div>
                  <div className="job-card__meta">Product / interaction design</div>
                </div>
                <p className="body">
                  Shape how users experience intelligent systems. This role is
                  about designing interfaces, states, and workflows that make AI
                  interactions legible, useful, and confidence-inspiring.
                </p>
                <div className="job-grid">
                  <div className="job-block">
                    <h4 className="job-block__title">What you&apos;ll do</h4>
                    <ul className="bullets">
                      <li>Design end-to-end AI-assisted workflows across web and mobile</li>
                      <li>Create interaction patterns for generation, review, and correction</li>
                      <li>Translate ambiguity into clear user flows and interface systems</li>
                      <li>Work closely with engineering to tune behavior through product design</li>
                    </ul>
                  </div>
                  <div className="job-block">
                    <h4 className="job-block__title">What helps</h4>
                    <ul className="bullets">
                      <li>Strong product thinking with polished visual and interaction craft</li>
                      <li>Experience designing for adaptive, probabilistic, or assistant-like systems</li>
                      <li>Ability to simplify complex technical behavior into intuitive UX</li>
                      <li>Comfort iterating from prototype to production details</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--cta reveal" aria-labelledby="apply-title">
          <div className="container">
            <div className="cta reveal">
              <div className="cta__copy">
                <h2 id="apply-title" className="h2">
                  Interested in working with us?
                </h2>
                <p className="subhead">
                  Send a resume, portfolio, GitHub, or a short note about why
                  one of these roles fits you.
                </p>
              </div>
              <div className="cta__actions">
                <a
                  className="btn btn--primary"
                  href="mailto:hello@dveloped.com?subject=Application%20for%20Dveloped"
                >
                  Email hello@dveloped.com
                </a>
                <Link className="btn btn--tertiary" href="/">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
