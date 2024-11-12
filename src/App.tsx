import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { appStyle } from "./App.css";
import type { Ordered } from "./dataTypes";

function App() {
  const [ordered, setOrdered] = useState<Ordered[]>([]);

  let index = 0;
  const createColor = () => {
    const colorList = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"];
    if (index >= 4) {
      index = 0;
    }
    return colorList[index++];
  };

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
      table: `${randTable}`,
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
    setOrdered([...ordered, order]);
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
        {ordered.map((order) => (
          <div className={appStyle.orderContainer} key={uuidv4()}>
            <p
              className={appStyle.orderTable}
              style={{ backgroundColor: `${createColor()}` }}
            >
              {order.table}番テーブル
            </p>
            {order.order.map((item) => (
              <div className={appStyle.order} key={uuidv4()}>
                <div className={appStyle.mainOrderContainer}>
                  <p className={appStyle.mainOrder}>・{item.product.name}</p>
                  <p className={appStyle.mainAmount}>x {item.product.amount}</p>
                </div>

                <div className={appStyle.optionContainer}>
                  {item.options.map((option) => (
                    <p className={appStyle.option} key={uuidv4()}>
                      {option.name} <span>x　{option.amount}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
