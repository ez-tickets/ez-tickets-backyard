import React, { Fragment } from "react";
import type { ProdOptionOrder } from "../dataTypes";
import { optionsStyle } from "./style/Options.css";

type OptionProps = {
  option: ProdOptionOrder;
};

function Option({ option }: OptionProps) {
  return (
    <Fragment>
      <p className={optionsStyle.optionContainer}>
        {option.name} <span>x {option.amount}</span>
      </p>
    </Fragment>
  );
}

export default Option;
