import { Fragment, useState } from "react";
import { backyardStyle } from "./Backyard.css";
import FinishedModal from "./components/FinishedModal";
import OrderTable from "./components/OrderTable";
import type { NewOrdered } from "./dataTypes";

function Backyard() {
  const [orderTable, setOrderTable] = useState<NewOrdered[]>([]);
  const [idNum, setIdNum] = useState<number>(1);
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [isFlag, setIsFlag] = useState<boolean>(false);

  const colorList = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"];

  //仮のorderを生成してカラープロパティーを追加した後のdemoデータ生成ハンドラー
  const createOrder = () => {
    const rand = () => {
      return Math.floor(Math.random() * 5 + 1);
    };

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

    const order: NewOrdered = {
      id: idNum,
      tableNum: `${randTable}`,
      color: colorList[colorIndex],
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
    setIdNum((prev) => prev + 1);

    if (colorIndex >= 3) {
      setColorIndex(0);
    } else {
      setColorIndex((prev) => prev + 1);
    }
  };

  return (
    <Fragment>
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

      {isFlag ? (
        <FinishedModal
          setIsFlag={setIsFlag}
          orderTable={orderTable}
          setOrderTable={setOrderTable}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Backyard;
