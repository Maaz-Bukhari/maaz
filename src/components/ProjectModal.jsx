import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { github } from "../assets";

const views = [
  { label: "Overview", className: "view-overview" },
  { label: "Interface", className: "view-interface" },
  { label: "Details", className: "view-details" },
];

const ProjectModal = ({ project, onClose }) => {
  const [activeView, setActiveView] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveView(0);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setActiveView((v) => (v + 1) % views.length);
      if (event.key === "ArrowLeft") setActiveView((v) => (v - 1 + views.length) % views.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="case-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.article
            className="case-modal"
            initial={{ opacity: 0, y: 70, scale: .97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: .98 }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            onMouseDown={(e) => e.stopPropagation()}
            style={{ "--case-accent": project.accent }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
          >
            <header className="case-nav">
              <div className="case-brand"><span>MM</span><p>Selected work <small>/ Case study</small></p></div>
              <div className="case-progress"><i /><span>0{activeView + 1} / 0{views.length}</span></div>
              <button onClick={onClose} aria-label="Close case study"><span>Close</span><i>×</i></button>
            </header>

            <section className="case-hero">
              <div className="case-heading">
                <p>{project.category} <span>•</span> {project.year}</p>
                <h2>{project.name}</h2>
                <div className="case-tags">{project.tags.map((tag) => <span key={tag.name}>{tag.name}</span>)}</div>
              </div>
              <div className="case-visual">
                <div className="ai-orb" aria-hidden="true"><i /><i /><i /><span>AI</span></div>
                <AnimatePresence mode="wait">
                  <motion.div key={activeView} className={`gallery-frame ${views[activeView].className}`} initial={{ opacity: 0, x: 35, rotateY: -5 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: .45 }}>
                    <div className="gallery-chrome"><span><i /><i /><i /></span><small>maaz.dev / {project.name.toLowerCase().replace(" ", "-")}</small><em>↗</em></div>
                    <img src={project.image} alt={`${project.name} ${views[activeView].label} view`} />
                    <div className="scanline" />
                  </motion.div>
                </AnimatePresence>
                <div className="gallery-controls">
                  {views.map((view, index) => <button key={view.label} className={activeView === index ? "active" : ""} onClick={() => setActiveView(index)}><b>0{index + 1}</b>{view.label}</button>)}
                </div>
              </div>
            </section>

            <section className="case-story">
              <div className="case-index">02 <span>Strategy</span></div>
              <div className="story-block"><small>The problem</small><h3>Removing friction from a complex journey.</h3><p>{project.challenge}</p></div>
              <div className="story-divider"><span>→</span></div>
              <div className="story-block solution"><small>The solution</small><h3>A system designed around momentum.</h3><p>{project.solution}</p></div>
            </section>

            <section className="case-outcome">
              <div><small>Contribution</small><p>{project.role}</p></div>
              {project.impact.map((item, index) => <div key={item}><small>0{index + 1}</small><p>{item}</p></div>)}
              <a href={project.source_code_link} target="_blank" rel="noreferrer"><img src={github} alt="" /> View source <span>↗</span></a>
            </section>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
