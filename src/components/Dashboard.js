import React, { useState } from 'react';
import i18n from '@dhis2/d2-i18n';
import GroupEditor from "./GroupEditor";
import { Store } from "@dhis2/d2-ui-core";
import { InputField } from "@dhis2/d2-ui-core";
import { useDataQuery } from '@dhis2/app-runtime'
// import HorizontalLabelPositionBelowStepper from './pages/Content'

import {useMst} from '../context/context'

const query = {
    dashboards: {
        resource: 'dashboards',
        params: {
            paging: false,
            fields: 'id,name'
        }
    },
}

export const Dashboard = () => {
    const [assignedItemStore, setAssignedItemStore] = useState(Store.create());
    const [itemStore, setItemStore] = useState(Store.create());

    const { loading, error, data } = useDataQuery(query)

    itemStore.state = [];
    assignedItemStore.state = [];

    const { settings } = useMst(store => ({
        settings: store.settings
    }));

    const assignItems = (items) => {
        const assigned = assignedItemStore.state.concat(items);
        assignedItemStore.setState(assigned);
        return Promise.resolve();

    }
    
    
    const unAssignItems = (items) => {
        const assigned = assignedItemStore.state.filter(item => items.indexOf(item) === -1);
        assignedItemStore.setState(assigned);
        return Promise.resolve();
    }

    const disaplyGroupEditor = (dashboards) => {
        let items = dashboards.map(d => {
            return { text: d.name, value: d.id };
        });

        itemStore.setState(items);

        return <div className="px-6">
            <InputField
                id="filter"
                label="Filter dashboards"
                type="text"
                fullWidth
                onChange={()=>console.log('XXX')}
            />
            <GroupEditor className="dashboard w-full"
                itemStore={itemStore}
                assignedItemStore={assignedItemStore}
                onAssignItems={assignItems}
                onRemoveItems={unAssignItems}
                height={250}
            />
        </div>
    }

    return (
        <div>
            {loading && <span>loading</span>}
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && (
                disaplyGroupEditor(data.dashboards.dashboards)
            )}
        </div>
    )
}