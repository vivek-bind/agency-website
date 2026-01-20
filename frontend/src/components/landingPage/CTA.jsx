import React from "react";
import "./cta.css";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/Contact#contact-form");
  };

  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        <h2>
          Ready to build <br />{" "}
          <span className="hero2">something amazing?</span>
        </h2>
        <p>
          Join our platform and transform your airport and border operations
          with cutting-edge technology solutions.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
}
