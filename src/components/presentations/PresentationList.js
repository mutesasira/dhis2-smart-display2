import React from 'react';
import {LiveTv} from '@material-ui/icons';

const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',

  largeIcon: {
    width: 100,
    height: 100,
    align: 'center',
  },
  AddIcon: {
    width: 40,
    height: 30,
  },
};

export const PresentationList = () => {
  return (
    <div className="flex flex-col px-16">
      <div className="flex mb-2">
        <div className="w-full md:w-1/4 bg-blue-400 text-left text-gray-700 pt-6">
          <h3 className="font-extrabold">
            <LiveTv style={style.largeIcon} />
          </h3>
        </div>
        <div className="w-full md:w-3/4 bg-white text-left text-gray-200">
          <div className="h-auto w-full p-4 bg-gray-200">
            <h1 className="text-blue-600 text-2xl">
              Description of the demonstration of the XXX program
            </h1>
          </div>
          <div className="h-auto w-full p-4 bg-gray-200 text-black ">
            <h2>
              This is a very long test that is going to be describing the
              demonstartion of the presenation of the dashboard in question
            </h2>
          </div>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-full md:w-1/4 bg-blue-400 text-left text-gray-700 pt-6">
          <h3 className="font-extrabold">
            <LiveTv style={style.largeIcon} />
          </h3>
        </div>
        <div className="w-full md:w-3/4 bg-white text-left text-gray-200">
          <div className="h-auto w-full p-4 bg-gray-200">
            <h1 className="text-blue-600 text-2xl">
              Description of the demonstration of the XXX program
            </h1>
          </div>
          <div className="h-auto w-full p-4 bg-gray-200 text-black ">
            <h2>
              This is a very long test that is going to be describing the
              demonstartion of the presenation of the dashboard in question
            </h2>
          </div>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-full md:w-1/4 bg-blue-400 text-left text-gray-700 pt-6">
          <h3 className="font-extrabold">
            <LiveTv style={style.largeIcon} />
          </h3>
        </div>
        <div className="w-full md:w-3/4 bg-white text-left text-gray-200">
          <div className="h-auto w-full p-4 bg-gray-200">
            <h1 className="text-blue-600 text-2xl">
              Description of the demonstration of the XXX program
            </h1>
          </div>
          <div className="h-auto w-full p-4 bg-gray-200 text-black ">
            <h2>
              This is a very long test that is going to be describing the
              demonstartion of the presenation of the dashboard in question
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};