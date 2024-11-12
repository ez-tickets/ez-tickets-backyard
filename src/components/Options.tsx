import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import type { ProdOptionOrder } from "../dataTypes";
import Option from "./Option";
import { optionsStyle } from "./style/Options.css";

type OptionsProps = {
  options: ProdOptionOrder[];
};

function Options({ options }: OptionsProps) {
  return (
    <Fragment>
      <div className={optionsStyle.optionContainer}>
        {options.map((option) => (
          <Option option={option} key={uuidv4()} />
        ))}
      </div>
    </Fragment>
  );
}

export default Options;
