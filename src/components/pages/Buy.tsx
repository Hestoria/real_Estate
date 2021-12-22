import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
import { Search } from "../layout/";
interface BuyProps {}

export const Buy: React.FC<BuyProps> = () => {
  //const test = useSelector((state: RootState) => state.eatateList);
  return (
    <div>
      <Search />
      <div>buy</div>
    </div>
  );
};
