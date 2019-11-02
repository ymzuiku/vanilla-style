import { IProps, IStyle } from './interface';

export { IProps, IStyle };

const style = <T>(target: T, obj: IStyle): T => {
  Object.keys(obj).forEach(k => {
    (target as any).style[k] = obj[k];
  });

  return target;
};

style.css = (text: string, BEM?: string) => {
  const ele = document.createElement('style');
  ele.innerText = text;
  ele.type = 'text/css';

  if (BEM) {
    text = text.replace(/\.\^/g, `.${BEM}-`);
  }
  document.head.appendChild(ele);
};

style.class = <T>(target: T, className: string, BEM?: string): T => {
  if (BEM) {
    className = className.replace(/\^/g, `${BEM}-`);
  }
  (target as any).setAttribute('class', className);

  return target;
};

style.sheet = (obj: IStyle) => obj;

export default style;
