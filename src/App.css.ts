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

  //order------------------------------------------
  orderContainer: style({
    position: "relative",
    width: "320px",
    height: "350px",
    color: "white",
    border: "1px solid white",
    overflowY: "scroll",
    scrollbarWidth: "none",
    boxShadow: "0px 0px 0px 2px white",
  }),

  orderTable: style({
    position: "sticky",
    top: 0,
    padding: "2px 0",
    textIndent: "1rem",
    backgroundColor: "gray",
    borderBottom: "1px solid white",
    zIndex: 10,
  }),

  order: style({
    borderBottom: "1px solid white",
  }),

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

  optionContainer: style({
    fontSize: "0.7rem",
    paddingBottom: "20px",
  }),

  option: style({
    marginLeft: "10px",
  }),
};
