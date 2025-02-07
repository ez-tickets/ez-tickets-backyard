import { style } from "@vanilla-extract/css";

export const topNavStyle = {
  orderLength: style({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    boxShadow: "0.0625rem 0.025rem 0.125rem rgba(255,255,255,0.6)",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.5rem",
      },
    },
  }),
};
