import React from "react";
import "./Career.css";
import AdvMagSolution from "./AdvMagSolution";
import Opportunities from "./Opportunities";

import Resume from "./Resume";
export default function Career() {
  return (
    <>
      <section className="hero">
        <h2 className="heroHeading1">Join our </h2>
        <h2 className="heroHeading2">mission</h2>
        <p>
          Be part of a team transforming border technology and immigration
          solutions for airports and governments worldwide.
        </p>
      </section>
      <AdvMagSolution />
      <Opportunities />
      <Resume />
    </>
  );
}
