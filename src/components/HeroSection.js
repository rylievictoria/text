import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="has-text-centered"
        />
        <div className="buttons is-centered">
          <SectionButton
            parentColor={props.color}
            size="medium"
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </SectionButton>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
