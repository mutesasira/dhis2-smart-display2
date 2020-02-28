import React, { useState } from 'react';
import i18n from '@dhis2/d2-i18n';
import GroupEditor from "./GroupEditor";
import { InputField } from "@dhis2/d2-ui-core";
// import HorizontalLabelPositionBelowStepper from './pages/Content'
import {observer} from 'mobx-react';
import {useMst} from '../context/context'

export const Dashboard = observer(() => {
    const store = useMst();
    return (
        <div className="px-6">
            <InputField
                id="filter"
                label="Filter dashboards"
                type="text"
                fullWidth
                onChange={()=>console.log('XXX')}
            />
            <GroupEditor className="dashboard w-full"
                itemStore={settings.itemStore}
                assignedItemStore={settings.assignedItemStore}
                onAssignItems={settings.assignItems}
                onRemoveItems={settings.unAssignItems}
                height={250}
            />
        </div>
    )
});