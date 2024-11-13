import { Fragment } from "react";
import {finishedModalStyle} from "./style/FinishedModal.css";
import {useTableStyleStore} from "./OrderTable";

type FinishedModalProps = {
  setIsFlag: (flag: boolean) => void;
}

function FinishedModal({ setIsFlag }: FinishedModalProps) {
  const { setId } = useTableStyleStore();

  const finishHandler = () => {
    setId(0);
    setIsFlag(false);
  }

  const cancelHandler = () => {
    setId(0);
    setIsFlag(false);
  }

  return (
      <Fragment>
        <div className={finishedModalStyle.overlay}>
          <div className={finishedModalStyle.modalContainer}>
            <p className={finishedModalStyle.text}>
              この注文を完了してもよろしいですか？
            </p>
            <div className={finishedModalStyle.buttonContainer}>
              <button
                  type={"button"}
                  className={finishedModalStyle.buttonYes}
                  onClick={finishHandler}
              >
                はい
              </button>
              <button
                  type={"button"}
                  className={finishedModalStyle.buttonNo}
                  onClick={cancelHandler}
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default FinishedModal;
