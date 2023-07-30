import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
const {t} = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div></div>
      <nav className={classNames(cls.link)}>
        <AppLink to={"/"}>{t("Main")}</AppLink>
        <AppLink to={"/about"}>{t("About")}</AppLink>
      </nav>
    </div>
  );
};
