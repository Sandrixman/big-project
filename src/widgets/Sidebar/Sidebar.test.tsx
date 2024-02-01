/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
import * as OriginalThemeSwitcherModule from 'features/ThemeSwitcher/ThemeSwitcher';
import * as OriginalLangSwitcherModule from 'features/LangSwitcher/LangSwitcher';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    beforeAll(() => {
        // Заміщення імпортів реальними реалізаціями
        jest
            .spyOn(OriginalThemeSwitcherModule, 'ThemeSwitcher')
            .mockImplementation(() => <div>Real ThemeSwitcher</div>);
        jest
            .spyOn(OriginalLangSwitcherModule, 'LangSwitcher')
            .mockImplementation(() => <div>Real LangSwitcher</div>);
    });

    afterAll(() => {
        // Відновлення оригінальних реалізацій після завершення тесту
        jest.restoreAllMocks();
    });

    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // Відображення реальних реалізацій ThemeSwitcher та LangSwitcher
        expect(screen.getByText('Real ThemeSwitcher')).toBeInTheDocument();
        expect(screen.getByText('Real LangSwitcher')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
