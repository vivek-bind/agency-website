import React from "react";
import Hero from "./Hero";
import Solutions from "./Solutions";
import CaseStudies from "./CaseStudies";
import CTA from "./CTA";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Solutions />
      <CaseStudies />
      <CTA />
    </div>
  );
}
