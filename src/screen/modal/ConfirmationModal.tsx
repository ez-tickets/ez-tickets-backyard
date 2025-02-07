import {
  confirmationContainer,
  confirmationModalStyle,
} from "@/screen/modal/ConfirmationModal.css.ts";
import type { TableOrderData } from "@/types.ts";
import Modal from "react-modal";
import { toast } from "react-toastify";

type ConfirmationModalProps = {
  orderId: string;
  tableId: string;
  tableOrders: TableOrderData[];
  modalFlag: boolean;
  setTableOrders: (tableOrders: () => TableOrderData[]) => void;
  setModalFlag: (flag: boolean) => void;
};

// biome-ignore format: enable ts-ignore.
function ConfirmationModal({orderId, tableId, tableOrders, setTableOrders, modalFlag, setModalFlag,}: ConfirmationModalProps) {
  const finishHandler = () => {
    setTableOrders(() => tableOrders.filter((table) => table.id !== orderId));
    setModalFlag(false);
    toast.success(`${tableId}番テーブルの注文を完了しました。`);
  }

  return (
      // @ts-ignore react version incompatible
    <Modal isOpen={modalFlag} style={confirmationContainer} onRequestClose={() => setModalFlag(false)}>
      <div className={confirmationModalStyle.frame}>
        <div className={confirmationModalStyle.textContainer}>
          <div className={confirmationModalStyle.table}>{tableId}番テーブル</div>
          <div className={confirmationModalStyle.text}>注文を完了しますか？</div>
        </div>
        <div className={confirmationModalStyle.buttonContainer}>
          <button
              className={confirmationModalStyle.noButton}
              type={"button"}
              onClick={() => setModalFlag(false)}
          >
            いいえ
          </button>
          <button
              className={confirmationModalStyle.yesButton}
              type={"button"}
              onClick={finishHandler}
          >
            はい
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
