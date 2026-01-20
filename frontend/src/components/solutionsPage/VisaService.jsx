import React from "react";
import { CheckCircle, FileText, ArrowRight } from "lucide-react";
import "./VisaServices.css";

export default function VisaService() {
  return (
    <section className="visa-section">
      <div className="visa-container">
        {/* LEFT CONTENT */}
        <div className="visa-content">
          <div className="visa-icon-header">
            <div className="visa-gradient-box-heading">
              <FileText size={45} strokeWidth={1.5} color="white" />
            </div>
            <h2 className="visa-title">Visa Services</h2>
          </div>

          <h4 className="visa-subtitle">Digital Visa Processing</h4>
          <p className="visa-description">
            End-to-end digital visa application and processing system for
            governments and diplomatic missions worldwide.
          </p>

          <h4 className="visa-key-title">Key Features</h4>
          <ul className="visa-feature-list">
            <li>
              <CheckCircle size={18} color="green" /> Online visa application
              portal
            </li>
            <li>
              <CheckCircle size={18} color="green" /> Document verification and
              authentication
            </li>
            <li>
              <CheckCircle size={18} color="green" /> Automated eligibility
              checking
            </li>
            <li>
              <CheckCircle size={18} color="green" /> Secure payment processing
            </li>
            <li>
              <CheckCircle size={18} color="green" /> Application tracking
              system
            </li>
            <li>
              <CheckCircle size={18} color="green" /> Integration with consular
              systems
            </li>
          </ul>

          <div className="visa-benefits-box">
            <h4>Benefits</h4>
            <ul>
              <li>• Process applications 80% faster</li>
              <li>• Reduce manual processing errors</li>
              <li>• Enhanced security and fraud detection</li>
              <li>• 24/7 applicant self-service</li>
            </ul>
          </div>

          <button className="lrn-more-btn">
            Learn more <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="visa-imagebox">
          <div className="visa-gradient-box">
            <FileText size={100} color="white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
