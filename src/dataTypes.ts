export interface ProdOrder {
  name: string;
  amount: number;
}

export interface ProdOptionOrder {
  name: string;
  amount: number;
}

export interface Order {
  product: ProdOrder;
  options: ProdOptionOrder[];
}

export interface Ordered {
  id: number;
  tableNum: string;
  order: Order[];
}