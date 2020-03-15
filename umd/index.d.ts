import { IProps, IStyle } from "./interface";
export { IProps, IStyle };
declare const style: {
    <T>(obj: IStyle): (target: T) => T;
    sheet(obj: IStyle): IStyle;
    hover<T>(obj: IStyle): (ele: T) => T;
    active<T>(obj: IStyle): (ele: T) => T;
};
export default style;
