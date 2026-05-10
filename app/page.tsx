import Link from "next/link";

export default function HomePage() {
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
            <a className="nav__link" href="#products">
              Products
            </a>
            <a className="nav__link" href="#principles">
              Principles
            </a>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </nav>

          <div className="topbar__actions">
            <a className="btn btn--primary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="main" role="main">
        <section className="hero reveal" aria-labelledby="hero-title">

          <div className="container hero__grid">
            <div className="hero__copy reveal">
              <p className="eyebrow">Product engineering studio</p>
              <h1 id="hero-title" className="display">
                We design, build, and ship software teams rely on.
              </h1>
              <p className="lead">
                Dveloped builds and operates a growing portfolio of web, mobile,
                and SaaS products—crafted for performance, reliability, and
                long-term maintainability.
              </p>

              <div className="hero__cta">
                <a className="btn btn--primary" href="#products">
                  Explore what we’re building
                </a>
                <a className="btn btn--tertiary" href="#principles">
                  How we work
                </a>
              </div>

              <dl className="hero__stats" aria-label="Company snapshot">
                <div className="stat">
                  <dt className="stat__k">Platforms</dt>
                  <dd className="stat__v">Web, Mobile, SaaS</dd>
                </div>
                <div className="stat">
                  <dt className="stat__k">Focus</dt>
                  <dd className="stat__v">Own &amp; operate products</dd>
                </div>
                <div className="stat">
                  <dt className="stat__k">Approach</dt>
                  <dd className="stat__v">Long-term, high standards</dd>
                </div>
              </dl>
            </div>

            <div
              className="hero__panel reveal"
              aria-label="Command palette preview (decorative)"
            >
              <div className="palette" role="presentation">
                <div className="palette__top">
                  <div className="dots" aria-hidden="true">
                    <span className="dot dot--r" />
                    <span className="dot dot--y" />
                    <span className="dot dot--g" />
                  </div>
                  <div className="palette__title">Dveloped</div>
                  <div className="palette__kbd" aria-hidden="true">
                    <span className="keycap">⌘</span>
                    <span className="keycap">K</span>
                  </div>
                </div>
                <div className="palette__search" aria-hidden="true">
                  <span className="pill">Search apps &amp; products…</span>
                </div>
                <div className="palette__list" aria-hidden="true">
                  <div className="row">
                    <span className="row__icon">◆</span>
                    <span className="row__text">Product delivery</span>
                    <span className="row__meta">From roadmap to launch</span>
                  </div>
                  <div className="row">
                    <span className="row__icon">■</span>
                    <span className="row__text">Web platforms</span>
                    <span className="row__meta">Secure, scalable</span>
                  </div>
                  <div className="row">
                    <span className="row__icon">●</span>
                    <span className="row__text">Mobile experiences</span>
                    <span className="row__meta">Native &amp; cross-platform</span>
                  </div>
                  <div className="row row--muted">
                    <span className="row__icon">↳</span>
                    <span className="row__text">Operational excellence</span>
                    <span className="row__meta">Quality, tooling, uptime</span>
                  </div>
                </div>
                <div className="palette__hint" aria-hidden="true">
                  <span className="hint">Enter</span> to open{" "}
                  <span className="sep">·</span> <span className="hint">Esc</span>{" "}
                  to close
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section reveal"
          aria-labelledby="products-title"
        >
          <div className="container">
            <header className="section__header reveal">
              <h2 id="products-title" className="h2">
                What we do
              </h2>
              <p className="subhead">
                We build, launch, and continuously improve our own products
                across web, mobile, and SaaS.
              </p>
            </header>

            <div className="grid3">
              <article className="card reveal">
                <div className="card__tag">Product</div>
                <h3 className="h3">Ideas to outcomes</h3>
                <p className="body">
                  We identify real user needs, validate quickly, and ship
                  deliberate iterations that compound over time.
                </p>
              </article>

              <article className="card reveal">
                <div className="card__tag">Engineering</div>
                <h3 className="h3">Build &amp; modernization</h3>
                <p className="body">
                  Durable systems, clean architecture, and production-grade
                  execution across the stack.
                </p>
              </article>

              <article className="card reveal">
                <div className="card__tag">Operations</div>
                <h3 className="h3">Reliability &amp; scale</h3>
                <p className="body">
                  Performance, security, observability, and consistent upkeep to
                  keep products stable, fast, and trustworthy.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="principles"
          className="section reveal"
          aria-labelledby="principles-title"
        >
          <div className="container">
            <header className="section__header reveal">
              <h2 id="principles-title" className="h2">
                How we build
              </h2>
              <p className="subhead">
                Professional process, thoughtful execution, and a bias toward
                outcomes.
              </p>
            </header>

            <div className="grid2">
              <article className="card card--tight reveal">
                <h3 className="h3">Clarity over complexity</h3>
                <p className="body">
                  Simple plans, clean interfaces, and principled decisions—so
                  the product stays understandable as it grows.
                </p>
                <ul className="bullets">
                  <li>Clear scope and crisp requirements</li>
                  <li>Accessible, consistent UX patterns</li>
                  <li>Maintainable architecture and code</li>
                </ul>
              </article>

              <article className="card card--tight reveal">
                <h3 className="h3">Quality by default</h3>
                <p className="body">
                  Reliability, performance, and security are built in—not added
                  after release.
                </p>
                <ul className="bullets">
                  <li>Testing, reviews, and predictable delivery</li>
                  <li>Monitoring, incident readiness, and ownership</li>
                  <li>Security posture and responsible data handling</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section section--cta reveal"
          aria-labelledby="cta-title"
        >
          <div className="container">
            <div className="cta reveal">
              <div className="cta__copy">
                <h2 id="cta-title" className="h2">
                  Follow what we ship.
                </h2>
                <p className="subhead">
                  Interested in our products, roadmap, or future launches? Reach
                  out—we’re always happy to connect.
                </p>
              </div>
              <div className="cta__actions">
                <a className="btn btn--primary" href="mailto:hello@dveloped.com">
                  Email hello@dveloped.com
                </a>
                <a className="btn btn--tertiary" href="#products">
                  Back to overview
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer reveal" role="contentinfo">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                D
              </span>
              <span className="brand__name">Dveloped</span>
            </div>
            <p className="footer__note">
              Building and operating high-quality products for teams and
              customers.
            </p>
          </div>

          <div className="footer__links" aria-label="Footer links">
            <div className="linkcol">
              <div className="linkcol__title">Company</div>
              <a className="link" href="#products">
                Products
              </a>
              <a className="link" href="#principles">
                Principles
              </a>
              <a className="link" href="#contact">
                Contact
              </a>
            </div>
            <div className="linkcol">
              <div className="linkcol__title">Legal</div>
              <a className="link" href="#" aria-disabled="true">
                Privacy (coming soon)
              </a>
              <a className="link" href="#" aria-disabled="true">
                Terms (coming soon)
              </a>
            </div>
          </div>

          <div className="footer__meta">
            <span>
              © {new Date().getFullYear()} Dveloped
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
