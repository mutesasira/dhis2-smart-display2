import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useConfig} from '@dhis2/app-runtime';


export const Visualization = observer(({item, height, width, style = {}}) => {
  const {baseUrl} = useConfig();

  useEffect(() => {
    item.load({baseUrl});
  });
  return <div id={item.getItemId} style={{...style, width, height}}/>
});
