import React from "react";
import "./OurProjects.css";

export default function OurProjects() {
  const projects = [
    {
      name: "Lagos Murtala Muhammed Airport E-Gates",
      description:
        "Implemented advanced border control solutions with biometric authentication systems",
    },
    {
      name: "Nigeria Immigration Service Digital Platform",
      description:
        "Developed comprehensive digital immigration services and visa processing system",
    },
    {
      name: "Abuja Nnamdi Azikiwe Airport Smart Border",
      description:
        "Deployed intelligent border management technology with real-time analytics",
    },
    {
      name: "Port Harcourt Airport Security System",
      description:
        "Integrated multi-layer security and passenger processing solutions",
    },
    {
      name: "Kano Airport Border Solutions",
      description:
        "Delivered seamless passenger verification and immigration services",
    },
    {
      name: "Nigeria National Entry System",
      description:
        "Established nationwide digital entry and exit management platform",
    },
    {
      name: "Federal Immigration Services Modernization",
      description:
        "Modernized visa and immigration processing with automated workflows",
    },
    {
      name: "Enugu Airport Analytics Platform",
      description:
        "Implemented real-time passenger flow and border analytics system",
    },
  ];

  return (
    <>
      <section className="our-projects">
        <h2>Our Projects</h2>
        <p>
          Transforming border technology and immigration services across the
          region
        </p>
        <div className="projects-cards">
          {projects.map((projects, index) => (
            <div key={index} className="project-card">
              <h3>{projects.name}</h3>
              <p>{projects.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
