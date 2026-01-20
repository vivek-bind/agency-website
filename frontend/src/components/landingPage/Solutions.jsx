import React from "react";
import "./solutions.css";
import { DoorOpen, BarChart3, FileText, Network } from "lucide-react";

const Solutions = () => {
  const items = [
    {
      icon: DoorOpen,
      title: "E-Borders Solutions",
      desc: "Automated border control for seamless passenger processing",
    },
    {
      icon: BarChart3,
      title: "Analytics Platform",
      desc: "Real-time insights into passenger flow and operations",
    },
    {
      icon: FileText,
      title: "Immigration Services",
      desc: "Digital visa processing for governments worldwide",
    },
    {
      icon: Network,
      title: "DNS Monitoring",
      desc: "Network security protecting critical infrastructure",
    },
  ];

  return (
    <section className="solutions">
      <h2>Our Solutions</h2>
      <p>
        Advanced technology solutions for airports, borders, and government
        agencies
      </p>

      <div className="solutions-grid">
        {items.map((sol, index) => (
          <div key={index} className="solution-card">
            <sol.icon size={48} className="solution-icon" />
            <h3>{sol.title}</h3>
            <p>{sol.desc}</p>
          </div>
        ))}
      </div>

      <button className="explore-btn">Explore all solutions</button>
    </section>
  );
};

export default Solutions;
