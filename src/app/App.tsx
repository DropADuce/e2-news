import React, {Suspense} from "react";

import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/helpers/classNames";
import 'app/styles/index.scss';

export const App = () => {
    const [theme] = useTheme();

    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className='app__content'>
                    <Sidebar />
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    )
}
