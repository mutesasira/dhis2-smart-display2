import React from 'react';
import { observer } from 'mobx-react';
import { HomePage } from './HomePage';
import { HorizontalLabelPositionBelowStepper } from './pages/Content';
import { Presentations } from './Presentations';
import { SlideShow } from './SlideShow';
import { useMst } from '../context/context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const LandingPage = observer(() => {
  const store = useMst()
  const displayPage = () => {
    switch (store.currentPage) {
      case 1:
        return <HomePage />
      case 2:
        return <HorizontalLabelPositionBelowStepper />
      case 3:
        return <Presentations />
      case 4:
        return <PresentationList />
      case 5:
        return <SlideShow />
      default:
        return <HomePage />
    }
  }

  return <Router>
    <Switch>
      <Route path="/configuration">
        <HorizontalLabelPositionBelowStepper />
      </Route>
      <Route path="/presentations">
        <Presentations />
      </Route>
      <Route path="/slides">
        <SlideShow />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
})