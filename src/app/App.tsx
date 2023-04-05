import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
