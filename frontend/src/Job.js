import React from "react";
import "./App.css";

function Job({ job }) {
  return (
    <div className="Job">
      {job.title}
      {job.company.name}
    </div>
  );
}

export default Job;
