import React from "react";
import "./casestudies.css";
import {
  ArrowRight,
  Plane,
  Building2,
  Shield,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: Plane,
      icon2: TrendingUp,
      icon3: CheckCircle,
      icon4: ArrowRight,
      title: "Nigeria Inter Airport",
      stat: "70% faster processing",
      metric: "400 passengers/hour",
    },
    {
      icon: Building2,
      icon2: TrendingUp,
      icon3: CheckCircle,
      icon4: ArrowRight,
      title: "Abuja Home Office",
      stat: "5M visas processed",
      metric: "80% faster approval",
    },
    {
      icon: Shield,
      icon2: TrendingUp,
      icon3: CheckCircle,
      icon4: ArrowRight,
      title: "Nigerian Immigration",
      stat: "Enhanced security",
      metric: "30M passengers/year",
    },
  ];

  return (
    <section className="case-studies">
      <h2>Success Stories</h2>
      <p>
        See how our solutions are transforming airport and border operations
        worldwide
      </p>

      <div className="case-grid">
        {cases.map((item, i) => (
          <div key={i} className="case-card">
            <item.icon size={35} className="case-icon" />

            <h3>{item.title}</h3>
            <p className="stat">
              <CheckCircle size={20} color="#00C951" id="aline-icon" />
              &nbsp;
              {item.stat}
            </p>
            <p className="metris">
              <TrendingUp size={20} color="#2B7FFE" id="aline-icon" />
              &nbsp;
              {item.metric}
            </p>
            <button>
              Read case study &nbsp;
              <item.icon4 size={20} color="#51A2FF" id="aline-icon" />
            </button>
          </div>
        ))}
      </div>

      <button className="view-btn">View all case studies</button>
    </section>
  );
};

export default CaseStudies;
