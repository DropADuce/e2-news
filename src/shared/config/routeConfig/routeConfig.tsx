import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
];
