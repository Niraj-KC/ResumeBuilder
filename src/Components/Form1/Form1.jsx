import React, { useState } from 'react';
import './Form1.css';
import { useDispatch, useSelector } from "react-redux";


import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import PersonalDetails from '../Form/PersonalDetails/PersonalDetails';
import Achivements from '../Form/Achivements/Achivements';
import Projects from '../Form/Projects/Projects';
import Education from './../Form/Education/Education';
import PastJob from './../Form/PastJob/PastJob';
import TechnicalSkill from './../Form/TechnicalSkill/TechnicalSkill';
import SoftSkills from './../Form/SoftSkills/SoftSkills';
import HeaderTemplate from '../../Utils/HeaderTemplate/HeaderTemplate';
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';
import Resume from '../Resume/Resume';

const steps = [
  {
    label: 'Personal Details',
    component: <PersonalDetails />,
  },
  {
    label: 'Education Details',
    component: <Education />,
  },
  {
    label: 'Job Details',
    component: <PastJob />,
  },
  {
    label: 'Skills',
    component: <>
      <SoftSkills />
      <TechnicalSkill />
    </>,
  },
  {
    label: 'Achivements',
    component: <Achivements />,
  },
  {
    label: 'Projects',
    component: <Projects />,
  },
];

const Form1 = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);

  const [activeStep, setActiveStep] = useState(0);
  const sx = {
    "& .MuiStepLabel-root .Mui-completed": {
      color: "green"
    },
    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
      color: "blue"
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "#326ab0"
    },
    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
      color: "red"
    },
    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
      fill: "white"
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can dispatch an action to submit formData to your desired endpoint
    console.log(formData);
    handleNext()
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <>
      <div>
        <HeaderTemplate />
        <form action="" method="post" onSubmit={handleSubmit} onKeyPress={handleKeyPress}>

          <div className="main-div">
            <div className="main-div-pannel">
              <div className="">
                <div className="template">
                  <div className="template-btn">
                    <div className="change-temp-action"><span>Templates</span></div>
                  </div>
                </div>

                
                  <div className="editor-area-blueline">
                    <Box sx={{ maxWidth: 400 }}>
                      <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                          <Step key={step.label} sx={sx}>
                            <StepLabel
                              optional={
                                index === steps.length - 1 ? (
                                  <Typography variant="caption">Last step</Typography>
                                ) : null
                              }
                            >
                              {step.label}
                            </StepLabel>
                            <StepContent>
                              {step.component}
                              <Box sx={{ mb: 2 }}>
                                <div>
                                  <Button
                                    variant="contained"
                                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
                                  </Button>
                                  <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    Back
                                  </Button>
                                </div>
                              </Box>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                      {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                          <Typography>All steps completed - you&apos;re finished</Typography>
                          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                          </Button>
                        </Paper>
                      )}
                    </Box>
                  </div>
                
              </div>
            </div>
            <div className="main-div-pannel">
              <Resume />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
