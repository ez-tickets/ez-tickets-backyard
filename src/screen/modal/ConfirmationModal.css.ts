import { style } from "@vanilla-extract/css";

export const confirmationModalStyle = {
  frame: style({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),

  textContainer: style({
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),

  table: style({
    width: "100%",
    fontSize: "1.25rem",
    textAlign: "center",
    borderBottom: "2px dashed lightgray",
    "@media": {
      "screen and (max-width: 950px)": {
        fontSize: "0.85rem",
        borderBottom: "1px dashed lightgray",
      },
    },
  }),

  text: style({
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "2rem",
    "@media": {
      "screen and (max-width: 950px)": {
        marginTop: "1rem",
        fontSize: "0.85rem",
      },
    },
  }),

  buttonContainer: style({
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media": {
      "screen and (max-width: 950px)": {
        marginTop: "1.5rem",
      },
    },
  }),

  yesButton: style({
    width: "30%",
    height: "50%",
    margin: "0 1rem",
    backgroundColor: "gold",
    boxShadow: "2px 2px 5px gray",
    borderRadius: "5px",
    cursor: "pointer",
    "@media": {
      "screen and (max-width: 950px)": {
        height: "30px",
        fontSize: "0.85rem",
      },
    },
  }),

  noButton: style({
    width: "30%",
    height: "50%",
    margin: "0 1rem",
    backgroundColor: "white",
    boxShadow: "2px 2px 5px gray",
    borderRadius: "5px",
    cursor: "pointer",
    "@media": {
      "screen and (max-width: 950px)": {
        height: "30px",
        fontSize: "0.85rem",
      },
    },
  }),
};

export const confirmationContainer = {
  overlay: {
    width: "100%",
    height: "100svh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "2px 2px 3px gray",
    backgroundColor: "#fcfcfc",
  },
};
