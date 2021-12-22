import React from "react";
import { Search } from "../layout/";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
interface RentProps {}

export const Rent: React.FC<RentProps> = () => {
  //const test = useSelector((state: RootState) => state.eatateList);
  return (
    <div>
      <Search />
      <div>rent</div>
    </div>
  );
};
