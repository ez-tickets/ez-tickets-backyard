import {Fragment, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import type { Ordered } from "../dataTypes";
import OrderList from "./OrderList";
import { orderTableStyle } from "./style/OrderTable.css";
import {create} from "zustand/react";

type OrdersProps = {
  orderTable: Ordered[];
  setIsFlag: (flag: boolean) => void;
};

type TableStyleStore = {
  id: number;
  setId: (id: number) => void;
}

export const useTableStyleStore = create<TableStyleStore>((set) => ({
  id: 0,
  setId: (id: number) => set({ id: id }),
}))

function OrderTable({ orderTable, setIsFlag }: OrdersProps) {
  let index = 0;
  const createColor = () => {
    const colorList = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"];
    if (index >= 4) {
      index = 0;
    }
    return colorList[index++];
  };


  const { id, setId } = useTableStyleStore();
  const modalHandler = (id: number) => {
    setId(id);
    setIsFlag(true);
  }

  return (
    <Fragment>
      {orderTable.map((table) => (
        <div
            key={uuidv4()}
            className={id === table.id ? orderTableStyle.selectedTableContainer : orderTableStyle.tableContainer}
            onClick={() => modalHandler(table.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setId(table.id);
                setIsFlag(true);
              }
            }}
        >
          <p
            className={orderTableStyle.orderTable}
            style={{ backgroundColor: `${createColor()}` }}
          >
            {table.tableNum}番テーブル
          </p>
          <p>{table.id}</p>

          <OrderList orderList={table.order} />
        </div>
      ))}
    </Fragment>
  );
}

export default OrderTable;
