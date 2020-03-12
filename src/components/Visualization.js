import React, { useEffect } from 'react';
import { useMst } from '../context/context';
import { observer } from 'mobx-react';

export const Visualization = observer(({ item, height, width }) => {
  const store = useMst();

  let style = {
    height: height || '75vh',
    padding: '0 4px 4px',
  };

  if (width) {
    style = { ...style, width }
  }

  useEffect(() => {
    item.load();
  });

  return <div>
    <div>{item.name}</div>
    <div id={item.getItemId} style={style}></div>
  </div>
});