import style from "./style";

import { IFlexLayout } from "./interface";

const parserFlexLayoutData = (str: IFlexLayout) => {
  let [fd, jc, ai] = str.split(" ");
  if (fd === "col") {
    fd = "column";
  }
  if (jc === "start" || jc === 'end') {
    jc = "flex-" + jc;
  }
  if (ai === "start" || jc === 'end') {
    ai = "flex-" + ai;
  }
  return {
    display: "flex",
    flexDirection: fd,
    justifyContent: jc,
    alignItems: ai
  };
};

const flexLayoutData = {} as any;

style.use("$flex", <T>(key: IFlexLayout) => {
  return (ele: T): T => {
    if (!flexLayoutData[key]) {
      flexLayoutData[key] = parserFlexLayoutData(key);
    }
    const sty = flexLayoutData[key];
    if (sty) {
      style.setStyle(sty)(ele);
    }
    return ele;
  };
});
