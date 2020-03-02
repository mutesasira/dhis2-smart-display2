import React from 'react';
import EditIcon, {
  Edit,
  Info,
  PlayCircleOutline,
  Schedule,
  Share,
} from '@material-ui/icons';
// import NumericInput from 'react-numeric-input';
import * as NumericInput from 'react-numeric-input';

export const SlideOptions = () => {
  return (
    <div className="h-auto px-4">
      <div className="flex md:flex-row flex-wrap h-full ml-6 py-0">
        <div className="w-full md:w-1/2 bg-gray p-4  ">
          <label className="block py-2">
            <Edit />
            <span className="text-blue-700">Presentation Name:</span>
            <br />
            <input className="ml-6 appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
        </div>
        <div className="w-full md:w-1/2 bg-gray p-4">
          <label className="block py-2">
            <Schedule />
            <span className="text-blue-700">Slide Duration (Seconds):</span>
            <br />
            <NumericInput min={0} max={100} value={50} className="ml-6 " />
          </label>
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <label className="block py-2">
            <Info />
            <span className="text-blue-700">Description:</span>
            <br />
            <input className="ml-6 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
        </div>
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <label className="block py-2">
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
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <label className="block py-2">
            <br />
            <PlayCircleOutline />
            <span className="text-blue-700">Transition Mode:</span>
            <input className="ml-6 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full" />
          </label>
        </div>
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <label className="block py-2">
            <Schedule />
            <span className="text-blue-700">
              Schedule Presentation for Sharing
            </span>
            <br />
            <NumericInput min={0} max={100} value={50} className="ml-6" />
          </label>
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap h-full ml-6 pt-0">
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <label className="block py-2">
            <Schedule />
            <span className="text-blue-700">
              Transition Duration (Seconds):
            </span>
            <br />
            <NumericInput min={0} max={100} value={50} className="ml-6" />
          </label>
        </div>
        <div className="w-full md:w-1/2 bg-gray p-4 ">
          <button className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Share />
            Add Receipients
          </button>
        </div>
      </div>
    </div>
  );
};
