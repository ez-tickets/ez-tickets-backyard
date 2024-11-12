import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Ordered } from "../dataTypes";
import OrderList from "./OrderList";
import { orderTableStyle } from "./style/OrderTable.css";

type OrdersProps = {
  orderTable: Ordered[];
};

function OrderTable({ orderTable }: OrdersProps) {
  let index = 0;
  const createColor = () => {
    const colorList = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"];
    if (index >= 4) {
      index = 0;
    }
    return colorList[index++];
  };

  return (
    <Fragment>
      {orderTable.map((table) => (
        <div className={orderTableStyle.orderContainer} key={uuidv4()}>
          <p
            className={orderTableStyle.orderTable}
            style={{ backgroundColor: `${createColor()}` }}
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
