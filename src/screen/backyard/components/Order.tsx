import { orderStyle } from "@/screen/backyard/components/style/Order.css.ts";
import type { OrderModel } from "@/types.ts";

type OrderProps = {
  order: OrderModel;
};

function Order({ order }: OrderProps) {
  return (
    <div className={orderStyle.orderContainer}>
      <p className={orderStyle.name}>{order.name}</p>
      <p className={orderStyle.amount}>{order.amount}</p>
    </div>
  );
}

export default Order;
