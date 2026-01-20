import React from "react";
import CTA from "../landingPage/CTA";
import "./ClientCard.css";
import { Landmark, Plane, Utensils, Mail } from "lucide-react";

export default function ClientCard() {
  return (
    <div>
      <div className="our-client">
        <h2>Our Clients</h2>
        <p>
          Delivering excellence in border technology and immigration solutions
        </p>
      </div>
      <div className="card-container">
        <div className="cards">
          <div className="client-icon">
            <Utensils size={20} strokeWidth={1.5} color="white" />
          </div>
          <h3>Nigeria Food Summit (NFS)</h3>
          <h4>Nigeria</h4>
          <p>
            Supporting Africa's premier food and agriculture technology
            conference with platform solutions.
          </p>
          <div className="services">
            <h4>Services</h4>
            <ul>
              <li>Analytics Platform</li>
              <li>Event Management</li>
              <li>Data Solutions</li>
            </ul>
          </div>
          <h4>Annual food summit</h4>
        </div>
        <div className="cards">
          <div className="client-icon">
            <Landmark size={20} strokeWidth={1.5} color="white" />
          </div>
          <h3>Joint Tax Board Nigeria (JTB)</h3>
          <h4>Nigeria</h4>
          <p>
            Powering tax administration with advanced analytics and immigration
            data integration.
          </p>
          <div className="services">
            <h4>Services</h4>
            <ul>
              <li>Analytics Platform</li>
              <li>Data Integration</li>
              <li>Compliance Systems</li>
            </ul>
          </div>
          <h4>National tax platform</h4>
        </div>
        <div className="cards">
          <div className="client-icon">
            <Mail size={20} strokeWidth={1.5} color="white" />
          </div>
          <h3>Nigerian Postal Service(NIPOST)</h3>
          <h4>Nigeria</h4>
          <p>
            Modernizing postal services with technology solutions for logistics
            and tracking.
          </p>
          <div className="services">
            <h4>Services</h4>
            <ul>
              <li>DNS Monitoring</li>
              <li>Network Solution</li>
              <li>Infrastructure</li>
            </ul>
          </div>
          <h4>National Postal Network</h4>
        </div>
        <div className="cards">
          <div className="client-icon">
            <Plane size={20} strokeWidth={1} color="white" />
          </div>
          <h3>The International Air Transport Association (IATA)</h3>
          <h4>International</h4>
          <p>
            Collaborating with the global aviation industry leader on border
            technology standards.
          </p>
          <div className="services">
            <h4>Services</h4>
            <ul>
              <li>E- Border Solutions</li>
              <li>Aviation Standards</li>
              <li>Global Integration</li>
            </ul>
          </div>
          <h4>290+ Airlines worldwide</h4>
        </div>
      </div>
      <CTA />
    </div>
  );
}
