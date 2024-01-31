import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children } = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className])}>
            {children}
        </Link>
    );
};
