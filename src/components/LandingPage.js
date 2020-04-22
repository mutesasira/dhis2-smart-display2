import React from 'react';
import {observer} from 'mobx-react';
import {HomePage} from './HomePage';
import {HorizontalLabelPositionBelowStepper} from './pages/Content';
import {Presentations} from './Presentations';
import {SlideShow} from './SlideShow';
import {useMst} from "../context/context";
import InterpretationsDrawer from"./InterpretationsDrawer";

export const LandingPage = observer(() => {
  const store = useMst();
  switch (store.page) {
    case '1':
      return <HomePage/>
    case '2':
      return <HorizontalLabelPositionBelowStepper/>
    case '3':
      return <Presentations/>
    case '4':
      return <PresentationList/>
    case '5':
      return <SlideShow/>
    default:
      return <HomePage/>
  }
})
