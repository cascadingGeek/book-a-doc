"use client";

import React, { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

interface SelectButtonProps {
  children: ReactNode;
}

const SelectButton: FC<SelectButtonProps> = ({ children }) => {
  return (
    <Flex
      justify="center"
      align="center"
      width="fit-content"
      paddingY={2}
      paddingX={5}
      border="1px solid #eee"
      rounded={15}
      gap={5}
      cursor="pointer"
    >
      {children}
      <IoMdArrowDropdown style={{ color: "#000", fontSize: 20 }} />
    </Flex>
  );
};
export default SelectButton;
