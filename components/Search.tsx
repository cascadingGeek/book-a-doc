"use client";
import { Flex, Button } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";

const Search = () => {
  return (
    <form action="" style={{ width: "90%" }}>
      <Flex
        align="center"
        justify="start"
        rounded={50}
        paddingY={3}
        paddingX={5}
        background="#fff"
        width="100%"
        height="auto"
      >
        <Flex
          justify="start"
          align="center"
          gap={3}
          width="30%"
          borderRight="1px solid #eee"
        >
          <RiSearchLine style={{ color: "#777", fontSize: 20 }} />
          <input
            type="text"
            placeholder="Migraine"
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "transparent",
              color: "#000",
              border: "none",
              outline: "none",
            }}
          />
        </Flex>
        <Flex
          justify="start"
          align="center"
          gap={3}
          width="20%"
          borderRight="1px solid #eee"
          paddingLeft={3}
        >
          <BiTargetLock style={{ color: "#777", fontSize: 20 }} />
          <input
            type="number"
            placeholder="40361"
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "transparent",
              color: "#000",
              border: "none",
              outline: "none",
            }}
          />
        </Flex>
        <Flex
          justify="beween"
          align="center"
          gap={3}
          width="40%"
          borderRight="1px solid #eee"
          paddingLeft={3}
        >
          <Flex align="center" gap={3} width="90%">
            <AiOutlineSecurityScan style={{ color: "#777", fontSize: 20 }} />
            <input
              type="text"
              placeholder="Agile Health Insurance"
              style={{
                width: "90%",
                height: "auto",
                backgroundColor: "transparent",
                color: "#000",
                border: "none",
                outline: "none",
              }}
            />
          </Flex>
          <IoMdArrowDropdown style={{ color: "#000", fontSize: 20 }} />
        </Flex>
        <Button
          size="sm"
          variant="solid"
          style={{
            borderRadius: 50,
            backgroundColor: "#FD1774",
            color: "#fff",
            width: "15%",
            padding: 20,
          }}
        >
          Search
        </Button>
      </Flex>
    </form>
  );
};
export default Search;
