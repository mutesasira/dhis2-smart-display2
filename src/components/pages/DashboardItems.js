import React from 'react';
import {observer} from 'mobx-react';
import {useMst} from '../../context/context'

export const DashboardItems = observer(() => {
    const { dashboards } = useMst();

    return (
        <div className="h-auto px-4">
            <div className="flex md:flex-row flex-wrap h-full">
                <div className="w-full md:w-1/4 bg-gray p-4 ">
                    <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
                        <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
                            {dashboards.map(dashboard=><a href="#" className="block group p-4 border-b bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white">
                            <p className="text-base mb-1 text-blue group-hover:text-white">{dashboard.name}</p>
                        </a>)}
                        </div>
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
})




