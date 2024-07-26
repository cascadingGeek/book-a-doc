import { Flex } from "@chakra-ui/react";
import DoctorCard from "./DoctorCard";
import Map from "./Map";
import Filter from "./Filter";
const DisplayCard = () => {
  return (
    <Flex justify="start" gap={5} width="100%" height="auto">
      <Flex direction="column" width="70%" height="auto" gap={5}>
        <DoctorCard />
      </Flex>
      <Flex direction="column" width="30%" height="auto" gap={5}>
        <Map />
        <Filter />
      </Flex>
    </Flex>
  );
};
export default DisplayCard;
