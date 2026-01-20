import React from "react";
import ContactForm from "./ContactForm";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <>
      <section className="hero">
        <h1>
          <span className="heroHeading1">Let's talk about </span>
          <br />
          <span className="heroHeading2">your project </span>
        </h1>
        <p>
          Have questions? Want to discuss your infrastructure needs? Our team is
          here to help you succeed.
        </p>
      </section>
      <ContactForm />
      <div className="address-page">
        <h1>How can we help?</h1>
        <p>
          Choose the department that best fits your needs, and our specialized
          team will assist you.
        </p>
        <div>
          <h3>sales</h3>
          <p>Learn about our solutions</p>
        </div>
        <div>
          {" "}
          <h3>Supports</h3>
          <p>Technical assistance</p>
        </div>
        <div>
          <h3>Partnerships</h3>
          <p>Collaboration opportunities</p>
        </div>
        <div>
          <h3>Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 7:00 PM EST</p>
          <p>Saturday: Closed</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h1>Visit Our Office</h1>
          <p>Located in the heart of Dubai, UAE. We're here to welcome you.</p>

          <div className=" flex justify-center rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.463539092785!2d55.14534561501014!3d25.0780879839537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cce4b8a5d6d%3A0x3d712c01a6a1b6b0!2sONE%20JLT%20-%20One%20Business%20Centre%20DMCC!5e0!3m2!1sen!2sae!4v1696586000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAG Solutions HQ Map"
            ></iframe>
          </div>

          <div>
            <h3>MAG Solutions HQ</h3>
            <p>
              Silver Tower, 22nd Floor Cluster I, Jumeirah Lakes Towers Dubai,
              United Arab Emirates
            </p>
            <button>Get Direction </button>
          </div>
          <div>
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM EST</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
