import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Pricing from "./Pricing";

function PricingSection(props) {
  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <Pricing
          buttonText="Choose"
          items={[
            {
              id: "starter",
              name: "Starter",
              price: "10",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
              ],
            },
            {
              id: "pro",
              name: "Pro",
              price: "20",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
              ],
            },
            {
              id: "business",
              name: "Business",
              price: "50",
              perks: [
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Faucibus porta lacus fringilla vel",
                "Aenean sit amet erat nunc",
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
              ],
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
