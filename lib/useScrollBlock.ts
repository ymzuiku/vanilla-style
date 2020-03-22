import style from "./style";
import { IScrollBlockEvent } from "./interface";

style.use(
  "$scrollBlock",
  <T>({
    space,
    onScrollIn,
    onScrollOut,
    key = "scrollTop"
  }: IScrollBlockEvent) => {
    return (ele: any): T => {
      const target = ele as any;
      target.addEventListener("scroll", () => {
        if (!target.__isScrollDown && target[key] > space) {
          target.__isScrollDown = true;
          onScrollIn(ele);
        } else if (target.__isScrollDown && target[key] <= space) {
          target.__isScrollDown = false;
          onScrollOut(ele);
        }
      });

      return ele;
    };
  }
);
