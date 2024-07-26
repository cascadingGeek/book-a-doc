import React, { FC, ReactElement } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { SiMaplibre } from "react-icons/si";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface MapComponentProps {
  lat: number;
  lng: number;
  text: ReactElement;
}

const MapComponent: FC<MapComponentProps> = ({ text }) => <div>{text}</div>;

const Map: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 6.52,
      lng: 3.37,
    },
    zoom: 11,
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      background="#fff"
      rounded={10}
      border="1px solid #eee"
      padding={5}
      width="100%"
      height={300}
      gap={5}
    >
      <Box width="100%" height="full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapComponent
            lat={6.5244}
            lng={3.3792}
            text={
              <FaMapMarkerAlt
                style={{
                  fontSize: "40px",
                  color: "#FD1774",
                }}
              />
            }
          />
        </GoogleMapReact>
      </Box>
      <Button
        variant="default"
        size="sm"
        background="#fff"
        rounded={50}
        border="1px solid #eee"
        padding={3}
      >
        <Flex align="center" gap={2}>
          <SiMaplibre />
          View in a map
        </Flex>
      </Button>
    </Flex>
  );
};

export default Map;
