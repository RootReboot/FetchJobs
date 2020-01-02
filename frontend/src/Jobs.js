import React, { Fragment } from "react";
import { Typography, Button, MobileStepper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

import Job from "./Job";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

function Header({ numberJobs }) {
  return (
    <Fragment>
      <Typography variant="h4">Empregos FullStack de ITJobs</Typography>
      <Typography variant="h6"> Encontrado {numberJobs} trabalhos </Typography>
    </Fragment>
  );
}

function JobsInEachPage({ jobs }, { activeStep }) {
  const jobsOnPage = jobs.slice(activeStep * 10, activeStep * 10 + 10);
  return (
    <Fragment>
      {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            console.log("clicked");
          }}
        />
      ))}
    </Fragment>
  );
}

function ProgressMobileStepper({ numberJobs }, { activeStep }, setActiveStep) {
  console.log(numberJobs);
  console.log(activeStep);
  const classes = useStyles();
  const theme = useTheme();
  const numberOfSteps = Math.ceil(numberJobs / 10);
  //step == 0 0-10
  //step == 1 10,20
  //step == 20,30

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Fragment>
      <div>
        Page {activeStep + 1} of {numberOfSteps}
      </div>
      <MobileStepper
        variant="progress"
        steps={numberOfSteps}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numberOfSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Fragment>
  );
}

function Jobs({ jobs }) {
  const numberJobs = jobs.length;
  const [activeStep, setActiveStep] = React.useState(0);
  //I can't call the functions as components because for some reason
  //When i pass variables create by React.useState they are undefined
  return (
    <div className="Jobs">
      <Header numberJobs={numberJobs} />
      {JobsInEachPage({ jobs }, { activeStep })}
      {ProgressMobileStepper({ numberJobs }, { activeStep }, setActiveStep)}
    </div>
  );
}

export default Jobs;
