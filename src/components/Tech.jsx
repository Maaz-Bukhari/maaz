import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="tech-section">
      <div><p className={styles.sectionSubText}>Tools of the trade</p><h2 className={styles.sectionHeadText}>A focused stack.</h2></div>
      <div className="tech-marquee">
        {technologies.map((technology, index) => (
          <div className="tech-item" key={technology.name}><small>0{index + 1}</small><img src={technology.icon} alt="" /><span>{technology.name}</span></div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
