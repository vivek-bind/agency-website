import React from "react";
import "./AboutUs.css";
import CTA from "../../landingPage/CTA";
import OurValue from "./OurValue";
import OurProjects from "./OurProjects";

export default function AboutUs() {
  return (
    <>
      <section className="hero">
        <h2 className="heroHeading1">Building the</h2>
        <h2 className="heroHeading2">
          infrastructure of <br /> tomorrow
        </h2>

        <p>
          Since 2024, we've been on a mission to empower businesses with the
          tools they need to build, deploy, and scale world-class applications.
        </p>
      </section>
      <OurValue />
      <OurProjects />
      <CTA />
    </>
  );
}
