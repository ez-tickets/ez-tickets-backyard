import { Fragment } from "react";
import type { NewOrdered } from "../dataTypes";
import { useTableStyleStore } from "./OrderTable";
import { finishedModalStyle } from "./style/FinishedModal.css";

type FinishedModalProps = {
  orderTable: NewOrdered[];
  setOrderTable: (orderTable: NewOrdered[]) => void;
  setIsFlag: (flag: boolean) => void;
};

function FinishedModal({
  orderTable,
  setOrderTable,
  setIsFlag,
}: FinishedModalProps) {
  const { id, setId } = useTableStyleStore();

  const finishHandler = () => {
    const deletedTable = orderTable.filter((table) => table.id !== id);
    setOrderTable(deletedTable);
    setId(0);
    setIsFlag(false);
  };

  const cancelHandler = () => {
    setId(0);
    setIsFlag(false);
  };

  return (
    <Fragment>
      <div className={finishedModalStyle.overlay}>
        <div className={finishedModalStyle.modalContainer}>
          <p className={finishedModalStyle.text}>
            選択中の注文を完了してもよろしいですか？
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
