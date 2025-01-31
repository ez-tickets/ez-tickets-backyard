import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import TableOrderList from "@/screen/backyard/components/TableOrderList.tsx";
import TopNav from "@/screen/backyard/components/TopNav.tsx";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function Backyard() {
  const [orderLength, setOrderLength] = useState<number>(0);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <ScreenFrame
      header={<TopNav orderLength={orderLength} />}
      contents={<TableOrderList setOrderLength={setOrderLength} />}
    />
  );
}

export default Backyard;
