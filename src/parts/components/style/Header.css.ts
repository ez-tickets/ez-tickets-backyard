import { style } from "@vanilla-extract/css";

export const headerStyle = {
  frame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "5svh",
    boxShadow: "0.0625rem 0.125rem 0.125rem rgba(0,0,0,0.2)",
    zIndex: 100,
  }),
};
