import { IStyle } from "./interface";

const agents = ["android", "iphone", "windows phone", "ipad", "ipod"];

type IStyleFn = <T>(obj: IStyle) => (...args: T[]) => T | T[];
interface IStyleParams {
  middlewares: { [key: string]: <T>(value: any) => (ele: T) => T };
  isPc: boolean;
  use: (key: string, fn: <T>(value: any) => (ele: T) => T) => void;
  setStyle: <T>(obj: IStyle) => (ele: T) => T;
  makeOutEnterStyle: <T>(obj: IStyle) => [Function, Function];
  createBaseStyle: (obj: IStyle) => IStyle;
  [key: string]: any;
}

const style: IStyleFn & IStyleParams = <T>(obj: IStyle) => {
  return (...args: T[]): T | T[] => {
    function doTarget(ele: any) {
      Object.keys(obj).forEach(k => {
        const v = obj[k];
        const fn = style.middlewares[k];
        if (fn) {
          fn(v)(ele);
        } else {
          ele.style[k] = v;
        }
      });
    }
    args.forEach((t: any) => {
      doTarget(t);
    });

    if (args.length === 1) {
      return args[0];
    }
    return args;
  };
};

style.middlewares = {};
style.createBaseStyle = (obj: IStyle) => obj;

style.setStyle = <T>(obj: IStyle) => {
  return (ele: T) => {
    Object.keys(obj).forEach(k => {
      const v = obj[k];
      if (style.middlewares[k]) {
        const fn = style.middlewares[k];
        fn(v)(ele);
      } else {
        (ele as any).style[k] = v;
      }
    });
    return ele;
  };
};

style.makeOutEnterStyle = (obj: IStyle) => {
  let lastStyle = null as any;
  function enter(ele: any) {
    if (!lastStyle) {
      lastStyle = {};
    }

    Object.keys(obj).forEach(k => {
      lastStyle[k] = (ele as any).style[k];
      (ele as any).style[k] = obj[k];
    });
  }
  function out(ele: any) {
    if (lastStyle) {
      Object.keys(lastStyle).forEach(k => {
        (ele as any).style[k] = lastStyle[k];
      });
    }
    lastStyle = null;
  }
  return [enter, out];
};

style.use = (key: string, fn: <T>(value: any) => (ele: T) => T) => {
  style.middlewares[key] = fn;
};

let isPc = true;
const ua = navigator.userAgent.toLowerCase();
for (let v = 0; v < agents.length; v++) {
  if (ua.indexOf(agents[v]) > 0) {
    isPc = false;
    break;
  }
}

style.isPc = isPc;

export default style;
