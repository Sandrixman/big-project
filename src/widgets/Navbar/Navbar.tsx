import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const aboutPath = '/about';

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div>
                <img src="" alt="" />
            </div>
            <nav className={classNames(cls.link)}>
                <AppLink to="/">{t('Main')}</AppLink>
                <AppLink to={aboutPath}>{t('About')}</AppLink>
            </nav>
        </div>
    );
};
