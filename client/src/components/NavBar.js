import React from "react";
import { Flex, Spacer, Button, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg="gray.100"
      boxShadow="base"
    >
      <Heading as="h1" size="md">
        Sellerkin
      </Heading>
      <Spacer />
      <Flex align="center">
        <Button variant="outline" mr={2}>
          Login
        </Button>
        <Button colorScheme="blue">Register</Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
