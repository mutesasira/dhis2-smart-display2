import React, {useEffect, useState} from 'react';
import {useMst} from '../context/context';
import {observer} from 'mobx-react';
import VisualizationPlugin from '@dhis2/data-visualizer-plugin';

export const DHIS2Visualization = observer(({item, height, width}) => {
  const [visualization, setVisualization] = useState({})
  const store = useMst();

  useEffect(() => {
    store.currentPresentation.fetchItem(item).then(i => {
      setVisualization(i);
    });
  }, [store]);

  return <VisualizationPlugin
    d2={store.d2}
    visualization={visualization}
    forDashboard={true}
  />
});
