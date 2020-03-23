import { IStyle } from "./interface";
declare type IStyleFn = <T>(obj: IStyle) => (...args: T[]) => T | T[];
interface IStyleParams {
    middlewares: {
        [key: string]: <T>(value: any) => (ele: T) => T;
    };
    isPc: boolean;
    use: (key: string, fn: <T>(value: any) => (ele: T) => T) => void;
    setStyle: <T>(obj: IStyle) => (ele: T) => T;
    makeOutEnterStyle: <T>(obj: IStyle) => [Function, Function];
    createBaseStyle: (obj: IStyle) => IStyle;
    createSheet: (obj: {
        [key: string]: IStyle;
    }) => {
        [key: string]: (...args: HTMLElement[]) => HTMLElement | HTMLElement[];
    };
    [key: string]: any;
}
declare const style: IStyleFn & IStyleParams;
export default style;
