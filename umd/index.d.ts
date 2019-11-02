import { IProps, IStyle } from './interface';
export { IProps, IStyle };
declare const style: {
    <T>(target: T, obj: IStyle): T;
    css(text: string, BEM?: string | undefined): void;
    class<T>(target: T, className: string, BEM?: string | undefined): T;
    sheet(obj: IStyle): IStyle;
};
export default style;
