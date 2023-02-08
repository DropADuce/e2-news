import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <div className='app__page-wrapper'>
            <Suspense fallback={<span>...loading...</span>}>
                <Routes>
                    {routeConfig.map((routeProps) => (
                        <Route
                            {...routeProps}
                            key={routeProps.path}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}
