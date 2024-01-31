import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error('Повідомлення про помилку');
        }
    }, [error]);

    const toggleError = () => setError(true);

    return (
        <Button onClick={toggleError}>
            <h2>{t('BugTest')}</h2>
        </Button>
    );
};
