import { IProps, IStyle } from './interface';

export { IProps, IStyle };

const style = <T>(target: T, obj: IStyle): T => {
  Object.keys(obj).forEach(k => {
    (target as any).style[k] = obj[k];
  });

  return target;
};

style.css = (text: string, bem?: string) => {
  const ele = document.createElement('style');
  if (bem) {
    text = text.replace(/(\-bem\-)/g, `.${bem}`);
  }
  ele.type = 'text/css';
  ele.textContent = text;
  document.head.appendChild(ele);
};

style.class = <T>(target: T, className: string, bem?: string): T => {
  if (bem) {
    className = className.replace(/(\-bem\-)/g, `${bem}`);
  }
  (target as any).setAttribute('class', className);

  return target;
};

style.sheet = (obj: IStyle) => obj;

style.bem = () => {
  return `bem${Date.now().toString(32)}${Math.random()
    .toString(32)
    .slice(2)}`;
};

export default style;
