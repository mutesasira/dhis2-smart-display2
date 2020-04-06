import React, { useState } from 'react';
import ReactSearchBox from 'react-search-box';
import { PresentationGrid } from './presentations/PresentationGrid';
import { PresentationList } from './presentations/PresentationList';
import { PresentationSingle } from './presentations/PresentationSingle';
import { List, GridOn, CheckBoxOutlineBlankOutlined } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {
  useLocation,
  useHistory
} from "react-router-dom";
import { observer } from 'mobx-react';
import { useMst } from '../context/context';
import { Preview } from './presentations/Preview';


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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export const Presentations = observer(() => {
  const store = useMst()
  const query = useQuery();
  const history = useHistory();


  const showPage = () => {
    switch (query.get('mode')) {
      case 'list':
        return <PresentationList />
      case 'grid':
        return <PresentationGrid />
      case 'single':
        return <PresentationSingle />
      default:
        return <PresentationList />
    }
  }

  const changeMode = (mode) => () => {
    history.push(`?page=3&mode=${mode}`)
    
  }


  
  return (
    <div className="h-auto mt-4">
      <div className="flex px-16 py-4">
        <div className="flex">
          <h1>
            View as
            <List  onClick={changeMode('list') } />
            <CheckBoxOutlineBlankOutlined onClick={changeMode('single')} />
            <GridOn onClick={changeMode('grid')} />
          </h1>
        </div>
        <div className="ml-auto">
          <ReactSearchBox
            placeholder="Search Presentation"
          />
        </div>
      </div>

      <div>{showPage()}</div>
      <Fab
          size="medium"
          style={style}
          color="primary"
          //onClick={() => history.push('?page=2')}
          >
          <AddIcon />
        </Fab>
      <Fab color="secondary" aria-label="edit" color="primary">
        <HomeIcon />
      </Fab>
      <Preview/>
    </div>
  )
})