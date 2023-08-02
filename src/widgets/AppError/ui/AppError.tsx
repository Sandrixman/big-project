import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppError.module.scss';

interface AppErrorProps {
  className?: string;
}

const reloadPage = () => {
  location.reload();
}

export const AppError = ({className}: AppErrorProps) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(cls.AppError, {}, [className])}>
      <h2>{t("AppError")}</h2>
      <button onClick={reloadPage}>{t("BtnErrorUpdate")}</button>
    </div>
  );
};
