import React from "react";

import { resumeCon } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";
import Link from "next/link";
const Resume = () => {
  return (
    <div id="resume" className="resume">
      <Section>
        <Link
          href="https://drive.google.com/file/d/1yDSSdoq-isIniSO3RRCp5t6QMSAsF2nW/view?usp=sharing"
          target="_blank"
        >
          <h1>Download Resume Here ⬇️</h1>
        </Link>
      </Section>
    </div>
  );
};

export default Resume;
