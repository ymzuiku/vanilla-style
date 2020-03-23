import style from "./style";

import { IStyle } from "./interface";

style.use("$hover", <T>(obj: IStyle) => {
  const [enter, out] = style.makeOutEnterStyle(obj);

  return (ele: T): T => {
    if (!style.isPc) {
      return ele;
    }
    (ele as any).addEventListener("mouseenter", () => enter(ele));
    (ele as any).addEventListener("mouseleave", () => out(ele));

    return ele;
  };
});
