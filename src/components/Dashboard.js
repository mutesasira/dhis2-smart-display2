import React, { useState, useEffect } from 'react';
import i18n from '@dhis2/d2-i18n';
import GroupEditor from "./GroupEditor";
import { InputField } from "@dhis2/d2-ui-core";
// import HorizontalLabelPositionBelowStepper from './pages/Content'
import { observer } from 'mobx-react';
import { useMst } from '../context/context'

export const Dashboard = observer(() => {
  const store = useMst();

  useEffect(() => {
    store.currentPresentation.fetchDashboards();
  }, [store])
  return (
    <div className="px-6">
      <InputField
        id="filter"
        label="Filter dashboards"
        type="text"
        fullWidth
        onChange={() => console.log('XXX')}
      />
      <GroupEditor className="dashboard w-full"
        itemStore={store.currentPresentation.itemStore}
        assignedItemStore={store.currentPresentation.assignedItemStore}
        onAssignItems={store.currentPresentation.assignItems}
        onRemoveItems={store.currentPresentation.unAssignItems}
        height={250}
      />
    </div>
  )
});