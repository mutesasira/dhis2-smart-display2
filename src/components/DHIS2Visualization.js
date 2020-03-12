import React, { useEffect, useState } from 'react';
import { useMst } from '../context/context';
import { observer } from 'mobx-react';
import VisualizationPlugin from '@dhis2/data-visualizer-plugin';

export const DHIS2Visualization = observer(({ item, height, width }) => {
  const [visualization, setVisualization] = useState({})
  const store = useMst();
  let style = {
    height: height || '75vh',
    padding: '0 4px 4px',
    overflow: 'auto',
    maxHeight: 300,

  };

  if (width) {
    style = { ...style, width }
  }

  useEffect(() => {
    store.currentSetting.fetchItem(item).then(i => {
      setVisualization(i);
    });
  }, [store]);

  return <div style={style}>
    <VisualizationPlugin
      d2={store.d2}
      visualization={visualization}
      forDashboard={true}
    />
  </div>
});