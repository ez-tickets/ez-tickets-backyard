import { style } from "@vanilla-extract/css";

export const tableOrderListStyle = {
  container: style({
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
  }),

  tableContainer: style({
    position: "relative",
    width: "25%",
    height: "50%",
    color: "white",
    border: "1px solid white",
    overflow: "hidden",
  }),

  table: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4svh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#383737",
    borderBottom: "1px solid white",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.5rem",
      },
    },
  }),

  orderView: style({
    position: "absolute",
    top: "4svh",
    left: 0,
    width: "100%",
    height: "92%",
    overflow: "hidden",
  }),
};
