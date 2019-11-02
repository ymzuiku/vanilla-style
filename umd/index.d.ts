import { IProps, IStyle } from './interface';
export { IProps, IStyle };
declare const style: {
    <T>(target: T, obj: IStyle): T;
    css(text: string, bem?: string | undefined): void;
    class<T>(target: T, className: string, bem?: string | undefined): T;
    sheet(obj: IStyle): IStyle;
    bem(): string;
};
export default style;
