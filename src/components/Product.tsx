import React, { Fragment } from "react";
import type { ProdOrder } from "../dataTypes";
import { productStyle } from "./style/Product.css";

type ProductProps = {
  product: ProdOrder;
};

function Product({ product }: ProductProps) {
  return (
    <Fragment>
      <div className={productStyle.mainOrderContainer}>
        <p className={productStyle.mainOrder}>・{product.name}</p>
        <p className={productStyle.mainAmount}>x {product.amount}</p>
      </div>
    </Fragment>
  );
}

export default Product;
