import { Fragment, useState } from "react";
import { appStyle } from "./Backyard.css";
import OrderTable from "./components/OrderTable";
import type { Ordered } from "./dataTypes";

function Backyard() {
  const [orderTable, setOrderTable] = useState<Ordered[]>([]);

  function rand() {
    return Math.floor(Math.random() * 5 + 1);
  }

  function createOrder() {
    const randTable = Math.floor(Math.random() * 16 + 1);
    const menuList = [
      "パフェ",
      "人参",
      "味噌汁",
      "鯵の塩焼き定食",
      "豚カツ定食",
      "酢豚定食",
    ];
    const optionList = [
      "ご飯大",
      "ご飯小",
      "煮卵",
      "のり",
      "メンマ",
      "生クリーム",
    ];

    const order: Ordered = {
      tableNum: `${randTable}`,
      order: [
        {
          product: {
            name: `${menuList[rand()]}`,
            amount: rand(),
          },
          options: [
            {
              name: `${optionList[rand()]}`,
              amount: rand(),
            },
          ],
        },
        {
          product: {
            name: `${menuList[rand()]}`,
            amount: rand(),
          },
          options: [
            {
              name: `${optionList[rand()]}`,
              amount: rand(),
            },
          ],
        },
        {
          product: {
            name: `${menuList[rand()]}`,
            amount: rand(),
          },
          options: [
            {
              name: `${optionList[rand()]}`,
              amount: rand(),
            },
          ],
        },
        {
          product: {
            name: `${menuList[rand()]}`,
            amount: rand(),
          },
          options: [
            {
              name: `${optionList[rand()]}`,
              amount: rand(),
            },
          ],
        },
        {
          product: {
            name: `${menuList[rand()]}`,
            amount: rand(),
          },
          options: [
            {
              name: `${optionList[rand()]}`,
              amount: rand(),
            },
          ],
        },
      ],
    };
    setOrderTable([...orderTable, order]);
  }

  return (
    <Fragment>
      <button
        type={"button"}
        onClick={createOrder}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "gold",
        }}
      >
        click
      </button>

      <div className={appStyle.grid}>
        <OrderTable orderTable={orderTable} />
      </div>
    </Fragment>
  );
}

export default Backyard;
