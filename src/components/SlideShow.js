import React, {useCallback, useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import useFullscreenStatus, {useMst, useWindowDimensions} from '../context/context';
import createTheme from 'spectacle/lib/themes/default';
import {Deck, Slide,Text} from 'spectacle';
import {VisualizationItem} from "./pages/VisualizationItem";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#000000',
    textColor: '#327dcc',
  },
  {
    primary: 'Helvetica'
  },
);
const slideTheme = {
  controlColor: '#477fcc'
};

export const SlideShow = observer(() => {
  const store = useMst();
  const maximizableElement = React.useRef(null);
  const {height, width} = useWindowDimensions();
  let isFullscreen, setIsFullscreen;
  let errorMessage;
  try {
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  return store.currentPresentation.selectedItems.length > 0 ?
    <div ref={maximizableElement} style={{background: 'red'}}>
      <Deck
        transition={store.currentPresentation.transitionModes}
        transitionDuration={store.currentPresentation.transitionDuration}
        autoplay={true}
        autoplayDuration={store.currentPresentation.slideDuration}
        showFullscreenControl={false}
        controls={true}
        progress="none"
        theme={theme}
        contentHeight="100vh"
        contentWidth="100vw"
        autoplayLoop={true}
        autoplayOnStart={true}
        textColor={theme.textColor}
      >
        {store.currentPresentation.selectedItems.map(item =>
          <Slide
            key={item.id}
            fit={true}
            controlColor={slideTheme.controlColor}
            align="center center"
            contentStyles={{display: 'flex', flexDirection: 'column', zIndex: 0, textAlign: 'center'}}
            margin={0}
            padding={0}
            
          >
            <VisualizationItem item={item} height={height-40} width={width} style={{marginTop: 40}}/>
            {isFullscreen ? (
              <Fab
                size="medium"
                style={{
                  margin: 0,
                  top: 'auto',
                  left: 10,
                  bottom: 10,
                  right: 'auto',
                  zIndex: 10000,
                  position: 'fixed',
                }}
                color="primary"
                onClick={handleExitFullscreen}
              >
                <FullscreenExitIcon/>
              </Fab>
            ) : (
              <Fab
                size="medium"
                style={{
                  margin: 0,
                  top: 'auto',
                  left: 10,
                  bottom: 10,
                  right: 'auto',
                  zIndex: 10000,
                  position: 'fixed',
                }}
                color="primary"
                onClick={setIsFullscreen}
              >
                <FullScreenIcon/>
              </Fab>
            )}

            <Fab size="medium" color="primary" style={{
              height: '50px',
              margin: 0,
              zIndex: 10000,
              top: 'auto',
              right: 10,
              bottom: 10,
              left: 'auto',
              position: 'fixed',
            }}>
              <HomeIcon onClick={() => store.setPage('3')}/>
            </Fab>
          </Slide>)}
      </Deck>
    </div> : <div>
      No slides found
    </div>

})

