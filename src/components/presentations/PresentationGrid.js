import React from 'react';
import {LiveTv} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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


export const PresentationGrid = ({newPresentation}) =>{
    return (
        <div className="flex flex-col px-16">
            <div class="flex mb-6">
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48"><MoreVertIcon/></div>
            </div>
            <div class="flex mb-4">
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48 mr-3"><MoreVertIcon/></div>
                <div class="w-1/4 bg-blue-500 h-48"><MoreVertIcon/></div>
            </div>
            <Fab size="medium" style={style} color="primary" onClick={newPresentation}>
                <AddIcon />
            </Fab>
        </div>
      );
}