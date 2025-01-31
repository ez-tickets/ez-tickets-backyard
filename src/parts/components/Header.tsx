import { headerStyle } from "@/parts/components/style/Header.css.ts";
import type { JSX } from "react";

type HeaderProps = {
  element: JSX.Element;
};

function Header({ element }: HeaderProps) {
  return <div className={headerStyle.frame}>{element}</div>;
}

export default Header;
