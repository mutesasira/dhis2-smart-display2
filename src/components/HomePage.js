import React from 'react';
import { Print, Tv, Slideshow, ImportContacts, Public, Schedule, LiveTv, Help, Description, Fullscreen, Dashboard } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import { observer } from 'mobx-react';
import { useMst } from '../context/context';
import { useHistory } from "react-router-dom";

//import '././styles/index.css';

const stepList = [
  { step: 'Select dashboards', key: 0 },
  { step: 'Select Dashboard Items', key: 1 },
  { step: 'Edit Contents', key: 2 },
  { step: 'Manage Slide Options', key: 3 },
  { step: 'Present', key: 4 },
];

const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',
};

export const HomePage = observer(() => {
  const store = useMst();

  let history = useHistory();

  const iconStyles = {
    largeIcon: {
      width: 80,
      height: 65,
    },
    AddIcon: {
      width: 40,
      height: 30,
    },
  };
  return (
    <div className="bg-white h-auto">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/12 bg-white p-4 text-right ml-4">
          <LiveTv style={iconStyles.largeIcon} />
        </div>
        <div className="w-full md:w-11/12 bg-white p-4 text-left  text-gray-700 -ml-5">
          <div className="">
            <h2 className="text-3xl opacity-35 text-blue-sd">
              DHIS2 Smart Display
                        </h2>
          </div>
          <div>
            <p className="text-gray-600 opacity-35">
              The Ultimate DHIS2 Digital Experience on smart screens
                        </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap h-full">
        <div className="w-full md:w-3/4 bg-white p-4 text-left text-gray-200">
          <div className="h-auto w-full p-6 -mt-6">
            <h1 className="text-gray-800 text-2xl">Welcome</h1>
            <p className="text-gray-700 pt-4"> The DHIS2 Smart display application gives you an ultimate to present your
            DHIS2 dashboard. No more hustle downloading analysis objects to create
            presentations. Smart display application gives you the fastest way to
            present your data to your audience.
                        </p>
          </div>
          <div className="w-full bg-white flex md:flex-row flex-wrap text-left">
            <div className="w-full md:w-1/2 bg-white text-left text-black p-4">
              <ul className="p-2">
                <li className="pt-2">
                  <h3>
                    <Fullscreen style={iconStyles.AddIcon} />{' '}
                                        Fullscreen Presentation
                                    </h3>
                </li>
                <li className="pt-2">
                  <h3>
                    <Slideshow style={iconStyles.AddIcon} />{' '}
                                        Multiple Transition Modes
                                    </h3>
                </li>
                <li className="pt-2">
                  <h3>
                    <Dashboard style={iconStyles.AddIcon} />{' '}
                                        Side by Side contents
                                    </h3>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-white text-left text-black p-4">
              <ul className="p-2">
                <li className="pt-2">
                  <h3>
                    <Schedule style={iconStyles.AddIcon} />{' '}
                                        Schedule sharing reports
                                    </h3>
                </li>
                <li className="pt-2">
                  <h3>
                    <Print style={iconStyles.AddIcon} />{' '}
                                        Supports Printing
                                    </h3>
                </li>
                <li className="pt-2">
                  <h3>
                    <Public style={iconStyles.AddIcon} />{' '}
                                        Built for everyone
                                    </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 bg-white flex md:flex-row flex-wrap text-left ">
            <div className="w-full md:w-1/4 bg-white text-left text-black p-4">
              <Link to="#">
                <h3 className="text-blue-sd opacity-30">
                  <Help style={iconStyles.AddIcon} />{' '}
                                    Help
                               </h3>
              </Link>
            </div>
            <div className="w-full md:w-3/4 bg-white text-left text-black p-4">
              <Link to="#">
                <h3 className="text-blue-sd opacity-30">
                  <Description style={iconStyles.AddIcon} />{' '}
                                    Documentation
                                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-white p-4 text-left text-gray-700 pt-10">
          <h3 className="font-extrabold"> Quick Steps</h3><br />
          <ol className="list-decimal pl-6">
            <li>Select dashboards</li>
            <li>Select Dashboard Items</li>
            <li>Edit Contents</li>
            <li>Manage slide options</li>
            <li>Save and Present</li>
          </ol>
          <h1 className="pt-5 font-bold">Click <AddIcon /> to create presentation</h1>
          <div className="pt-4 items-center">
            <button onClick={() => history.push("?page=3&mode=list")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded "  >
              View presentations
                        </button>
          </div>
        </div>
      </div>
      <Fab size="medium" style={style} color="primary" onClick={() => history.push("?page=2")}>
        <AddIcon />
      </Fab>
    </div>
  )
});