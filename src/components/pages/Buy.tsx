import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
interface BuyProps {}

export const Buy: React.FC<BuyProps> = () => {
  const test = useSelector((state: RootState) => state.eatateList);
  console.log(test);
  return <div>buy</div>;
};
