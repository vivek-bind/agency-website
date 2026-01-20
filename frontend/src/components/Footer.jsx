import React from "react";
import "./footer.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <h1 className="logo"></h1>
          <p>
            Advanced technology solutions for airports, borders, and government
            agencies worldwide.
          </p>
          <div className="social-icons-container">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon"
            >
              <FaTwitter size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social_icon"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Templates</li>
            <li>Docs</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Community</li>
            <li>Support</li>
            <li>API</li>
            <li>Status</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>

      <p className="footer-bottom">
        © 2025 MAG Solutions. All rights reserved. • Privacy • Terms • Cookies
      </p>
    </footer>
  );
};

export default Footer;
