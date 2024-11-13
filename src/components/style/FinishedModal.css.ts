import {style} from "@vanilla-extract/css";

export const finishedModalStyle = ({
  overlay: style({
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100vh',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  }),

  modalContainer: style({
    width: "550px",
    height: "250px",
    backgroundColor: "white",
    border: "1px solid gray",
    borderRadius: "5px",
  }),

  text: style({
    fontSize: "1.25rem",
    textAlign: "center",
    padding: "10px",
    margin: "30px",
  }),

  buttonContainer: style({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    margin: "40px 0",
  }),

  buttonYes: style({
    width: "180px",
    height: "60px",
    padding: "10px",
    backgroundColor: "gold",
    borderRadius: "5px",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.4)",
  }),

  buttonNo: style({
    width: "180px",
    height: "60px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.4)",
  }),
})