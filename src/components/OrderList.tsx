import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Order } from "../dataTypes";
import Options from "./Options";
import Product from "./Product";
import { orderListStyle } from "./style/OrderList.css";

type OrderProps = {
  orderList: Order[];
};

function OrderList({ orderList }: OrderProps) {
  return (
    <Fragment>
      {orderList.map((item) => (
        <div className={orderListStyle.order} key={uuidv4()}>
          <Product product={item.product} />
          <Options options={item.options} />
        </div>
      ))}
    </Fragment>
  );
}

export default OrderList;
