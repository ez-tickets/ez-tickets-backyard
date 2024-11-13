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

//取得データ
export interface Ordered {
  id: number;
  tableNum: string;
  order: Order[];
}

//取得したデータにOrderごとにカラーを入れたい
export interface NewOrdered {
  id: number;
  tableNum: string;
  order: Order[];
  color: string;
}
