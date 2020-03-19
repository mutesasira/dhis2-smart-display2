import React, { useEffect } from 'react'
import { useDataEngine } from '@dhis2/app-runtime'
import { DataProvider } from '@dhis2/app-runtime'
import { Store } from './Store';
import { Provider } from './context/context';
import { useConfig } from '@dhis2/app-runtime';
import 'antd/dist/antd.css';
import './styles/tailwind.css';
import { LandingPage } from './components/LandingPage';


const MyApp = () => {
  const engine = useDataEngine();
  const { baseUrl, apiVersion } = useConfig();
  const rootStore = new Store(engine, baseUrl, apiVersion);

  useEffect(() => {
    rootStore.setD2().then(() => {
      rootStore.fetchPresentations();
    })
  }, [rootStore]);

  return <Provider value={rootStore}>
    <DataProvider>
      <LandingPage />
    </DataProvider>
  </Provider>
}

export default MyApp
