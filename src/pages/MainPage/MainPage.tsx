import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <h1>{t("MainPage")}</h1>
      <BugButton/>
    </>
  );
};

export default MainPage;
