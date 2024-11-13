import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand/react";
import type { NewOrdered } from "../dataTypes";
import OrderList from "./OrderList";
import { orderTableStyle } from "./style/OrderTable.css";

type OrdersProps = {
  orderTable: NewOrdered[];
  setIsFlag: (flag: boolean) => void;
};

type TableStyleStore = {
  id: number;
  setId: (id: number) => void;
};

export const useTableStyleStore = create<TableStyleStore>((set) => ({
  id: 0,
  setId: (id: number) => set({ id: id }),
}));

function OrderTable({ orderTable, setIsFlag }: OrdersProps) {
  const { id, setId } = useTableStyleStore();
  const modalHandler = (id: number) => {
    setId(id);
    setIsFlag(true);
  };

  return (
    <Fragment>
      {orderTable.map((table) => (
        <div
          key={uuidv4()}
          className={
            id === table.id
              ? orderTableStyle.selectedTableContainer
              : orderTableStyle.tableContainer
          }
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
            style={{ backgroundColor: table.color }}
          >
            {table.tableNum}番テーブル
          </p>

          <OrderList orderList={table.order} />
        </div>
      ))}
    </Fragment>
  );
}

export default OrderTable;
