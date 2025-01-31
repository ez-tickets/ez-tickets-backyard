import { globalStyle, style } from "@vanilla-extract/css";

export const screenFrameStyle = {
  frame: style({
    position: "relative",
    width: "100%",
    height: "100svh",
    fontFamily: "Noto Sans JP",
    backgroundColor: "#1e1e1e",
    overflow: "hidden",
    userSelect: "none",
    boxSizing: "border-box",
  }),
};

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});
