import React from "react";
import { CheckCircle, ArrowRight, BarChart3 } from "lucide-react";
import "./AnalyticsPlatform.css";

export default function AnalyticsPlatform() {
  return (
    <section className="analytics-section">
      <div className="analytics-container">
        {/* LEFT IMAGE BOX */}
        <div className="analytics-imagebox">
          <div className="analytics-gradient-box">
            <BarChart3 size={120} strokeWidth={1.5} color="white" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="analytics-content">
          <div className="analytics-gradient-box-heading">
            <BarChart3 size={45} strokeWidth={1.5} color="white" />
          </div>
          <h2 className="analytics-title">Analytics Platform</h2>
          <h4 className="analytics-subtitle">Advanced Data Intelligence</h4>
          <p className="analytics-description">
            Comprehensive analytics solution providing real-time insights into
            passenger flow, operational efficiency, and border security.
          </p>

          <h4 className="analytics-keyfeatures">Key Features</h4>
          <ul className="feature-list">
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" /> Real-time
              passenger flow analytics
            </li>
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" /> Predictive
              capacity planning
            </li>
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" /> Custom
              dashboard creation
            </li>
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" /> Automated
              reporting and alerts
            </li>
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" /> Historical
              trend analysis
            </li>
            <li>
              <CheckCircle size={18} color="green" id="aline-icon" />{" "}
              Performance benchmarking
            </li>
          </ul>

          <div className="benefits-box">
            <h4>Benefits</h4>
            <ul>
              <li>• Optimize staff allocation and reduce costs</li>
              <li>• Improve passenger experience with insights</li>
              <li>• Make data-driven operational decisions</li>
              <li>• Reduce bottlenecks by 60%</li>
            </ul>
          </div>

          <button className="lrn-more-btn">
            Learn more <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
