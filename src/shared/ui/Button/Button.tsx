import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonTheme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, buttonTheme, ...otherProps
    } = props;

    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[buttonTheme], className])}
            {...otherProps}
        >
            {children}
        </button>
        /* eslint-enable react/jsx-props-no-spreading */
    );
};
