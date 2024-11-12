import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  padding: 0,
  margin: 0,
  backgroundColor: "rgba(35,35,35,1)",
});

export const appStyle = {
  grid: style({
    backgroundColor: "rgba(35,35,35,1)",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    placeItems: "center",
    height: "100svh",
    overflowY: "scroll",
    gap: "15px 0",
    scrollbarWidth: "none",
  }),
};
