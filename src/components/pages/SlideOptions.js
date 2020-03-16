import React from 'react';
import EditIcon, {
  Edit,
  Info,
  PlayCircleOutline,
  Schedule,
  Share,
  GroupAdd
} from '@material-ui/icons';
// import NumericInput from 'react-numeric-input';
import { observer } from 'mobx-react';
import { useMst } from '../../context/context';
import { Form, Input, Button, Checkbox, InputNumber, DatePicker, Select } from 'antd';

const plainOptions = ['slide', 'zoom', 'spin', 'fade'];

const { TextArea } = Input

export const SlideOptions = observer(() => {
  const { currentPresentation } = useMst();

  const [form] = Form.useForm();
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="flex md:flex-row flex-wrap h-full ml-6 py-0">
      <div className="flex flex-col w-full md:w-1/2 pr-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><Edit />Presentation Name:</div>
        <Input size="large" value={currentPresentation.name} placeholder="Presentation name" className="w-full" onChange={currentPresentation.onNameChange} />
      </div>
      <div className="flex flex-col w-full md:w-1/2 pl-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><Schedule />Slide duration (milliseconds):</div>
        <InputNumber onChange={currentPresentation.setSlideDuration} min={20000} max={60000} value={currentPresentation.slideDuration} step={1000} size="large" placeholder="input placeholder" />
      </div>

      <div className="flex flex-col w-full md:w-1/2 pr-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><Info />Description:</div>
        <TextArea value={currentPresentation.description} placeholder="Presentation description" onChange={currentPresentation.onDescriptionChange} className="w-full" rows={5} />
      </div>
      <div className="flex flex-col w-full md:w-1/2 pl-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><GroupAdd />Restrict Access to this presentation:</div>
        <Input size="large" placeholder="input placeholder" className="w-full" />
      </div>

      <div className="flex flex-col w-full md:w-1/2 pr-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><PlayCircleOutline />Transition mode:</div>
        <Checkbox.Group options={plainOptions} value={currentPresentation.transitionModes} onChange={currentPresentation.setTransitionModes} />
      </div>
      <div className="flex flex-col w-full md:w-1/2 pl-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><Edit />Schedule presentation (PDF) sharing:</div>
        <div className="flex w-full">
          {/* <Select defaultValue="lucy" className="w-1/2">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <DatePicker className="w-1/2" />
          <br />
          <br /> */}
          <div className="w-1/2">
            <Button icon={<GroupAdd />}>&nbsp;&nbsp;Add Recipients</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 pr-6 mb-10">
        <div className="-ml-6 mb-2 pr-2"><Edit />Transition duration (seconds):</div>
        <InputNumber min={100} max={1000} value={currentPresentation.transitionDuration} size="large" onChange={currentPresentation.setTransitionDuration} placeholder="input placeholder" />
      </div>
    </div>
  );
});
