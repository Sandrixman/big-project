import { MagnifyingGlass } from 'react-loader-spinner';
import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.wrapperLoader, {}, [className])}>
        <MagnifyingGlass
            wrapperClass={classNames(cls.Loader, {}, [className])}
        />
    </div>
);
