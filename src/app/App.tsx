import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div
            className={classNames('app', { hovered: true, selected: false }, [theme])}
        >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
