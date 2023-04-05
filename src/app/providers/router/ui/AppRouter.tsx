import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { userAuthDataSelector } from 'entities/User';

export const AppRouter = () => {
    const isAuth = useSelector(userAuthDataSelector);

    const routes = useMemo(() => (
        routeConfig.filter((route) => !(route.authOnly && !isAuth))
    ), [isAuth]);

    return (
        <Routes>
            {routes.map(({ element, path, ...routeProps }) => (
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
