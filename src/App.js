import React, { useState, useEffect } from 'react'
import { useDataEngine } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { HomePage } from './components/HomePage';
import { HorizontalLabelPositionBelowStepper } from './components/pages/Content';
import { Presentations } from './components/Presentations';
import { DataProvider } from '@dhis2/app-runtime'
import D2UIApp from '@dhis2/d2-ui-app';
import { Store } from './Store';
import { Provider } from './context/context';
import { useConfig } from '@dhis2/app-runtime';
import 'antd/dist/antd.css';
import './styles/tailwind.css';

const MyApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (page) => () => {
    setCurrentPage(page);
  }

  const engine = useDataEngine();
  const { baseUrl, apiVersion } = useConfig();
  const rootStore = new Store(engine, baseUrl, apiVersion);

  useEffect(() => {
    rootStore.setD2().then(() => {
      rootStore.fetchPresentations();
    })
  }, [rootStore]);


  const displayPage = () => {
    switch (currentPage) {
      case 1:
        return <HomePage newPresentation={changePage(2)} viewPresentations={changePage(3)} />
      case 2:
        return <HorizontalLabelPositionBelowStepper />
      case 3:
        return <Presentations />
      case 4:
        return <PresentationList newPresentation={changePage(4)} />
      default:
        return <HomePage newPresentation={changePage(2)} viewPresentations={changePage(3)} />
    }
  }

  return <Provider value={rootStore}>
    <D2UIApp>
      <DataProvider>
        {displayPage()}
      </DataProvider>
    </D2UIApp>
  </Provider>
}

export default MyApp
