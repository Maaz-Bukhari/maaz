import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../constants";
import { github } from "../assets";

const views = [
  { label: "Overview", className: "view-overview" },
  { label: "Interface", className: "view-interface" },
  { label: "Details", className: "view-details" },
];

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeView, setActiveView] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  useEffect(() => {
    const keyHandler = (event) => {
      if (event.key === "Escape") setFullscreen(false);
      if (event.key === "ArrowRight") setActiveView((v) => (v + 1) % views.length);
      if (event.key === "ArrowLeft") setActiveView((v) => (v - 1 + views.length) % views.length);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);
  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullscreen]);

  if (!project) return <Navigate to="/" replace />;
  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const GalleryImage = ({ full = false }) => (
    <motion.div key={`${activeView}-${full}`} className={`gallery-frame ${views[activeView].className} ${full ? "is-fullscreen" : ""}`} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .4 }}>
      {!full && <div className="gallery-chrome"><span><i /><i /><i /></span><small>maaz.dev / {project.slug}</small><em>↗</em></div>}
      <img src={project.image} alt={`${project.name} ${views[activeView].label} view`} />
      {!full && <div className="scanline" />}
    </motion.div>
  );

  return (
    <main className="project-page" style={{ "--case-accent": project.accent }}>
      <header className="project-page-nav">
        <Link to="/" className="case-brand"><span>MM</span><p>Maaz <small>/ Selected work</small></p></Link>
        <span className="project-count">0{index + 1} — 0{projects.length}</span>
        <Link to="/#work" className="back-work">Back to work <i>×</i></Link>
      </header>

      <section className="project-page-hero">
        <div className="project-intro">
          <p>{project.category} <span>•</span> {project.year}</p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>{project.name}</motion.h1>
          <p className="project-deck">{project.description}</p>
          <div className="case-tags">{project.tags.map((tag) => <span key={tag.name}>{tag.name}</span>)}</div>
        </div>

        <div className="project-gallery">
          <div className="ai-orb"><i /><i /><i /><span>AI</span></div>
          <AnimatePresence mode="wait"><GalleryImage /></AnimatePresence>
          <div className="project-gallery-bar">
            <div className="gallery-controls">{views.map((view, i) => <button key={view.label} className={i === activeView ? "active" : ""} onClick={() => setActiveView(i)}><b>0{i + 1}</b>{view.label}</button>)}</div>
            <button className="fullscreen-button" onClick={() => setFullscreen(true)}><i>⛶</i> Fullscreen</button>
          </div>
        </div>
      </section>

      <section className="case-story project-story">
        <div className="case-index">02 <span>Strategy</span></div>
        <div className="story-block"><small>The problem</small><h3>Removing friction from a complex journey.</h3><p>{project.challenge}</p></div>
        <div className="story-divider"><span>→</span></div>
        <div className="story-block solution"><small>The solution</small><h3>A system designed around momentum.</h3><p>{project.solution}</p></div>
      </section>

      <section className="case-outcome">
        <div><small>Contribution</small><p>{project.role}</p></div>
        {project.impact.map((item, i) => <div key={item}><small>0{i + 1}</small><p>{item}</p></div>)}
        <a href={project.live_link || project.source_code_link} target="_blank" rel="noreferrer"><img src={github} alt="" /> {project.live_link ? "Live project" : "View source"} <span>↗</span></a>
      </section>

      <nav className="project-pagination">
        <Link to={`/projects/${previous.slug}`}><small>← Previous project</small><strong>{previous.name}</strong></Link>
        <Link to={`/projects/${next.slug}`}><small>Next project →</small><strong>{next.name}</strong></Link>
      </nav>

      <AnimatePresence>{fullscreen && <motion.div className="fullscreen-gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><button onClick={() => setFullscreen(false)}>Close <i>×</i></button><div className="fullscreen-stage"><AnimatePresence mode="wait"><GalleryImage full /></AnimatePresence></div><div className="fullscreen-controls"><button onClick={() => setActiveView((activeView - 1 + views.length) % views.length)}>←</button><span>0{activeView + 1} / 0{views.length} — {views[activeView].label}</span><button onClick={() => setActiveView((activeView + 1) % views.length)}>→</button></div></motion.div>}</AnimatePresence>
    </main>
  );
};

export default ProjectPage;
