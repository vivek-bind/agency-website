import React from "react";
import Hero from "../landingPage/Hero";
import EGateSolution from "./EGateSolution";
import AnalyticsPlatform from "./AnalyticsPlateform";
import VisaService from "./VisaService";
import DNSMonitoring from "./DNSMonitoring";
import CTA from "../landingPage/CTA";
import "./Solutions.css";

const Solutions = () => {
  return (
    <>
      <Hero />
      <EGateSolution />
      <AnalyticsPlatform />
      <VisaService />
      <DNSMonitoring />
      <CTA />
    </>
  );
};

export default Solutions;
