import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../context/context';

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

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

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

export const SlideShow = observer(() => {
  const store = useMst();

  const [height, setHeight] = useState(700);
  const [width, setWidth] = useState(700);
  const div = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height - 75);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <Deck theme={theme} template={template} transitionEffect="slide" animationsWhileGoingBack={true} loop={true}>
      {store.currentPresentation.selectedItems.map(item => <Slide key={item.id}>
        <FlexBox height="100%" ref={div}>
          <VisualizationItem height={height} width={width} item={item} />
        </FlexBox>
      </Slide>)}
    </Deck>
  );
})