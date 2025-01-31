import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import type { JSX } from "react";

type ContentsProps = {
  element: JSX.Element;
};

function Contents({ element }: ContentsProps) {
  return <div className={contentsStyle.frame}>{element}</div>;
}

export default Contents;
