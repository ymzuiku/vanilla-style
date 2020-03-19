import style from "./style";

import { IStyle } from "./interface";

style.use("$media", <T>(obj: [number, IStyle]) => {
  return (ele: T): T => {
    if (!obj) {
      return ele;
    }
    if (window.innerWidth < obj[0]) {
      style.setStyle(obj[1])(ele);
    }
    return ele;
  };
});
