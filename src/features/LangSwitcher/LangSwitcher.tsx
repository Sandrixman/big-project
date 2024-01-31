import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            buttonTheme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};
