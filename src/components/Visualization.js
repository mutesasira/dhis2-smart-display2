import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useConfig} from '@dhis2/app-runtime';


export const Visualization = observer(({item, height, width}) => {
  const {baseUrl} = useConfig();

  useEffect(() => {
    item.load({baseUrl});
  });
  return <div id={item.getItemId} style={{width, height, margin: 0, padding: 0}}/>
});
