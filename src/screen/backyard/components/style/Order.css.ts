import { style } from "@vanilla-extract/css";

export const orderStyle = {
  orderContainer: style({
    width: "100%",
    display: "flex",
    borderBottom: "1px solid white",
  }),

  name: style({
    width: "80%",
    padding: "10px",
    borderRight: "1px solid white",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    // backgroundColor: "white",
    ":before": {
      content: "・",
    },
  }),

  amount: style({
    width: "20%",
    padding: "10px",
    textAlign: "right",
    // backgroundColor: "gray",
    ":before": {
      content: "× ",
      fontSize: "0.7rem",
    },
  }),
};
