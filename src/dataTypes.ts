interface ProdOrder {
  name: string;
  amount: number;
}

interface ProdOptionOrder {
  name: string;
  amount: number;
}

interface Order {
  product: ProdOrder;
  options: ProdOptionOrder[];
}

export interface Ordered {
  table: string;
  order: Order[];
}
