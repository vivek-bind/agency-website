import React from "react";
import "./OurValue.css";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

export default function OurValue() {
  const items = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering businesses to build the future with reliable, scalable infrastructure.",
    },
    {
      icon: Users,
      title: "Innovation First",
      description:
        "Constantly pushing boundaries to deliver cutting-edge solutions that anticipate tomorrow's needs.",
    },
    {
      icon: Lightbulb,
      title: "Customer Success",
      description:
        "Your success is our success. We're committed to being your trusted technology partner.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Building trust through transparency, security, and ethical business practices.",
    },
  ];
  return (
    <>
      <section className="our-values">
        <h2>Our Values</h2>
        <p>The principles that guide everything we do</p>
        <div className="values-grid">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="our-values-card">
                <Icon size={48} className="our-values-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
