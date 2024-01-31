import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { LangSwitcher, ThemeSwitcher } from 'features';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.colapsed]: collapsed }, [className])}>
            <button type="button" onClick={toggleSidebar}>
                {t('Sidebar')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
