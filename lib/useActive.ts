import style from "./style";

import { IStyle } from "./interface";

style.use("$active", <T>(obj: IStyle) => {
  const [enter, out] = style.createOutEnterStyle(obj);

  return (ele: T): T => {
    if (style.isPc) {
      (ele as any).addEventListener("mousedown", () => enter(ele));
      (ele as any).addEventListener("mouseup", () => out(ele));
      (ele as any).addEventListener("mouseleave", () => out(ele));
    } else {
      (ele as any).addEventListener("touchstart", enter);
      (ele as any).addEventListener("touchend", out);
      (ele as any).addEventListener("touchcancel", out);
    }

    return ele;
  };
});