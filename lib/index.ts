import { IProps, IStyle } from './interface';

export { IProps, IStyle };

const style = <T>(target: T, obj: IStyle): T => {
  Object.keys(obj).forEach(k => {
    (target as any).style[k] = obj[k];
  });

  return target;
};

style.sheet = (obj: IStyle) => obj;

export default style;
