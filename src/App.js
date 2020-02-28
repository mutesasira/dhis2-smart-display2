import React, { useState } from 'react'
import { useDataEngine } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { HomePage } from './components/HomePage';
import {HorizontalLabelPositionBelowStepper} from './components/pages/Content';
import './styles/tailwind.css';
import { Presentations } from './components/Presentations';
import { DataProvider } from '@dhis2/app-runtime'
import D2UIApp from '@dhis2/d2-ui-app';
import {Store} from './Store';
import {Provider} from './context/context'


const MyApp = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const changePage = (page) => () => {
        setCurrentPage(page);
    }
    const engine = useDataEngine();

    const rootStore = Store.create({engine});

    const displayPage = () => {
        switch (currentPage) {
            case 1:
                return <HomePage newPresentation={changePage(2)} viewPresentations={changePage(3)} />
            case 2:
                return <HorizontalLabelPositionBelowStepper />
            case 3:
                return <Presentations />
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
    </Provider>;
}

export default MyApp
