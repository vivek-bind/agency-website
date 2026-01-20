import React from "react";
import { Network, CheckCircle, ArrowRight } from "lucide-react";
import "./DNSMonitoring.css";

export default function DNSMonitoring() {
  return (
    <section className="dns-section">
      <div className="dns-container">
        {/* LEFT IMAGE BOX */}
        <div className="dns-imagebox">
          <div className="dns-gradient-box">
            <Network size={100} color="white" strokeWidth={1.5} />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="dns-content">
          <div className="dns-icon-header">
            <div className="network-gradient-box-heading">
              <Network size={45} strokeWidth={1.5} color="white" />
            </div>
            <h2>DNS Monitoring</h2>
          </div>

          <h4 className="dns-subtitle">Network Infrastructure Security</h4>
          <p className="dns-description">
            Advanced DNS monitoring and security solution protecting critical
            infrastructure from cyber threats and ensuring optimal performance.
          </p>

          <h4 className="dns-key-title">Key Features</h4>
          <ul className="dns-feature-list">
            <li>
              <CheckCircle size={16} color="green" /> Real-time DNS query
              monitoring
            </li>
            <li>
              <CheckCircle size={16} color="green" /> DDoS attack detection and
              mitigation
            </li>
            <li>
              <CheckCircle size={16} color="green" /> DNS hijacking prevention
            </li>
            <li>
              <CheckCircle size={16} color="green" /> Performance optimization
            </li>
            <li>
              <CheckCircle size={16} color="green" /> Comprehensive logging and
              auditing
            </li>
            <li>
              <CheckCircle size={16} color="green" /> Global threat intelligence
              integration
            </li>
          </ul>

          <div className="dns-benefits-box">
            <h4>Benefits</h4>
            <ul>
              <li>• 99.99% uptime guarantee</li>
              <li>• Sub-millisecond threat detection</li>
              <li>• Prevent DNS-based attacks</li>
              <li>• Reduce latency by 45%</li>
            </ul>
          </div>

          <button className="lrn-more-btn">
            Learn more <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
