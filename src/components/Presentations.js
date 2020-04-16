import React, {useState} from 'react';
import {PresentationGrid} from './presentations/PresentationGrid';
import {PresentationList} from './presentations/PresentationList';
import {PresentationSingle} from './presentations/PresentationSingle';
import {List, GridOn, CheckBoxOutlineBlankOutlined} from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {observer} from 'mobx-react';
import {useMst} from '../context/context';
import {Preview} from './presentations/Preview';
import {Input} from "antd";

const {Search} = Input;

const styleLeft = {
  margin: 0,
  top: 'auto',
  left: 40,
  bottom: 20,
  right: 'auto',
  position: 'fixed',

}

const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 20,
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


export const Presentations = observer(() => {
  const store = useMst();
  const [mode, setMode] = useState('list');

  const showPage = () => {
    switch (mode) {
      case 'list':
        return <PresentationList/>
      case 'grid':
        return <PresentationGrid/>
      case 'single':
        return <PresentationSingle/>
      default:
        return <PresentationList/>
    }
  }

  const changeMode = (mode) => () => setMode(mode);
  return (
    <div className="h-auto mt-4">
      <div className="flex px-16 py-4">
        <div className="flex">
          <h1>
            View as
            <List onClick={changeMode('list')}/>
            <CheckBoxOutlineBlankOutlined onClick={changeMode('single')}/>
            <GridOn onClick={changeMode('grid')}/>
          </h1>
        </div>
        <div className="ml-auto">
          <Search
            size="large"
            placeholder="Filter Dashboards"
            value={store.presentationFilter}
            onChange={store.setPresentationFilter}
          />
        </div>
      </div>

      <div>{showPage()}</div>
      <Fab
        size="medium"
        style={style}
        color="primary"
        onClick={store.createNewPresentation}
      >
        <AddIcon/>
      </Fab>
      <Fab style={styleLeft} aria-label="edit" color="primary">
        <HomeIcon onClick={() => store.setPage('3')}/>
      </Fab>
      <Preview/>
    </div>
  )
})
