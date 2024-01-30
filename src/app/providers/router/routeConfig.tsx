import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: '/about',
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
