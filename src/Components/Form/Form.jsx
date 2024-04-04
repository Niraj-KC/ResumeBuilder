import React, { useState, useEffect } from 'react';
import './Form.css';
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../../Utils/config/config.js"

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
import { fetchData } from '../../state/action-creator/actions.js';


import html2pdf from 'html2pdf.js'; // Import html2pdf library

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

const Form1 = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const downloadResume = () => {
    const htmlContent = document.querySelector(".resume").outerHTML;

    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(htmlContent).set(opt).save();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can dispatch an action to submit formData to your desired endpoint
    console.log(formData);

    try {
      const user = JSON.parse(localStorage.getItem("AppUser"));

      var data = { user_id: user.id, ...formData };
      fetch(`${BASE_URL}/resume/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => {
          console.log("#reg-res: ", data);

        })

    } catch (err) {
      // setError('Invalid credentials');
      console.error(err);
    }

    handleNext()
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("AppUser"));
    console.log("user", user);
    if (user) {
      fetchData({ user_id: user.id }).then(data => {
        dispatch(data);
        console.log("fd: ", formData);
        setDataLoaded(true);
      })
      // call fetchData here
    }

  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts


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
                        <Typography>All steps completed - your resume is built</Typography>
                        <Button onClick={downloadResume} sx={{ mt: 1, mr: 1 }}>
                          Download PDF
                        </Button>
                      </Paper>
                    )}
                  </Box>
                </div>

              </div>
            </div>
            <div className="main-div-pannel">
              {
                isDataLoaded ?
                  <Resume /> : <></>
              }
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
