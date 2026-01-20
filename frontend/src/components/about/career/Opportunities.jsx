import React from "react";
import "./Opportunities.css";
import JobCards from "./JobCards";

export default function Opportunities() {
  return (
    <>
      <div className="opportunities">
        <h2>Open positions</h2>
        <p>Find your next opportunity with us</p>
      </div>
      <JobCards />
    </>
  );
}
