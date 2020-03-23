import style from "./style";

import { IStyle } from "./interface";

style.use("$active", <T>(obj: IStyle) => {
  const [enter, out] = style.makeOutEnterStyle(obj);

  return (ele: T): T => {
    if (ele) {
      if (style.isPc) {
        (ele as any).addEventListener("mousedown", () => enter(ele));
        (ele as any).addEventListener("mouseup", () => out(ele));
        (ele as any).addEventListener("mouseleave", () => out(ele));
      } else {
        (ele as any).addEventListener("touchstart", () => enter(ele));
        (ele as any).addEventListener("touchend", () => out(ele));
        (ele as any).addEventListener("touchcancel", () => out(ele));
      }
    }
    return ele;
  };
});
