import React, { useEffect } from 'react';
import { useMst } from '../context/context';
import { observer } from 'mobx-react';

export const Visualization = observer(({ item, height, width }) => {
  let style = {
    height: height || '75vh'
  };

  if (width) {
    style = { ...style, width }
  }

  useEffect(() => {
    item.load();
  });

  return <div className="min-w-full min-h-full">
    <div>{item.name}</div>
    <div id={item.getItemId} style={style}></div>
  </div>
});