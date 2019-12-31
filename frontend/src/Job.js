import React from "react";
import { Paper, Typography } from "@material-ui/core";

import "./App.css";

function Job({ job }) {
  return (
    <Paper className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company.name}</Typography>
      </div>
      <div>
        <Typography variant="h6">{job.publishedAt}</Typography>
      </div>
    </Paper>
  );
}

export default Job;
