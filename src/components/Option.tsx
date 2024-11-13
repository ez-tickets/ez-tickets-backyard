import React, { Fragment } from "react";
import type { ProdOptionOrder } from "../dataTypes";
import { optionStyle } from "./style/Option.css";

type OptionProps = {
  option: ProdOptionOrder;
};

function Option({ option }: OptionProps) {
  return (
    <Fragment>
      <p className={optionStyle.option}>
        {option.name} <span>x {option.amount}</span>
      </p>
    </Fragment>
  );
}

export default Option;
