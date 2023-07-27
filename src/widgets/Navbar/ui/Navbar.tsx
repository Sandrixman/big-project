import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher, AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (className: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar)}>
      <div></div>
      <ThemeSwitcher />
      <nav className={classNames(cls.link)}>
        <AppLink to={"/"}>Main</AppLink>
        <AppLink to={"/about"}>About</AppLink>
      </nav>
    </div>
  );
};
