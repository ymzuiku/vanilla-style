import { IProps, IStyle } from './interface';
export { IProps, IStyle };
declare const style: {
    (target: any, obj: IStyle): void;
    css(text: string): void;
    sheet(obj: IStyle): IStyle;
};
export default style;
