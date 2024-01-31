import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class cl1 cl2';
        expect(classNames('class', {}, ['cl1', 'cl2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class cl1 cl2 hovered';
        expect(classNames('class', { hovered: true, checked: false }, ['cl1', 'cl2'])).toBe(
            expected,
        );
    });

    test('with mods undefined', () => {
        const expected = 'class cl1 cl2 hovered';
        expect(classNames('class', { hovered: true, checked: undefined }, ['cl1', 'cl2'])).toBe(
            expected,
        );
    });
});
