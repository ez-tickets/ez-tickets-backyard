import type { TableOrderData } from "./types";

export const mockData: TableOrderData[] = [];

const mockOrder1: TableOrderData = {
  id: "1",
  tableId: "1",
  orders: [
    { id: "1", name: "寿司盛り合わせ", amount: 1 },
    { id: "2", name: "味噌汁", amount: 2 },
    { id: "3", name: "緑茶", amount: 2 },
  ],
};

const mockOrder2: TableOrderData = {
  id: "2",
  tableId: "2",
  orders: [
    { id: "1", name: "天ぷら盛り合わせ", amount: 1 },
    { id: "2", name: "茶碗蒸し", amount: 1 },
    { id: "3", name: "日本酒", amount: 2 },
  ],
};

const mockOrder3: TableOrderData = {
  id: "3",
  tableId: "3",
  orders: [
    { id: "1", name: "醤油ラーメン", amount: 1 },
    { id: "2", name: "餃子", amount: 2 },
    { id: "3", name: "ウーロン茶", amount: 1 },
  ],
};

const mockOrder4: TableOrderData = {
  id: "4",
  tableId: "4",
  orders: [
    { id: "1", name: "和牛ステーキ", amount: 1 },
    { id: "2", name: "焼きおにぎり", amount: 2 },
    { id: "3", name: "赤ワイン", amount: 1 },
  ],
};

const mockOrder5: TableOrderData = {
  id: "5",
  tableId: "5",
  orders: [
    { id: "1", name: "うな重", amount: 1 },
    { id: "2", name: "お新香盛り合わせ", amount: 1 },
    { id: "3", name: "冷酒", amount: 2 },
  ],
};

const mockOrder6: TableOrderData = {
  id: "6",
  tableId: "6",
  orders: [
    { id: "1", name: "親子丼", amount: 1 },
    { id: "2", name: "味噌汁", amount: 1 },
    { id: "3", name: "麦茶", amount: 1 },
  ],
};

const mockOrder7: TableOrderData = {
  id: "7",
  tableId: "7",
  orders: [
    { id: "1", name: "焼き鳥盛り合わせ", amount: 1 },
    { id: "2", name: "枝豆", amount: 1 },
    { id: "3", name: "生ビール", amount: 3 },
  ],
};

const mockOrder8: TableOrderData = {
  id: "8",
  tableId: "8",
  orders: [
    { id: "1", name: "刺身盛り合わせ", amount: 1 },
    { id: "2", name: "ひじきの煮物", amount: 1 },
    { id: "3", name: "冷酒", amount: 1 },
  ],
};

const mockOrder9: TableOrderData = {
  id: "9",
  tableId: "9",
  orders: [
    { id: "1", name: "天丼", amount: 1 },
    { id: "2", name: "赤だし", amount: 1 },
    { id: "3", name: "ほうじ茶", amount: 1 },
  ],
};

mockData.push(
  mockOrder1,
  mockOrder2,
  mockOrder3,
  mockOrder4,
  mockOrder5,
  mockOrder6,
  mockOrder7,
  mockOrder8,
  mockOrder9,
);
