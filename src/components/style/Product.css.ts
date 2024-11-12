import { style } from "@vanilla-extract/css";

export const productStyle = {
  mainOrderContainer: style({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: "3px",
  }),

  mainOrder: style({
    width: "220px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),

  mainAmount: style({
    position: "absolute",
    right: "8%",
  }),
};
