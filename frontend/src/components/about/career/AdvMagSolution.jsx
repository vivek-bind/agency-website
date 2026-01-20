import React from "react";
import "./AdvMagSolution.css";
import {
  Briefcase,
  TrendingUp,
  Coffee,
  Zap,
  MapPin,
  Clock,
  Users,
  DotIcon,
} from "lucide-react";
export default function AdvMagSolution() {
  const advantages = [
    {
      icon: Briefcase,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, equity packages, and comprehensive benefits.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Continuous learning, professional development, and clear career progression paths.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote options, and generous vacation policies.",
    },
    {
      icon: Zap,
      title: "Innovation Culture",
      description:
        "Work with cutting-edge technology and contribute to meaningful projects.",
    },
  ];
  const adictionalPerks = [
    { listItem: "Health insurance for you and your family" },
    { listItem: "Annual performance bonuses" },
    { listItem: "Professional development budget" },
    { listItem: "Latest tech equipment " },
    { listItem: "Flexible working arrangements" },
    { listItem: "Paid time off and holidays" },
    { listItem: "Team building events" },
    { listItem: "Relocation assistance" },
  ];
  return (
    <>
      <div className="adv-mag-solution">
        <h2>Why join MAG Solutions?</h2>
        <p>
          Work on meaningful projects that impact millions of travelers
          worldwide
        </p>
      </div>
      <div className="adv-cards-container">
        {advantages.map((adv, index) => (
          <div key={index} className="adv-card">
            <adv.icon size={20} className=" adv-card-icon" />
            <h3>{adv.title}</h3>
            <p>{adv.description}</p>
          </div>
        ))}
      </div>
      <div className="adictional-perk">
        <div className="adictional-perk-content">
          <h2>Additional perks</h2>
          <ul className="adictional-perk-list-container">
            {adictionalPerks.map((perk, index) => (
              <li key={index}>
                <DotIcon size={30} className="dot-icon" color="#00BCFF" />
                {perk.listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
