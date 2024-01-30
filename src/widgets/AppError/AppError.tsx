import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './AppError.module.scss';

interface AppErrorProps {
    className?: string;
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const AppError = ({ className }: AppErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AppError, {}, [className])}>
            <h2>{t('AppError')}</h2>
            <Button
                type="button"
                onClick={reloadPage}
            >
                {t('BtnErrorUpdate')}
            </Button>
        </div>
    );
};
