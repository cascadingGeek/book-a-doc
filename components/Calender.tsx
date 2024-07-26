"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

interface DayData {
  day: string;
  date: string;
  times: string[];
}

interface CalendarData {
  days: DayData[];
}

interface CalendarProps {
  data: CalendarData;
}

const Calender = ({ data }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time: string) => {
    setSelectedDate(time);
  };

  return (
    <Flex alignItems="start" justifyContent="space-between" width="100%">
      <TiChevronLeft style={{ fontSize: "30px", cursor: "pointer" }} />
      <Flex
        width="100%"
        height="auto"
        align="start"
        justify="space-around"
        overflowX="auto"
      >
        {data.days.map((data) => (
          <Flex
            key={data.date}
            direction="column"
            align="center"
            justify="start"
            height="auto"
            width="100%"
            gap={5}
            paddingLeft={5}
            borderColor="#eee"
          >
            <Flex
              align="center"
              justify="start"
              width="100%"
              borderRight="1px solid"
            >
              <Button
                variant="default"
                border="1px solid"
                borderColor={selectedDate === data.date ? "#9986F8" : "#eee"}
                rounded={20}
                onClick={() => handleDateClick(data.date)}
                bg={selectedDate === data.date ? "#F2F1FE" : "#fff"}
                width="80px"
                height="80px"
                marginRight={5}
                disabled={data.day === "Saturday" || data.day === "Sunday"}
                padding={0}
              >
                <Flex align="center" justify="center" gap={5} width="100%">
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap={3}
                  >
                    <Text
                      fontWeight={
                        selectedDate === data.date ? "semibold" : "normal"
                      }
                      fontSize="13px"
                      textTransform="uppercase"
                    >
                      {data.day}
                    </Text>
                    <Text
                      fontWeight={
                        selectedDate === data.date ? "semibold" : "normal"
                      }
                      fontSize="13px"
                    >
                      {data.date}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>

            <Flex align="center" gap={3} width="100%">
              {selectedDate === data.date && (
                <Box width="100%">
                  {data.times.map((time) => (
                    <Flex
                      key={time}
                      direction="column"
                      align="start"
                      justify="start"
                      gap={5}
                      width="100%"
                    >
                      <Button
                        variant="default"
                        border="1px solid"
                        borderColor={selectedDate === time ? "#9986F8" : "#eee"}
                        rounded={10}
                        onClick={() => handleTimeClick(time)}
                        bg={selectedDate === time ? "#F2F1FE" : "#fff"}
                        width="70px"
                        height="30px"
                        padding={0}
                        marginBottom={3}
                      >
                        <Text fontWeight="normal" fontSize="13px">
                          {time}
                        </Text>
                      </Button>
                    </Flex>
                  ))}
                </Box>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <TiChevronRight style={{ fontSize: "30px", cursor: "pointer" }} />
    </Flex>
  );
};
export default Calender;
