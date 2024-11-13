import { style } from "@vanilla-extract/css";

export const orderTableStyle = {
  tableContainer: style({
    position: "relative",
    width: "320px",
    height: "350px",
    color: "white",
    border: "1px solid white",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "#ffffff",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#c7c7c7",
      borderRadius: "4px",
    },
  }),

  selectedTableContainer: style({
    position: "relative",
    width: "320px",
    height: "350px",
    color: "white",
    backgroundColor: "#ffac00",
    border: "1px solid white",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "#ffffff",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#c7c7c7",
      borderRadius: "4px",
    },
  }),

  orderTable: style({
    position: "sticky",
    top: 0,
    padding: "2px 0",
    textShadow: "2px 2px 5px black",
    textIndent: "1rem",
    backgroundColor: "gray",
    borderBottom: "1px solid white",
    zIndex: 10,
  }),
};
