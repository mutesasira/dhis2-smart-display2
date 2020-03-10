import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Dashboard } from '../Dashboard';
import { DashboardItems } from './DashboardItems';
import { EditContents } from './EditContents';
import { SlideOptions } from './SlideOptions';
import { HomePage } from '../HomePage';
import { observer } from 'mobx-react';
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  };

const changeTheme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
          root: {
            '&$active': {
              color: green,
            },
            '&$completed': {
              color: green,
            },
          },
          text: {
            color: green
          },
         },
        }
});


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select Dashboards', 'Select Dashboard Items', 'Edit Contents', 'Slide Options'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Dashboard />;
        case 1:
            return <DashboardItems />;
        case 2:
            return <EditContents />;
        case 3:
            return <SlideOptions />;
        default:
            return <HomePage />;
    }
}

export const  HorizontalLabelPositionBelowStepper = observer(()=> {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root} style={style}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {activeStep === steps.length ? (
                    <div className="last-step">
                        <Typography className={classes.instructions}>Your Presentation has been saves succesfully</Typography>
                        <Button onClick={handleReset} >
                            New Presentation
                        </Button>
                    </div>
                ) : (
                        <div className="">
                            {getStepContent(activeStep)}
                            {/*{store.name}*/}
                            <div className="step-action mt-20">
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="backButton"
                                >
                                    Back
                        </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Save Presentation' : 'Next'}
                                </Button>

                                <Button variant="contained" style={style} color="primary" >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
});