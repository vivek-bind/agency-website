import React from "react";
import { CheckCircle, ArrowRight, DoorOpen } from "lucide-react"; // icons
import "./EGateSolution.css";

export default function EGateSolution() {
  return (
    <section className="egate-section">
      <div className="egate-container">
        {/* LEFT CONTENT */}
        <div className="egate-content">
          <div className="egate-gradient-box-heading">
            <DoorOpen size={45} strokeWidth={1.5} color="white" />
          </div>
          <h2 className="egate-title">E-Gate Solutions</h2>
          <h4 className="egate-subtitle">Passenger Airport Gate Management</h4>
          <p className="egate-description">
            Advanced automated border control systems for seamless passenger
            processing at airports and border crossings.
          </p>

          <h4 className="egate-keyfeatures">Key Features</h4>
          <ul className="feature-list">
            <li>
              <CheckCircle size={18} color="green" />{" "}
              <span className="list-item">
                Automated passport scanning and verification
              </span>
            </li>
            <li>
              <CheckCircle size={18} color="green" />{" "}
              <span className="list-item">
                Biometric facial recognition technology
              </span>
            </li>
            <li>
              <CheckCircle size={18} color="green" />{" "}
              <span className="list-item">
                Real-time passenger flow management
              </span>
            </li>
            <li>
              <CheckCircle size={18} color="green" />{" "}
              <span className="list-item">
                Multi-language support interface
              </span>
            </li>
            <li>
              <CheckCircle size={18} color="green" />
              <span className="list-item">
                {" "}
                Integration with immigration databases
              </span>
            </li>
            <li>
              <CheckCircle size={18} color="green" />{" "}
              <span className="list-item">Queue management and analytics</span>
            </li>
          </ul>

          <div className="benefits-box">
            <h4>Benefits</h4>
            <ul>
              <li>• Reduce passenger processing time by 70%</li>
              <li>• Handle 400+ passengers per hour per gate</li>
              <li>• Seamless integration with existing systems</li>
            </ul>
          </div>

          <button className="lrn-more-btn">
            Learn more <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT ICON BOX */}
        <div className="egate-imagebox">
          <div className="egate-gradient-box">
            <DoorOpen size={120} strokeWidth={1.5} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
