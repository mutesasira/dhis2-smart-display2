import React, {useEffect, useState} from 'react';
import GroupEditor from "./GroupEditor";
import {observer} from 'mobx-react';
import {useMst, useWindowDimensions} from '../context/context'
import {Input} from 'antd';

export const Dashboard = observer(() => {
  const store = useMst();
  const {Search} = Input;
  const {height} = useWindowDimensions();
  const [filtered, setFiltered] = useState('')

  return (
    <div className="px-8">
      <Search
        size="large"
        placeholder="Filter Dashboards"
        value={filtered}
        onChange={(e) => setFiltered(e.target.value)}
        className="mb-2"
      />
      <GroupEditor
        className="dashboard w-full"
        filterText={filtered}
        itemStore={store.itemStore}
        assignedItemStore={store.assignedItemStore}
        onAssignItems={store.assignItems}
        onRemoveItems={store.unAssignItems}
        height={height - 500}
      />
    </div>
  );
});
