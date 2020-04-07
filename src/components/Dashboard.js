import React, { useEffect } from 'react';
import GroupEditor from "./GroupEditor";
import { observer } from 'mobx-react';
import { useMst } from '../context/context'
import { Input } from 'antd';

export const Dashboard = observer(() => {
  const store = useMst();
  const { Search } = Input;
  
  return (
		<div className="px-8">
			
      <Search
      placeholder="Filter Dashboards"
      value={store.filterText}
      onSearch={(value) => store.filterChange(value)}
      fullWidth
  // onChange={(value) => store.filterChange(value)}
    />
			<GroupEditor
				className="dashboard w-full"
				itemStore={store.itemStore}
				assignedItemStore={store.assignedItemStore}
				onAssignItems={store.assignItems}
				onRemoveItems={store.unAssignItems}
				height={300}
			/>
		</div>
  );
});