import { Box } from "@chakra-ui/react";
import React from "react";

export const Wrapper: React.FC = ({ children }) => {
  return <Box px={2}>{children}</Box>;
};
