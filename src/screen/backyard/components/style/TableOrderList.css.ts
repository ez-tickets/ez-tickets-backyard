import { style } from "@vanilla-extract/css";

export const tableOrderListStyle = {
  container: style({
    width: "100%",
    height: "100svh",
    display: "flex",
    flexWrap: "wrap",
  }),

  tableContainer: style({
    width: "290px",
    height: "380px",
    margin: "20px 4px",
    color: "white",
    border: "1px solid white",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      width: "3px",
    },
    "::-webkit-scrollbar-track": {
      background: "#ffffff",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#9a9a9a",
      borderRadius: "4px",
    },
  }),

  table: style({
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#434343",
    borderBottom: "1px solid white",
  }),
};
