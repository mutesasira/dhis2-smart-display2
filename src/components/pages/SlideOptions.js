import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import EditIcon, {
  Edit,
  Info,
  PlayCircleOutline,
  Schedule,
  Share,
  GroupAdd
} from '@material-ui/icons';
// import NumericInput from 'react-numeric-input';
import * as NumericInput from 'react-numeric-input';

export const SlideOptions = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <div className="h-auto px-4">
      <div className="flex md:flex-row flex-wrap h-full ml-6 py-0">
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 " placeholder = "Enter Presentation name">
            <Edit />
            <span className="text-blue-700">Presentation Name:</span>
            <br />
            <input className="ml-6 appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <Schedule />
            <span className="text-blue-700">Slide Duration (Seconds):</span>
            <br />
            <NumericInput min={0} max={100} value={50} className="ml-6 " />
          </label>
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <Info />
            <span className="text-blue-700">Description:</span>
            <br />
            <input className="ml-6 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <Info />
            <span className="text-blue-700">
              Restrict Access to this Presentation
            </span>
            <br />
            <button className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Share />
              Share
            </button>
          </label>
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <br />
            <PlayCircleOutline />
            <span className="text-blue-700">Transition Mode:</span>
            <input className="ml-6 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <Schedule />
            <span className="text-blue-700">
              Schedule Presentation for Sharing
            </span>
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Frequency"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Select Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </label>
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
          <label className="block py-2 w-full md:w-1/2 bg-gray p-4 ">
            <Schedule />
            <span class ame="text-blue-700">
              Transition Duragittion (Seconds):
            </span>
            <br />
            <NumericInput min={0} max={100} value={50} className="ml-6" />
          </label>
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <button className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <GroupAdd />
            Add Receipients
          </button>
        </div>
      </div>
    </div>
  );
};
