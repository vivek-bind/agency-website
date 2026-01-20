import React from "react";
import "./JobCards.css";
import { MapPin, Clock, Users } from "lucide-react";
export default function JobCards() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Build and scale our border technology platform with cutting-edge solutions.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Dubai, UAE / Remote",
      type: "Full-time",
      description:
        "Drive product strategy and roadmap for our E-Borders and immigration solutions.",
    },
    {
      title: "Solutions Architect",
      department: "Solutions",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Design and implement enterprise solutions for airports and government agencies.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description:
        "Ensure client satisfaction and success with our technology solutions.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Dubai, UAE / Remote",
      type: "Full-time",
      description:
        "Manage and optimize our cloud infrastructure and deployment pipelines.",
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Drive growth by bringing our solutions to airports and government organizations.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Dubai, UAE / Remote",
      type: "Full-time",
      description:
        "Create intuitive and beautiful interfaces for mission-critical systems.",
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Protect critical infrastructure with advanced security solutions and practices.",
    },
  ];
  return (
    <div className="job-card-main">
      <div className="job-cards-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3> {job.title}</h3>
            <p>{job.description}</p>
            <ul>
              <li>
                <Users size={18} className="icon" />
                {job.department}
              </li>
              <li>
                <MapPin size={18} className="icon" />
                {job.location}
              </li>
              <li>
                <Clock size={18} className="icon" />
                {job.type}
              </li>
            </ul>
            <button>Apply for this position</button>
          </div>
        ))}
      </div>
    </div>
  );
}
