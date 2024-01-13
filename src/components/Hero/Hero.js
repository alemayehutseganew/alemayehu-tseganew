import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { heroProfile } from "../../constants/constants";
import Link from "next/link";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <div>
          <SectionTitle main center>
            Welcome To Alemayehu Tseganew<br />
             Personal Portfolio
          </SectionTitle>
          <SectionText>
            As a frontend and backend developer with a strong academic
            background, Alemayehu brings a unique set of skills and expertise to
            any project. With a degree in computer science Engineering and 2+
            years of experience in the industry,
          </SectionText>
        </div>

        <div></div>
        <Button onClick={props.handleClick}>
          <Link href="#about">Learn More</Link>{" "}
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
