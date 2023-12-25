import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ListingState } from "../ContextAPI/ListingProvider";
import ListingCards from "./ListingCards";

const Listings = () => {
  const { listing } = ListingState();

  return (
    <Box
      bg={"gray.200"}
      h="88vh"
      overflowY="scroll"
      position="relative"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Text
        p="1"
        textAlign={"left"}
        fontSize={"35px"}
        fontWeight={"bold"}
        ml={"5px"}
      >
        Listings
      </Text>
      <Box mt={5}>
        {listing ? (
          <ListingCards />
        ) : (
          <>
            <Box padding="7" margin="5" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="2"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="7" margin="5" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="2"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="7" margin="5" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="2"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="7" margin="5" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="2"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Listings;
