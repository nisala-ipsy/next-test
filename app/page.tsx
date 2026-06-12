const navLinks = [
  { label: "Atlas", href: "#atlas" },
  { label: "Method", href: "#method" },
  { label: "Ledger", href: "#ledger" },
];

const pillars = [
  {
    title: "Terrain memoryy",
    body: "We stitch satellite passes, trail journals, and weather windows into one living sheet—so the ground stays legible when plans shift.",
  },
  {
    title: "Convoy cadence",
    body: "Handoffs, resupply beats, and radio checks are encoded as timelines—not slides—so crews read the same rhythm at dawn and dusk.",
  },
  {
    title: "Quiet archive",
    body: "Exports land as print-ready folios and signed PDFs. Nothing lives in a proprietary silo you cannot walk away with.",
  },
];

const stats = [
  { value: "38", label: "expeditions mapped since 2019" },
  { value: "12", label: "partner lodges & stations" },
  { value: "4.2k", label: "waypoints reconciled last season" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-parchment">
      <div
        className="pointer-events-none absolute -left-32 top-[-20%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent_72%)] opacity-80 blur-3xl mesh-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-[35%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(230,220,200,0.12),transparent_70%)] blur-3xl mesh-blob"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <header className="relative z-10 border-b border-parchment/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 md:px-10">
          <a
            href="#"
            className="font-display text-lg font-semibold tracking-tight text-parchment transition-colors hover:text-ember"
          >
            Meridian
            <span className="ml-1.5 text-mist/80 font-sans text-sm font-normal tracking-normal">
              Field Notes
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm text-mist md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-parchment"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-parchment/25 bg-parchment/5 px-4 py-2 text-sm font-medium text-parchment backdrop-blur-sm transition hover:border-ember/60 hover:bg-ember/10"
          >
            Request a folio
          </a>
        </div>
      </header>

      <main>
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-10 md:pt-24"
          aria-labelledby="hero-heading"
        >
          <p className="reveal reveal-delay-1 font-display text-xs font-semibold uppercase tracking-[0.35em] text-ember">
            Cartography studio
          </p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-end">
            <div>
              <h1
                id="hero-heading"
                className="reveal reveal-delay-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-parchment md:text-6xl lg:text-7xl"
              >
                Maps for teams who treat distance as a craft—not a metric.
              </h1>
              <p className="reveal reveal-delay-3 mt-8 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
                We translate terrain, logistics, and folklore into expedition
                folios your crew can trust offline. No dashboards screaming for
                attention—just paper-grade clarity in digital form.
              </p>
              <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(212,101,58,0.35)] transition hover:bg-parchment hover:text-ink"
                >
                  Book an intake call
                </a>
                <a
                  href="#method"
                  className="inline-flex items-center gap-2 text-sm font-medium text-parchment/90 underline-offset-4 transition hover:text-ember hover:underline"
                >
                  See how a route becomes a folio
                  <span aria-hidden className="font-display">
                    →
                  </span>
                </a>
              </div>
            </div>
            <aside className="reveal reveal-delay-3 relative hidden lg:block">
              <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full border border-dashed border-parchment/20" />
              <div className="relative rotate-[1.5deg] rounded-sm border border-parchment/15 bg-ink-soft/80 p-8 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm">
                <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist">
                  Field excerpt
                </p>
                <p className="mt-6 font-sans text-lg leading-relaxed text-parchment/95">
                  &ldquo;The pass looked shorter on the glass. Your contour
                  layer saved us a night above the tree line.&rdquo;
                </p>
                <p className="mt-6 text-sm text-mist">
                  — L. Okonkwo, alpine logistics lead
                </p>
                <div className="accent-rule mt-8" />
              </div>
            </aside>
          </div>
        </section>

        <section
          id="atlas"
          className="relative z-10 border-t border-parchment/10 bg-gradient-to-b from-ink to-ink-soft py-20 md:py-28"
          aria-labelledby="atlas-heading"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="max-w-2xl">
              <h2
                id="atlas-heading"
                className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
              >
                The atlas is not the territory—but yours should breathe like it.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                Each engagement begins with interviews, then field sketches,
                then a restrained digital layer you can annotate in the rain.
              </p>
            </div>
            <ul className="mt-16 grid gap-6 md:grid-cols-3">
              {pillars.map((item, index) => (
                <li
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-parchment/10 bg-ink/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-ember/35 hover:shadow-[0_20px_60px_-30px_var(--glow)]"
                >
                  <span
                    className="font-display text-xs font-semibold text-ember/90"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-parchment">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">
                    {item.body}
                  </p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="method"
          className="relative z-10 py-20 md:py-28"
          aria-labelledby="method-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
            <div>
              <h2
                id="method-heading"
                className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Method in three beats
              </h2>
              <ol className="mt-10 space-y-8">
                {[
                  {
                    step: "Listen",
                    text: "We sit with guides, pilots, and base leads until the story of the route matches the spreadsheet.",
                  },
                  {
                    step: "Trace",
                    text: "We build a layered atlas: hazards, morale checkpoints, water, silence. Typography carries urgency, not color alone.",
                  },
                  {
                    step: "Bind",
                    text: "You receive folio exports, editable source files, and a one-page legend anyone can read by headlamp.",
                  },
                ].map((row) => (
                  <li key={row.step} className="flex gap-5">
                    <span className="font-display mt-1 text-sm font-bold text-ember">
                      {row.step}
                    </span>
                    <p className="text-[1.05rem] leading-relaxed text-mist">
                      {row.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -skew-y-1 rounded-3xl bg-gradient-to-br from-ember/20 via-transparent to-parchment/5" />
              <div className="relative rounded-3xl border border-parchment/10 bg-ink-soft/90 p-10 backdrop-blur-sm">
                <svg
                  viewBox="0 0 400 320"
                  className="h-auto w-full text-parchment/90"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="route"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#d4653a" stopOpacity="0.9" />
                      <stop
                        offset="100%"
                        stopColor="#e6dcc8"
                        stopOpacity="0.35"
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    x="24"
                    y="24"
                    width="352"
                    height="272"
                    rx="12"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.15"
                  />
                  <path
                    d="M 60 260 Q 120 40 200 160 T 340 80"
                    fill="none"
                    stroke="url(#route)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="260" r="5" fill="#d4653a" />
                  <circle
                    cx="200"
                    cy="160"
                    r="4"
                    fill="#e6dcc8"
                    opacity="0.85"
                  />
                  <circle cx="340" cy="80" r="5" fill="#d4653a" />
                  <path
                    d="M 52 48 h 80 M 52 58 h 120 M 52 68 h 60"
                    stroke="currentColor"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                  />
                </svg>
                <p className="mt-2 text-center text-sm text-mist">
                  Every line is negotiable until the first boot hits gravel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ledger"
          className="relative z-10 border-y border-parchment/10 bg-ink-soft/50 py-16 md:py-20"
          aria-label="Studio figures"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-6 md:px-10">
            {stats.map((row) => (
              <div key={row.label}>
                <p className="font-display text-4xl font-semibold text-parchment md:text-5xl">
                  {row.value}
                </p>
                <p className="mt-2 max-w-[14rem] text-sm leading-snug text-mist">
                  {row.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative z-10 px-6 pb-28 pt-20 md:px-10 md:pb-36 md:pt-28"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold tracking-tight md:text-5xl"
            >
              Tell us where the horizon bends next.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              We take a handful of commissions each quarter. Share your window,
              terrain, and the human story—we reply within five working days
              with a reading list and a proposed walkthrough.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@meridian.example"
                className="inline-flex rounded-full bg-parchment px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-ember hover:text-ink"
              >
                hello@meridian.example
              </a>
              <span className="flex items-center text-sm text-mist">
                Prefer signal? We still answer the phone:{" "}
                <span className="ml-1 font-medium text-parchment">
                  +1 (555) 014‑2290
                </span>
              </span>
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.2em] text-mist/70">
              Fictional studio for demonstration — swap contact details freely.
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-parchment/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-mist md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Meridian Field Notes</p>
          <p className="text-parchment/60">
            Built as a Next.js canvas — typography, grain, and slow motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
