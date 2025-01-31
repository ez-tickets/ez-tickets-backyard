import { style } from "@vanilla-extract/css";

export const orderStyle = {
  orderContainer: style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid white",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.5rem",
        ":before": {
          fontSize: "0.1rem",
        },
      },
    },
  }),

  name: style({
    width: "80%",
    borderRight: "1px solid white",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    ":before": {
      content: "・",
      fontSize: "0.75rem",
    },
    "@media": {
      "screen and (max-width: 950px)": {
        ":before": {
          fontSize: "0.4rem",
        },
      },
    },
  }),

  amount: style({
    width: "20%",
    paddingRight: "10px",
    textAlign: "right",
    ":before": {
      content: "× ",
      fontSize: "0.7rem",
    },
    "@media": {
      "screen and (max-width: 950px)": {
        ":before": {
          fontSize: "0.4rem",
        },
      },
    },
  }),
};
