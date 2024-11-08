import { Fragment } from "react";
import { appStyle } from "./App.css";

function App() {
  const createColor = () => {
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    return `rgb(${num1}, ${num2}, ${num3})`;
  };

  return (
    <Fragment>
      <div className={appStyle.grid}>
        <div className={appStyle.orderContainer}>
          <p
            className={appStyle.orderTable}
            style={{ backgroundColor: `${createColor()}` }}
          >
            1番テーブル
          </p>
          <div className={appStyle.order}>
            <div className={appStyle.mainOrderContainer}>
              <p className={appStyle.mainOrder}>・鯵の塩焼定食</p>
              <p className={appStyle.mainAmount}>x 1</p>
            </div>

            <div className={appStyle.optionContainer}>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
              <p className={appStyle.option}>
                ねぎ <span>x　1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
