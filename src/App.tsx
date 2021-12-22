import { ChakraProvider } from "@chakra-ui/provider";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { updateEstateState } from "./app/estateSlice";
import { Buy, Home, Nav, Rent } from "./components/pages";
import { useGetEstateListQuery } from "./serveies/estateApi";
const App: React.FC = () => {
  const { data, isFetching } = useGetEstateListQuery("&purpose=for-rent");
  const dispatch = useDispatch();
  dispatch(updateEstateState(data?.hits));
  return (
    <ChakraProvider>
      <Nav />
      {isFetching ? "loading..." : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
