import { IProps, IStyle } from "./interface";

export { IProps, IStyle };

const agents = ["android", "iphone", "windows phone", "ipad", "ipod"];

let isPc = true;
const ua = navigator.userAgent.toLowerCase();
for (let v = 0; v < agents.length; v++) {
  if (ua.indexOf(agents[v]) > 0) {
    isPc = false;
    break;
  }
}

const style = <T>(obj: IStyle) => {
  return (target: T): T => {
    Object.keys(obj).forEach(k => {
      if (k === "hover" || k === "active") {
        style[k]((obj as any)[k])(target);
      } else {
        (target as any).style[k] = obj[k];
      }
    });

    return target;
  };
};

style.sheet = (obj: IStyle) => obj;
style.hover = <T>(obj: IStyle) => {
  return (ele: T): T => {
    if (!isPc) {
      return ele;
    }
    let lastStyle = null as any;
    function enter(e: Event) {
      lastStyle = {};
      Object.keys(obj).forEach(k => {
        lastStyle[k] = (ele as any).style[k];
        (ele as any).style[k] = obj[k];
      });
    }
    function out(e: Event) {
      if (lastStyle) {
        Object.keys(lastStyle).forEach(k => {
          (ele as any).style[k] = lastStyle[k];
        });
      }
      lastStyle = null;
    }
    (ele as any).addEventListener("mouseenter", enter);
    (ele as any).addEventListener("mouseleave", out);

    return ele;
  };
};
style.active = <T>(obj: IStyle) => {
  return (ele: T): T => {
    let lastStyle = null as any;
    function enter(e: Event) {
      lastStyle = {};
      Object.keys(obj).forEach(k => {
        lastStyle[k] = (ele as any).style[k];
        (ele as any).style[k] = obj[k];
      });
    }
    function out(e: Event) {
      if (lastStyle) {
        Object.keys(lastStyle).forEach(k => {
          (ele as any).style[k] = lastStyle[k];
        });
      }
      lastStyle = null;
    }
    if (isPc) {
      (ele as any).addEventListener("mousedown", enter);
      (ele as any).addEventListener("mouseup", out);
      (ele as any).addEventListener("mouseleave", out);
    } else {
      (ele as any).addEventListener("touchstart", enter);
      (ele as any).addEventListener("touchend", out);
      (ele as any).addEventListener("touchcancel", out);
    }

    return ele;
  };
};

export default style;
