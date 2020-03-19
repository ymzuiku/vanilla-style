import { IStyle } from "./interface";
declare type IStyleFn = <T>(obj: IStyle) => (target: T) => T;
interface IStyleParams {
    middlewares: {
        [key: string]: <T>(value: any) => (ele: T) => T;
    };
    isPc: boolean;
    use: (key: string, fn: <T>(value: any) => (ele: T) => T) => void;
    setStyle: <T>(obj: IStyle) => (ele: T) => T;
    createOutEnterStyle: <T>(obj: IStyle, isKeep?: boolean) => [Function, Function];
    sheet: (obj: IStyle) => IStyle;
    [key: string]: any;
}
declare const style: IStyleFn & IStyleParams;
export default style;
