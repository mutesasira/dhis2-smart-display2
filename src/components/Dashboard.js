import React, { useEffect } from 'react';
import GroupEditor from "./GroupEditor";
import { InputField } from "@dhis2/d2-ui-core";
import { observer } from 'mobx-react';
import { useMst } from '../context/context'

export const Dashboard = observer(() => {
  const store = useMst();
  useEffect(() => {
    store.fetchDashboards();
  }, [store])
  return (
    <div className="px-6">
      {/* <InputField
        id="filter"
        label="Filter dashboards"
        type="text"
        fullWidth
        onChange={() => console.log('XXX')}
      /> */}
      <GroupEditor className="dashboard w-full"
        itemStore={store.itemStore}
        assignedItemStore={store.assignedItemStore}
        onAssignItems={store.assignItems}
        onRemoveItems={store.unAssignItems}
        height={250}
      />
    </div>
  )
});