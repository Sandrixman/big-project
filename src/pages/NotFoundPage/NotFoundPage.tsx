import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
    const { t } = useTranslation('notFound');
    return (
        <div>
            <h2>{t('title')}</h2>
        </div>
    );
};
