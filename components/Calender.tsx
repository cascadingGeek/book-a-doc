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

const Calendar = ({ data }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showTime, setShowTime] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setShowTime((prevSelected) => !prevSelected);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <Flex alignItems="start" justifyContent="space-between" width="100%">
      <TiChevronLeft
        style={{ fontSize: "30px", cursor: "pointer", marginTop: "20px" }}
      />
      <Flex
        width="100%"
        height="auto"
        align="start"
        justify="space-around"
        overflowX="auto"
      >
        {data.days.map((dayData) => (
          <Flex
            key={dayData.date}
            direction="column"
            align="center"
            justify="start"
            height={showTime ? 300 : 100}
            width="100%"
            gap={5}
            paddingLeft={5}
            borderColor="#333"
            borderX="1px solid"
          >
            <Flex align="center" justify="start" width="100%">
              <Button
                variant="default"
                border="1px solid"
                borderColor={selectedDate === dayData.date ? "#9986F8" : "#eee"}
                rounded={20}
                onClick={() => handleDateClick(dayData.date)}
                bg={selectedDate === dayData.date ? "#F2F1FE" : "#fff"}
                width="80px"
                height="80px"
                marginRight={5}
                disabled={
                  dayData.day === "Saturday" || dayData.day === "Sunday"
                }
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
                        selectedDate === dayData.date ? "semibold" : "normal"
                      }
                      fontSize="13px"
                      textTransform="uppercase"
                    >
                      {dayData.day}
                    </Text>
                    <Text
                      fontWeight={
                        selectedDate === dayData.date ? "semibold" : "normal"
                      }
                      fontSize="13px"
                    >
                      {dayData.date}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>
            {showTime && (
              <Flex align="center" gap={3} width="100%">
                <Box width="100%">
                  {dayData.times.map((time) => (
                    <Flex
                      key={time}
                      direction="column"
                      align="start"
                      justify="start"
                      gap={5}
                      width="100%"
                    >
                      {time !== "" && (
                        <Button
                          variant="default"
                          border={
                            time === "See More" || time === "See Less"
                              ? 0
                              : "1px solid"
                          }
                          borderColor={
                            selectedTime === time ? "#9986F8" : "#eee"
                          }
                          rounded={
                            time === "See More" || time === "See Less" ? 0 : 10
                          }
                          onClick={() => handleTimeClick(time)}
                          bg={selectedTime === time ? "#F2F1FE" : "#fff"}
                          width="70px"
                          height="30px"
                          padding={0}
                          marginBottom={3}
                          textDecoration={
                            time === "See More" || time === "See Less"
                              ? "underline"
                              : ""
                          }
                        >
                          <Text fontWeight="normal" fontSize="13px">
                            {time}
                          </Text>
                        </Button>
                      )}
                    </Flex>
                  ))}
                </Box>
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>
      <TiChevronRight
        style={{ fontSize: "30px", cursor: "pointer", marginTop: "20px" }}
      />
    </Flex>
  );
};

export default Calendar;
