import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <h1>{t("MainPage")}</h1>
      <p>{t("Text")}</p>
    </>
  );
};

export default MainPage;
