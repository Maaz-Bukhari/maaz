import { motion } from "framer-motion";

const floating = (duration, delay = 0) => ({
  y: [0, -14, 0],
  rotate: [0, 3, 0],
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
});

const Hero = () => {
  return (
    <section className="hero-shell relative min-h-screen w-full overflow-hidden">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] items-center gap-10 px-6 pb-20 pt-32 sm:px-12 lg:grid-cols-[1.05fr_.95fr] lg:px-20">
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            <span className="status-dot" /> Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title mt-8"
          >
            I shape ideas into <span>digital clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-copy mt-7 max-w-[590px]"
          >
            Maaz is a software developer crafting considered interfaces and
            dependable web products where clean engineering meets a sharp eye
            for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a className="primary-cta" href="#work">
              Explore my work <span>↗</span>
            </a>
            <a className="text-link" href="#contact">
              Let’s build something <span>→</span>
            </a>
          </motion.div>

          <div className="hero-meta mt-16">
            <div>
              <strong>01</strong>
              <span>
                Design-minded
                <br />
                development
              </span>
            </div>
            <div>
              <strong>02</strong>
              <span>
                Responsive by
                <br />
                default
              </span>
            </div>
            <div>
              <strong>03</strong>
              <span>
                Built for real
                <br />
                people
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[590px] w-full max-w-[590px] sm:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="orbit orbit-outer"
          >
            <span className="orbit-node" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="orbit orbit-inner"
          >
            <span className="orbit-node second" />
          </motion.div>
          <motion.div animate={floating(6)} className="sculpture-card">
            <div className="sculpture-topline">
              <span>MAAZ / 26</span>
              <span>CREATIVE DEV</span>
            </div>
            <div className="sculpture-object">
              <div className="chrome-ring ring-a" />
              <div className="chrome-ring ring-b" />
              <div className="core-sphere">
                <span />
              </div>
            </div>
            <div className="sculpture-caption">
              <span>Digital systems</span>
              <span>35.6762° N</span>
            </div>
          </motion.div>
          <motion.div
            animate={floating(4.8, 0.3)}
            className="float-chip chip-one"
          >
            UI / UX <span>✦</span>
          </motion.div>
          <motion.div
            animate={floating(5.5, 0.8)}
            className="float-chip chip-two"
          >
            <span className="mini-wave">〰</span> Clean code
          </motion.div>
          <div className="coordinate-label">FIG. 01 — FORM &amp; FUNCTION</div>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        <span /> Scroll to discover
      </a>
    </section>
  );
};

export default Hero;
