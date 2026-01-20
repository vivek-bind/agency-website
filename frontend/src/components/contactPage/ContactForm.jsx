import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    department: "sales",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/send-mail", formData);
      setStatus("Message sent successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        company: "",
        department: "sales",
        message: "",
      });
    } catch (err) {
      setStatus("Failed to send message!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form-page">
      <h3>Send us a message</h3>
      <p>Fill out the form below and we'll get back to you within 24 hours.</p>

      <section id="contact-form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            className="input-box"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="input-box"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label htmlFor="company">Company Name</label>
          <input
            className="input-box"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
          />

          <label htmlFor="department">Department</label>
          <select
            className="input-box"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="partnerships">Partnerships</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            className="input-box message-box"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message ➤
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>{status}</p>
      </section>
    </div>
  );
}
