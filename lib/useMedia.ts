import style from "./style";

import { IStyle } from "./interface";

style.use("$media", <T>(obj: IStyle) => {
  return (ele: T): T => {
    if (!obj) {
      return ele;
    }
    if (obj.$mediaApplyWidth !== undefined && window.innerWidth < obj.$mediaApplyWidth) {
      style.setStyle(obj)(ele);
    }
    if (obj.$mediaApplyHeight !== undefined && window.innerHeight < obj.$mediaApplyHeight) {
      style.setStyle(obj)(ele);
    }
    return ele;
  };
});
