"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Select from "react-select";
import {
  VisitOptions,
  SpecialtyOptions,
  LanguageOptions,
} from "@/utils/mockData";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const Filter = () => {
  const [value, setValue] = useState<string>("no-preference");

  const [sliderValue, setSliderValue] = useState(70);

  const handleSliderChange = (value: any) => {
    setSliderValue(value);
  };

  const getSegment = (value: any) => {
    if (value < 20) return 1;
    if (value < 40) return 2;
    if (value < 60) return 3;
    if (value < 80) return 4;
    return 5;
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: "1px solid #eee",
      borderRadius: "15px",
      padding: "2px",
      boxShadow: state.isFocused ? "0 0 0 1px #aaa" : "none",
      "&:hover": {
        borderColor: "#eee",
      },
      outline: "none",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "10px",
      marginTop: "5px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#f0f0f0"
        : state.isFocused
        ? "#e0e0e0"
        : "#fff",
      color: "#000",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#F2F1FE",
      borderRadius: "8px",
      border: "1px solid #9986F8",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#000",
      fontSize: "15px",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#777",
      "&:hover": {
        backgroundColor: "#F2F1FE",
        color: "#333",
      },
    }),
  };

  return (
    <Box
      background="#fff"
      rounded={10}
      border="1px solid #eee"
      padding={5}
      width="100%"
      height="auto"
    >
      <Text marginBottom={5} fontSize={18} fontWeight="semibold">
        {" "}
        All Filter{" "}
      </Text>
      <span
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "#777",
          marginBottom: "20px",
        }}
      />
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Preferred Time{" "}
        </Text>
        <Flex direction="column" gap={5}>
          <CheckboxGroup colorScheme="purple" defaultValue={["morning"]}>
            <Flex direction="column" gap={5}>
              <Checkbox value="dawn">Early morning (Before 9am)</Checkbox>
              <Checkbox value="morning">Morning (9am - noon)</Checkbox>
              <Checkbox value="afternoon">Afternoon (Noon - 4pm)</Checkbox>
              <Checkbox value="evening">Evening (Noon - 4pm)</Checkbox>
            </Flex>
          </CheckboxGroup>
        </Flex>
      </Box>
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Provider Gender{" "}
        </Text>
        <Flex direction="column" gap={5}>
          <RadioGroup onChange={setValue} colorScheme="purple" value={value}>
            <Stack direction="column">
              <Radio value="no-preference">No Preference</Radio>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Visit Reason{" "}
        </Text>
        <Select
          defaultValue={[VisitOptions[0]]}
          isMulti
          name="visit"
          options={VisitOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          styles={customStyles}
        />
      </Box>
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Specialty{" "}
        </Text>
        <Select
          defaultValue={[SpecialtyOptions[0]]}
          isMulti
          name="visit"
          options={SpecialtyOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          styles={customStyles}
        />
      </Box>
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Rating / Review{" "}
        </Text>
        <Flex align="center" gap={2}>
          <Flex
            align="center"
            justify="center"
            paddingX={3}
            paddingY={2}
            rounded={10}
            borderColor="#eee"
            border="1px solid"
          >
            1
          </Flex>
          <Slider
            aria-label="slider-ex-4"
            value={sliderValue}
            onChange={handleSliderChange}
            step={1}
            min={0}
            max={100}
          >
            <SliderTrack bg="purple.100">
              <SliderFilledTrack bg="purple" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="purple" as={FaCircle} />
            </SliderThumb>
          </Slider>
          <Flex
            align="center"
            justify="center"
            paddingX={3}
            paddingY={2}
            rounded={10}
            borderColor="#eee"
            border="1px solid"
          >
            5
          </Flex>
          <Flex
            align="center"
            justify="center"
            paddingX={3}
            paddingY={2}
            rounded={10}
            borderColor="#eee"
            border="1px solid"
          >
            <span style={{ color: "red" }}> {getSegment(sliderValue)}+ </span>
          </Flex>
        </Flex>
      </Box>
      <Box marginBottom={10}>
        <Text fontSize={15} fontWeight="semibold" marginBottom={5}>
          {" "}
          Language Spoken{" "}
        </Text>
        <Select
          defaultValue={[LanguageOptions[1]]}
          isMulti
          name="visit"
          options={LanguageOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          styles={customStyles}
        />
      </Box>
    </Box>
  );
};
export default Filter;
