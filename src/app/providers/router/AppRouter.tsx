import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'shared/ui';
import { routeConfig } from './routeConfig';

const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
