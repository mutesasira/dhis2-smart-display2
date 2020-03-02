import React from 'react';
import EditIcon, { Edit, Info, PlayCircleOutline, Schedule } from '@material-ui/icons';

export const SlideOptions = () =>{
    return  (
        <div className="h-auto px-4">
            <div className="flex md:flex-row flex-wrap h-full ml-4">
                <div className="w-full md:w-1/2 bg-gray p-4 ">
                    <div>
                        <label className="block">
                            <Edit/><span className="text-blue-700">Presentation Name:</span>
                            <input className="form-input mt-1 block w-full" placeholder="Presentation Name"/>
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            <Info/><span className="text-blue-700">Description:</span>
                            <input className="form-input mt-1 block w-full" placeholder="Presentation Description"/>
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            <PlayCircleOutline/><span className="text-blue-700">Transition Mode:</span>
                            <input type="checkbox" class="form-checkbox">Slide</input>
                            <input type="checkbox" class="form-checkbox">Zoom</input>
                            <input type="checkbox" class="form-checkbox">Spin</input>
                            <input type="checkbox" class="form-checkbox">Fade</input>
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            <Schedule/><span className="text-blue-700">Transition Duration (Seconds):</span>
                            <input className="form-input mt-1 block w-full" placeholder="Presentation Name"/>
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