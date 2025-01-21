import { mockOrder1, mockOrder2, mockOrder3 } from "@/mockData";
import { tableOrderListStyle } from "@/screen/backyard/components/style/TableOrderList.css.ts";
import ConfirmationModal from "@/screen/modal/ConfirmationModal.tsx";
import type { TableOrderData } from "@/types";
import { Fragment, useEffect, useState } from "react";
import Orders from "./Orders";

function TableOrderList() {
  const [tableOrders, setTableOrders] = useState<TableOrderData[]>([]);
  const [orderId, setOrderId] = useState<string>("");
  const [tableId, setTableId] = useState<string>("");
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  //注文されたデータを格納する
  useEffect(() => {
    setTableOrders([mockOrder1, mockOrder2, mockOrder3]);
  }, []);

  const openModalHandler = (orderId: string, tableId: string) => {
    setOrderId(orderId);
    setTableId(tableId);
    setModalFlag(true);
  };

  return (
    <Fragment>
      <div className={tableOrderListStyle.container}>
        {tableOrders.map((table) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            key={table.id}
            className={tableOrderListStyle.tableContainer}
            onClick={() => openModalHandler(table.id, table.tableId)}
          >
            <p className={tableOrderListStyle.table}>
              {table.tableId}番テーブル
            </p>
            <Orders orders={table.orders} />
          </div>
        ))}
      </div>

      <ConfirmationModal
        orderId={orderId}
        tableId={tableId}
        tableOrders={tableOrders}
        modalFlag={modalFlag}
        setTableOrders={setTableOrders}
        setModalFlag={setModalFlag}
      />
    </Fragment>
  );
}

export default TableOrderList;
