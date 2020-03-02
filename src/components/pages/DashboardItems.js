import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {useMst} from '../../context/context';

export const DashboardItems = observer(() => {
  const {settings} = useMst();

  const selectedDashboards = settings.dashboards.filter(dash => {
    return settings.assignedItemStore.state.indexOf(dash.id) !== -1;
  });

  const [currentDashboard, setCurrentDashboard] = useState(
    selectedDashboards.length > 0 ? selectedDashboards[0] : {}
  );

  return (
    <div className="h-auto px-4">
      <div className="flex md:flex-row flex-wrap h-full">
        <div className="w-full md:w-1/4 bg-gray p-4 ">
          <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
            <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
              {selectedDashboards.map(dashboard => (
                <a
                  href="#"
                  onClick={() => setCurrentDashboard(dashboard)}
                  className="block group p-4 border-b bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white"
                >
                  <p className="text-base mb-1 text-blue group-hover:text-white">
                    {dashboard.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 bg-red p-4 pt-10">
          <div className="w-full p-4 bg-white flex md:flex-row flex-wrap text-left ">
            {JSON.stringify(currentDashboard, null, 2)}
          </div>
        </div>
      </div>
    </div>
  );
});
