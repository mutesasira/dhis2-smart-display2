import React from 'react';
import {useMst} from '../../context/context'

export const DashboardItems = () => {
    const { demo,settings } = useMst();

    return (
        <div className="h-auto px-4">
            <div className="flex md:flex-row flex-wrap h-full">
                <div className="w-full md:w-1/4 bg-gray p-4 ">
                    <div className="w-full p-4 bg-white flex md:flex-row flex-wrap text-left ">
                                    <pre>{JSON.stringify(settings,null,2)}</pre>
                        {demo}
                    </div>
                </div>
                <div className="w-full md:w-3/4 bg-red p-4 pt-10">
                    <div className="w-full p-4 bg-white flex md:flex-row flex-wrap text-left ">
                        Testing
                    </div>
                </div>
            </div>

        </div>
    )
}




