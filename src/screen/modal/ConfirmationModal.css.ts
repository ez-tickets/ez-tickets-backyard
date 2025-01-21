import { style } from "@vanilla-extract/css";

export const confirmationModalStyle = {
  text: style({
    textAlign: "center",
  }),

  buttonContainer: style({
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  yesButton: style({
    width: "150px",
    height: "50px",
    margin: "0 20px",
    backgroundColor: "gold",
    boxShadow: "1px 2px 3px lightgray",
    borderRadius: "5px",
    cursor: "pointer",
  }),

  noButton: style({
    width: "150px",
    height: "50px",
    margin: "0 20px",
    backgroundColor: "white",
    boxShadow: "1px 2px 3px lightgray",
    borderRadius: "5px",
    cursor: "pointer",
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
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
};
