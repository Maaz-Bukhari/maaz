import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="wordmark" onClick={() => window.scrollTo(0, 0)}>
          <span className="wordmark-mark">M</span><span>Maaz</span>
        </Link>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navLinks.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}><small>0{index + 1}</small>{item.title}</a>)}
        </div>
        <a href="#contact" className="nav-contact">Start a project <span>↗</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu"><i /><i /></button>
      </div>
    </nav>
  );
};
export default Navbar;
