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

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

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

export default function HorizontalLabelPositionBelowStepper() {
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
        <div className={classes.root}>
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
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
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
}