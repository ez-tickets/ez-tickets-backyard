import { mockData } from "@/mockData";
import { tableOrderListStyle } from "@/screen/backyard/components/style/TableOrderList.css.ts";
import ConfirmationModal from "@/screen/modal/ConfirmationModal.tsx";
import type { TableOrderData } from "@/types";
import { Fragment, useEffect, useState } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import Orders from "./Orders";

type TableOrderListProps = {
  setOrderLength: (length: number) => void;
};

function TableOrderList({ setOrderLength }: TableOrderListProps) {
  const [tableOrders, setTableOrders] = useState<TableOrderData[]>([]);
  const [orderId, setOrderId] = useState<string>("");
  const [tableId, setTableId] = useState<string>("");
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  useEffect(() => {
    // const webSocket = new ReconnectingWebSocket("ws://localhost:3012/");
    //
    // const newOrder = (e: MessageEvent<string>) => {
    //   const orderData: TableOrderData = JSON.parse(e.data);
    //   setTableOrders((prev) => [...prev, orderData]);
    // };
    // webSocket.addEventListener("message", newOrder);
    //
    // return () => {
    //   webSocket.close();
    //   webSocket.removeEventListener("message", newOrder);
    // };

    setTableOrders(mockData);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setOrderLength(tableOrders.length);
  }, [tableOrders]);

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
            <div className={tableOrderListStyle.table}>
              {table.tableId}番テーブル
            </div>

            <div className={tableOrderListStyle.orderView}>
              <Orders orders={table.orders} />
            </div>
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
