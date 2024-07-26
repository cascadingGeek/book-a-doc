"use client";
import { FC, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Calender from "./Calender";
import Image from "next/image";
import { Doctor } from "@/utils/mockData";
import { ImNotification } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Badge } from "@chakra-ui/react";

interface CalendarData {
  days: DayData[];
}

interface DayData {
  day: string;
  date: string;
  times: string[];
}

const DoctorCard = () => {
  const calendarData: CalendarData = {
    days: [
      { day: "Mon", date: "9", times: ["8:00 AM"] },
      {
        day: "Tue",
        date: "10",
        times: ["8:00 AM", "9:00 AM", "9:30 AM", "See Less"],
      },
      {
        day: "Wed",
        date: "11",
        times: ["8:00 AM", "8:20 AM", "9:00 AM", "See More"],
      },
      { day: "Thu", date: "12", times: ["8:00 AM", "9:00 AM"] },
      { day: "Fri", date: "13", times: ["8:00 AM", "9:00 AM"] },
      { day: "Sat", date: "14", times: [""] },
      { day: "Sun", date: "15", times: [""] },
      { day: "Mon", date: "16", times: ["8:00 AM"] },
      {
        day: "Tue",
        date: "17",
        times: ["8:00 AM", "9:00 AM", "9:30 AM", "-", "See Less"],
      },
      {
        day: "Wed",
        date: "18",
        times: ["8:00 AM", "8:20 AM", "9:00 AM", "See More"],
      },
      { day: "Thu", date: "19", times: ["8:00 AM", "9:00 AM"] },
      { day: "Fri", date: "20", times: ["8:00 AM", "9:00 AM"] },
      { day: "Sat", date: "21", times: [""] },
      { day: "Sun", date: "22", times: [""] },
    ],
  };

  const initialLoveState: boolean[] = Doctor.map((_, index) => index === 1);
  const [love, setLove] = useState<boolean[]>(initialLoveState);

  const handleLikeDoctor = (index: number) => {
    setLove((prevLove) =>
      prevLove.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <Flex direction="column" width="100%" height="auto">
      {Doctor.map((data, i) => (
        <Flex key={i}>
          <Flex
            direction="column"
            align="start"
            gap={3}
            rounded={10}
            border="1px solid #eee"
            background="#fff"
            padding={3}
            width="100%"
            height="auto"
            marginBottom={5}
          >
            <Flex direction="column" align="start" width="100%" key={i}>
              {data.tagged === true && (
                <Flex
                  align="center"
                  gap={2}
                  width="full"
                  height="auto"
                  rounded={5}
                  background="#FEF08A"
                  paddingX={2}
                  paddingY={1}
                  marginBottom={3}
                >
                  <ImNotification
                    style={{ color: "#B91C1C", fontSize: "10px" }}
                  />
                  <Text color="#B91C1C" fontSize={10}>
                    You have an existing appointment with this doctor{" "}
                    <span
                      style={{
                        color: "#000",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      View details
                    </span>
                  </Text>
                </Flex>
              )}
              {data.like === true && (
                <Flex
                  align="center"
                  gap={2}
                  width="full"
                  height="auto"
                  rounded={5}
                  background="#E5E7EB"
                  paddingX={2}
                  paddingY={1}
                  marginBottom={3}
                >
                  <ImNotification
                    style={{ color: "#6B7280", fontSize: "10px" }}
                  />
                  <Text color="#6B7280" fontSize={10}>
                    You booked this provider in the past{" "}
                  </Text>
                </Flex>
              )}
              <Flex align="start" width="100%" justify="between" gap={3}>
                <Flex align="start" width="100%" justify="between" gap={3}>
                  <Box
                    width="150px"
                    height="150px"
                    rounded={20}
                    overflow="hidden"
                    border="1px solid"
                    borderColor="#eee"
                    position="relative"
                    cursor="pointer"
                    onClick={() => handleLikeDoctor(i)}
                  >
                    <Image
                      src={data.image}
                      width={150}
                      height={150}
                      alt="doctor"
                      style={{ objectFit: "cover" }}
                    />

                    <Button
                      variant="default"
                      size="sm"
                      width={5}
                      height={8}
                      rounded={50}
                      background="#fff"
                      position="absolute"
                      top={1}
                      left={1}
                    >
                      <Flex align="center" justify="center">
                        {love[i] === true ? (
                          <FaHeart style={{ color: "red", fontSize: "15px" }} />
                        ) : (
                          <CiHeart
                            style={{ color: "#777", fontSize: "15px" }}
                          />
                        )}
                      </Flex>
                    </Button>
                  </Box>
                  <Flex
                    direction="column"
                    justify="center"
                    gap={1}
                    width="auto"
                    height="auto"
                  >
                    <Text color="#000" fontSize={18} fontWeight="semibold">
                      {" "}
                      {data.name}{" "}
                    </Text>
                    <Text color="#6B7280" fontSize={13} fontWeight="normal">
                      Primary Care Doctor
                    </Text>
                    <Flex align="center" gap={1}>
                      <FaLocationDot
                        style={{ color: "#6B7280", fontSize: "12px" }}
                      />
                      <Text color="#6B7280" fontSize={12}>
                        52087 Toney Neck Suite 296
                      </Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Badge colorScheme="#F97316">
                        <Flex
                          gap={1}
                          align="center"
                          background="#FED7AA"
                          paddingX={1}
                          paddingY={0.2}
                          rounded={5}
                        >
                          <FaStar
                            style={{ color: "#F97316", fontSize: "12px" }}
                          />
                          <Text color="#F97316" fontSize={12}>
                            {" "}
                            5.00{" "}
                          </Text>
                        </Flex>
                      </Badge>
                      <Text
                        color="#6B7280"
                        fontSize={12}
                        textDecoration="underline"
                      >
                        (99 reviews)
                      </Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                      <Flex
                        width={10}
                        height={15}
                        position="relative"
                        marginRight={2}
                      >
                        <Image
                          src={`https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo`}
                          height={20}
                          width={20}
                          alt="item"
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #eee",
                            position: "absolute",
                            left: "0",
                            top: "0",
                            transform: "translate-x-(-50%)",
                          }}
                        />
                        <Image
                          src={`https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo`}
                          height={20}
                          width={20}
                          alt="item"
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #eee",
                            position: "absolute",
                            left: "30%",
                            top: "0",
                            transform: "translate-x-(-50%)",
                          }}
                        />
                        <Image
                          src={`https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo`}
                          height={20}
                          width={20}
                          alt="item"
                          style={{
                            borderRadius: "50%",
                            border: "1px solid #eee",
                            position: "absolute",
                            left: "70%",
                            top: "0",
                            transform: "translate-x-(-50%)",
                          }}
                        />
                      </Flex>
                      <Text color="#000" fontSize={12}>
                        Dyson, and 2+ more insurance accepted
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex align="center" gap={3}>
                  <Button
                    variant="default"
                    background="#fff"
                    border="1px solid"
                    borderColor="#eee"
                    rounded={50}
                  >
                    <Flex align="center" gap={2}>
                      <ImNotification
                        style={{ color: "#777", fontSize: "13px" }}
                      />
                      <Text color="#000" fontSize={13}>
                        {" "}
                        More Info{" "}
                      </Text>
                    </Flex>
                  </Button>
                  {data.book !== "" && (
                    <Button
                      variant="default"
                      background="#000"
                      border="1px solid"
                      borderColor="#000"
                      rounded={50}
                    >
                      <Flex align="center" gap={2}>
                        <SlCalender
                          style={{ color: "#fff", fontSize: "13px" }}
                        />
                        <Text color="#fff" fontSize={13}>
                          {data.book}
                        </Text>
                      </Flex>
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Flex>
            {data.tagged === false && (
              <>
                <hr />
                <Calender data={calendarData} />
              </>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
export default DoctorCard;
