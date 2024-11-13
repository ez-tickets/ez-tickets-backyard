import { Fragment, useState } from "react";
import {backyardStyle} from "./Backyard.css";
import OrderTable from "./components/OrderTable";
import type { Ordered } from "./dataTypes";
import FinishedModal from "./components/FinishedModal";

function Backyard() {
  const [orderTable, setOrderTable] = useState<Ordered[]>([]);
  const [isFlag, setIsFlag] = useState<boolean>(false);

  //demo
  const [num, setNum] = useState<number>(1);

  function rand() {
    return Math.floor(Math.random() * 5 + 1);
  }

  function createOrder() {
    setNum((prev) => prev + 1);
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
      id: num,
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
      {/*demo*/}
      <button
        type={"button"}
        onClick={createOrder}
        className={backyardStyle.demo}
      >
        click
      </button>

      <div className={backyardStyle.grid}>
        <OrderTable orderTable={orderTable} setIsFlag={setIsFlag} />
      </div>

      { isFlag ? <FinishedModal setIsFlag={setIsFlag} /> : "" }
    </Fragment>
  );
}

export default Backyard;
