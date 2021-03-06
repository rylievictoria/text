import React from "react";
import Section from "./Section";
import "./StatsSection.scss";

function StatsSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <nav className="StatsSection__level level">
          {props.items.map((item, index) => (
            <div className="level-item has-text-centered" key={index}>
              <div>
                <p className="heading">{item.title}</p>
                <p className="title">{item.stat}</p>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </Section>
  );
}

export default StatsSection;
