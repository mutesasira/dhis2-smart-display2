import React from 'react';
import EditIcon, { Edit, Info, PlayCircleOutline, Schedule } from '@material-ui/icons';
// import NumericInput from 'react-numeric-input';
import * as NumericInput from "react-numeric-input";

export const SlideOptions = () =>{
    return  (
        <div className="h-auto px-4">
            <div className="flex md:flex-row flex-wrap h-full ml-4">
                <div className="w-full md:w-1/2 bg-gray p-4 ">
                    <div>
                        
                        <label className="block py-2">
                            <Edit/><span className="text-blue-700">Presentation Name:</span><br/>
                            <input className="pl-2 appearance-none border rounded py-2 px-3 text-grey-darker w-full"></input>
                        </label>
                    </div>
                    <div>
                        <label className="block py-2">
                            <Info/><span className="text-blue-700">Description:</span><br/>
                            <input className="pl-2 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"></input>
                        </label>
                    </div>
                    <div>
                        <label className="block py-2"><br/>
                            <PlayCircleOutline/><span className="text-blue-700">Transition Mode:</span>
                            <input className="pl-2 shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"></input>
                        </label>
                    </div>
                    <div>
                        <Schedule/>
                            <label className="block py-2">
                            <span className="text-blue-700">Transition Duration (Seconds):</span><br/>
                            <NumericInput min={0} max={100} value={50}/>
                        </label>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-red p-4 pt-10">
                    <div className="w-full p-4 bg-white flex md:flex-row flex-wrap text-left ">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}