"use client";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import { SlCalender } from "react-icons/sl";
import SelectButton from "@/components/SelectButton";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LuUserSquare } from "react-icons/lu";
import DisplayCard from "@/components/DisplayCard";

export default function Home() {
  return (
    <Flex
      width="100%"
      height="100vh"
      overflow="auto"
      direction="column"
      align="center"
      gap={5}
      padding={5}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        color="#000"
        background="linear-gradient(to right, #FEF6F9, #E8E6FE)"
        width="100%"
        height="auto"
        rounded={20}
        gap={70}
        padding="10px 30px 30px 30px"
      >
        <NavBar />
        <Search />
      </Flex>
      <Box
        width="100%"
        backgroundColor="#F9FAFB"
        paddingY={5}
        paddingX={10}
        rounded={20}
      >
        <Text
          fontSize="4xl"
          style={{ color: "#FD1774", fontWeight: "bold", marginBottom: "30px" }}
        >
          Migraine <span style={{ color: "#000" }}> Illness with</span> Agile
          Health Insurance
        </Text>
        <Flex
          justify="between"
          align="center"
          gap={10}
          width="100%"
          marginBottom="30px"
        >
          <Flex align="center" gap={5} width="100%">
            <SelectButton>
              <SlCalender style={{ color: "#777", fontSize: 20 }} />
              <Text
                fontSize="sm"
                style={{ color: "#777", fontWeight: "normal" }}
              >
                {" "}
                July 2024{" "}
              </Text>
            </SelectButton>
            <SelectButton>
              <LuUserSquare style={{ color: "#777", fontSize: 20 }} />
              <Text
                fontSize="sm"
                style={{ color: "#777", fontWeight: "normal" }}
              >
                {" "}
                In-Person{" "}
              </Text>
            </SelectButton>
            <SelectButton>
              <AiOutlineSecurityScan style={{ color: "#777", fontSize: 20 }} />
              <Text
                fontSize="sm"
                style={{ color: "#777", fontWeight: "normal" }}
              >
                {" "}
                Agile Health Insurance{" "}
              </Text>
            </SelectButton>
            <SelectButton>
              <BiTargetLock style={{ color: "#777", fontSize: 20 }} />
              <Text
                fontSize="sm"
                style={{ color: "#777", fontWeight: "normal" }}
              >
                {" "}
                40361{" "}
              </Text>
            </SelectButton>
          </Flex>
          <Button
            size="sm"
            variant="solid"
            style={{
              backgroundColor: "transparent",
              color: "#777",
              width: "auto",
              padding: 0,
              borderBottom: "1px solid #777",
              borderRadius: "0",
            }}
          >
            Clear All Filters
          </Button>
        </Flex>
        <Flex justify="start" align="center" width="100%" marginBottom="30px">
          <Text fontSize="md" style={{ color: "#000", fontWeight: "bold" }}>
            100+ Results
          </Text>
        </Flex>
        <DisplayCard />
      </Box>
    </Flex>
  );
}
