import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher, ThemeSwitcher } from "shared/ui";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.colapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleSidebar}>Sidebar</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
