import { IProps, IStyle } from './interface';
export { IProps, IStyle };
declare const style: {
    <T>(target: T, obj: IStyle): T;
    sheet(obj: IStyle): IStyle;
};
export default style;
