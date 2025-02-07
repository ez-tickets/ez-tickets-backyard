export type OrderModel = {
  id: string;
  name: string;
  amount: number;
};

export type TableOrderData = {
  id: string;
  tableId: string;
  orders: OrderModel[];
};
