import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ListingState } from "../ContextAPI/ListingProvider";
import ListingCards from "./ListingCards";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";

const ProductListing = () => {
  const { listing, setListing, productName, setProductName } = ListingState();

  const getAllListings = async () => {
    try {
      const response = await fetch("/product/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      setListing(data);
      console.log(data);
    } catch (error) {}
  };

  const handleClose = () => {
    setProductName("");
    getAllListings();
  };

  useEffect(() => {
    getAllListings();
  }, []);

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
        display={"flex"}
        p="1"
        textAlign={"left"}
        fontSize={"35px"}
        fontWeight={"bold"}
        ml={"5px"}
      >
        Listings
        <p>
          {productName ? (
            <p
              className="close-box"
              style={{
                padding: 1,
                marginLeft: 20,
                fontWeight: 100,
                backgroundColor: "gray",
              }}
            >
              searching for "{productName}"
              <CloseIcon
                className="close-btn"
                marginLeft={"8"}
                marginRight={"5"}
                boxSize={6}
                onClick={handleClose}
              />
            </p>
          ) : (
            ""
          )}
        </p>
      </Text>
      <Box mt={5}>
        {listing ? (
          <Box>
            {listing.map((list) => (
              <ListingCards list={list} />
            ))}
          </Box>
        ) : (
          <Spinner
            size="xl"
            w={20}
            h={20}
            alignSelf={"center"}
            margin={"auto"}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProductListing;
