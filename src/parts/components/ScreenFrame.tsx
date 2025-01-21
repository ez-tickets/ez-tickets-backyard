import { screenFrameStyle } from "@/parts/components/style/ScreenFrame.css.ts";
import type { JSX } from "react";

type ScreenFrameProps = {
  element: JSX.Element;
};

function ScreenFrame({ element }: ScreenFrameProps) {
  return <div className={screenFrameStyle.frame}>{element}</div>;
}

export default ScreenFrame;
