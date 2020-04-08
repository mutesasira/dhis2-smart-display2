import React, { useCallback, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../context/context';
import SlideDrawer from './presentations/SlideDrawer'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import {
  useHistory
} from "react-router-dom";

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';

import { VisualizationItem } from './pages/VisualizationItem'
const drawerWidth = 260;

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
const styleLeft = {
  margin: 0,
  top: 'auto',
  left: 40,
  bottom: 20,
  right: 'auto',
  position: 'fixed',

}


const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  
}));
export const SlideShow = observer(() => {
  const store = useMst();
  const history = useHistory();

  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(700);
  const classes = useStyles();
  const theme = useTheme();


  if (store.presentations.length > 0) {
    store.setPresentation(store.presentations[0]);
  }

  const div = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height - 75);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return store.currentPresentation.selectedItems.length > 0 ? <Deck theme={theme} template={template} transitionEffect="slide" animationsWhileGoingBack={true} loop={true}>
    {store.currentPresentation.selectedItems.map(item => <Slide key={item.id} className="presentation-slide ">
      <FlexBox height="50%" ref={div} className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        <div className = "w-full md:w-3/4">
				<VisualizationItem height={height} width={width} item={item} />
			</div>
      <div className = "w-full md:w-1/4 bg-gray-400 h-full">
        <SlideDrawer/>
      </div>
      <Fab style={styleLeft} color="secondary" aria-label="edit" color="primary">
        <HomeIcon onClick={() => history.push('?page=3&mode=list')}/>
      </Fab>
      </FlexBox>
    </Slide>)}
    
  </Deck> : <div><pre>{JSON.stringify(store.currentPresentation, null, 2)}</pre></div>
  
})

