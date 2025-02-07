import Contents from "@/parts/components/Contents.tsx";
import Header from "@/parts/components/Header.tsx";
import { screenFrameStyle } from "@/parts/components/style/ScreenFrame.css.ts";
import type { JSX } from "react";

type ScreenFrameProps = {
  header: JSX.Element;
  contents: JSX.Element;
};

function ScreenFrame({ header, contents }: ScreenFrameProps) {
  return (
    <div className={screenFrameStyle.frame}>
      <Header element={header} />
      <Contents element={contents} />
    </div>
  );
}

export default ScreenFrame;
