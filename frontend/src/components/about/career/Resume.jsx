import React, { useRef } from "react";
import "./Resume.css";

export default function Resume() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // opens file explorer
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
      alert(`Uploaded: ${file.name}`);
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        <h3>Don't see the right role?</h3>
        <p>
          We're always looking for talented individuals. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".pdf,.doc,.docx" // allowed file types
          onChange={handleFileChange}
        />

        {/* Button triggers file input */}
        <button onClick={handleButtonClick}>Submit Your Resume</button>
      </div>
    </div>
  );
}
