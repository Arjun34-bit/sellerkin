import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      className="footer"
      textAlign={"end"}
      mt={"5px"}
      position="sticky"
      bottom="0"
      mb={0}
    >
      <Button variant="outline" mr={2}>
        Clear
      </Button>
      <Button colorScheme="blue">Search</Button>
    </Box>
  );
};

export default Footer;
