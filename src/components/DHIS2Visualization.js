import React, {useEffect, useState} from 'react';
import {useMst} from '../context/context';
import {observer} from 'mobx-react';
import {isEmpty} from 'lodash';
import VisualizationPlugin from '@dhis2/data-visualizer-plugin';

export const DHIS2Visualization = observer(({item, height, width, style = {}}) => {
  const [visualization, setVisualization] = useState({})
  const store = useMst();

  useEffect(() => {
    store.currentPresentation.fetchItem(item).then(i => {

      if (item.type === 'REPORT_TABLE') {
        const {id, ...others} = i;
        setVisualization({...others, type: 'PIVOT_TABLE'});
      } else {
        setVisualization(i);
      }

    });
  }, [store]);

  return !isEmpty(visualization) ? <VisualizationPlugin
    d2={store.d2}
    visualization={visualization}
    forDashboard={true}
    style={{...style, width, height}}
  /> : <div>Loading</div>
});
