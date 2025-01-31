import { topNavStyle } from "@/screen/backyard/components/style/TopNav.css.ts";
import React from "react";

type TopNavProps = {
  orderLength: number;
};

function TopNav({ orderLength }: TopNavProps) {
  return (
    <div className={topNavStyle.orderLength}>注文件数: {orderLength}件</div>
  );
}

export default TopNav;
