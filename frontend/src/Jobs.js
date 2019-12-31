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

function Jobs({ jobs }) {
  const numberJobs = jobs.length;
  return (
    <div className="Jobs">
      <Header />
      {jobs.map(job => (
        <Job job={job} />
      ))}
      <ProgressMobileStepper numberJobs={numberJobs} />
    </div>
  );
}

function Header({ numberJobs }) {
  return (
    <Fragment>
      <Typography variant="h4">Empregos FullStack de ITJobs</Typography>
      <Typography variant="h6"> Encontrado {numberJobs} trabalhos </Typography>
    </Fragment>
  );
}

function ProgressMobileStepper({ numberJobs }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

export default Jobs;
