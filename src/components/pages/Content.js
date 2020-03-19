import React from 'react';

import { Dashboard } from '../Dashboard';
import { DashboardItems } from './DashboardItems';
import { EditContents } from './EditContents';
import { SlideOptions } from './SlideOptions';
import { observer } from 'mobx-react';
import { useMst } from '../../context/context';
import { Steps, message, Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';


const { Step } = Steps;
const steps = [
  {
    title: 'Select Dashboards',
    content: <Dashboard />,
  },
  {
    title: 'Select Dashboard Items',
    content: <DashboardItems />,
  },
  {
    title: 'Edit Contents',
    content: <EditContents />,
  }, {
    title: 'Slide Options',
    content: <SlideOptions />,
  }
];


export const HorizontalLabelPositionBelowStepper = observer(() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const store = useMst();


  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <div className="p-2 flex flex-col">
      <div className="">
        <Steps current={activeStep} >
          {steps.map((item,i,icon) => {
            if(i<activeStep){
              return <Step key={item.title} title={item.title}
                    icon={<CheckCircleFilled  style={{ size:'large', color: '	#3DC807' }}/>}/>
            }
            else {
              return <Step key={item.title} title={item.title} />
            }
          })}
        </Steps>
        <div className="mt-10">{steps[activeStep].content}</div>
      </div>
      <div className="bottom-0 absolute flex mb-10" style={{ width: '99%' }}>
        <div className="w-1/2 text-left">
          {activeStep > 0 && (
            <Button onClick={() => handleBack()}>
              Previous
            </Button>
          )}
        </div>
        <div className="w-1/2 text-right">
          {activeStep < steps.length - 1 && (
            <Button type="primary" onClick={() => handleNext()}>
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button type="primary" onClick={store.savePresentation}>
              Save Presentation
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});