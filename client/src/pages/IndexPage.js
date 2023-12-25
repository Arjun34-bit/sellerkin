import React from "react";
import NavBar from "../components/NavBar";
import SearchFilter from "../components/SearchFilter";
import { Box } from "@chakra-ui/react";
import ProductListing from "../components/ProductListing";

const IndexPage = () => {
  return (
    <div className="parents">
      <NavBar />
      <Box
        w="100%"
        h={100}
        padding="0.5rem 1%"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
        marginLeft={0}
      >
        <Box flexBasis="25%">
          <SearchFilter />
        </Box>
        <Box flexBasis={"80%"} position={"relative"}>
          <ProductListing />
        </Box>
      </Box>
    </div>
  );
};

export default IndexPage;
