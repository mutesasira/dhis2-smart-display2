import React from 'react';
import { LiveTv } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { observer } from 'mobx-react';

const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',

  largeIcon: {
    width: 100,
    height: 100,
    align: 'center',
  },
  AddIcon: {
    width: 40,
    height: 30,
  },
};

export const PresentationGrid = observer(({ newPresentation }) => {
  return (
    <div>
      <div class="grid grid-rows-2 grid-flow-col gap-4 px-2">
        <div class="hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
          <div className="align">
            <LiveTv />
          </div>
          <div className="content-right md:h-1/4">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Fab
        size="medium"
        style={style}
        color="primary"
        onClick={newPresentation}>
        <AddIcon />
      </Fab>
    </div>
  );
});
