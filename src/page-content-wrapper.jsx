import React from 'react';
import { useGlobalState } from './global-state-provider';
import LoadingPage from './components/loading-indicators/loading-page';
import MainPage from './components/main-page/main-page';

const PageContentWrapper = () => {
    const { shouldDisplayLoadingPage } = useGlobalState();

    const content = shouldDisplayLoadingPage
      ? <LoadingPage />
      : <MainPage />
    
    return (
        <body className="page-content-wrapper">
            <MainPage />
        </body>
    )
};

export default PageContentWrapper;