import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ element, path, ...routeProps }) => (
                <Route
                    {...routeProps}
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className='app__page-wrapper'>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};
