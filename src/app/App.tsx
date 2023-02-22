import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [])}>
                <Navbar/>
                <div className='app__content'>
                    <Sidebar />
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    );
};
