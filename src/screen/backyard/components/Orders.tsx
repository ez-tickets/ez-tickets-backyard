import Order from "@/screen/backyard/components/Order.tsx";
import type { OrderModel } from "@/types.ts";
import React, { Fragment } from "react";

type OrdersProps = {
  orders: OrderModel[];
};

function Orders({ orders }: OrdersProps) {
  return (
    <Fragment>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </Fragment>
  );
}

export default Orders;
