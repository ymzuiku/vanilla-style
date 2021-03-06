import style from "./style";

import { IStyle } from "./interface";

style.use("$pc", <T>(obj: IStyle) => {
  return (ele: T): T => {
    if (!obj) {
      return ele;
    }
    if (style.isPc) {
      style.setStyle(obj)(ele);
    }
    return ele;
  };
});
