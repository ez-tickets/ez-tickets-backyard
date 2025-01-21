import type { TableOrderData } from "./types";

export const mockOrder1: TableOrderData = {
  id: "1",
  tableId: "1",
  orders: [
    { id: "1", name: "Menu1", amount: 1 },
    { id: "2", name: "Menu2", amount: 5 },
    { id: "3", name: "Menu3", amount: 10 },
  ],
};

export const mockOrder2: TableOrderData = {
  id: "2",
  tableId: "2",
  orders: [
    { id: "1", name: "Menu1", amount: 1 },
    { id: "2", name: "Menu2", amount: 5 },
    { id: "3", name: "Menu3", amount: 10 },
  ],
};

export const mockOrder3: TableOrderData = {
  id: "3",
  tableId: "3",
  orders: [
    { id: "1", name: "Menu1", amount: 1 },
    { id: "2", name: "Menu2", amount: 5 },
    { id: "3", name: "Menu3", amount: 10 },
  ],
};
