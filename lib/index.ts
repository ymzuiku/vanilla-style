import { IProps, IStyle } from './interface';

export { IProps, IStyle };

const style = (target: any, obj: IStyle) => {
  Object.keys(obj).forEach(k => {
    target.style[k] = obj[k];
  });
};

const css = (text: string) => {
  const ele = document.createElement('style');
  ele.innerText = text;
  document.head.append(ele);
};

style.css = css;

export default style;
