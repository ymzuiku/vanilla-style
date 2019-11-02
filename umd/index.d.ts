import { IProps, IStyle } from './interface';
export { IProps, IStyle };
declare const style: {
    (target: any, obj: IStyle): void;
    css: (text: string) => void;
};
export default style;
