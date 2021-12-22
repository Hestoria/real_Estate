import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../layout";

export const Nav: React.FC = () => {
  return (
    <Flex bg="tan" position="sticky" top={0} p={4} zIndex={1}>
      <Flex ml="auto">
        <Wrapper>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/buy">
            <h1>Buy</h1>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/rent">
            <h1>rent</h1>
          </Link>
        </Wrapper>
      </Flex>
    </Flex>
  );
};
