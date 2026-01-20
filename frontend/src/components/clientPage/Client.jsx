import React from "react";
import ClientCard from "./ClientCard";
import "./Client.css";

export default function Client() {
  return (
    <>
      <section className="hero">
        <h2 className="heroHeading1">Trusted by</h2>
        <h2 className="heroHeading2">leading organizations</h2>
        <p>
          Powering border technology and immigration solutions for airports,
          government agencies, and critical infrastructure globally.
        </p>
      </section>

      <ClientCard />
    </>
  );
}
