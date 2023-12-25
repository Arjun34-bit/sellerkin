import {
  Box,
  Divider,
  Text,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Spacer,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../Widgets/Footer";
import { ListingState } from "../ContextAPI/ListingProvider";

const SearchFilter = () => {
  const [productType, setProductType] = useState("");
  const [sellerName, setSellerName] = useState("");

  const { listing, setListing, productName, setProductName } = ListingState();

  const categories = [
    "Jewellery",
    "Clothing",
    "Shoes",
    "Accessories",
    "Home & Living",
    "Beauty & Personal Care",
    "Electronics",
    "Toys & Games",
    // Add more categories as needed
  ];

  const handleProductSearch = async () => {
    try {
      const response = await fetch(`product/${productName}`, {
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
  return (
    <Box
      backgroundColor={"gray.200"}
      p={1}
      position={"relative"}
      height="88vh"
      overflow="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Box>
        <Text
          textAlign={"left"}
          ml={"2"}
          mt="5"
          mb={"3"}
          fontSize={"20"}
          fontWeight={"bold"}
        >
          Search Bar
        </Text>
        <p className="p-content" style={{ textAlign: "left" }}>
          Apply Filters for easier search
        </p>
        <Box p="8" outlineColor={"black"}>
          <Flex align="center">
            <InputGroup>
              <Input
                outlineColor={"black"}
                placeholder="Search..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <InputRightElement>
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  onClick={handleProductSearch}
                >
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Box>
        <Divider />
        <Box className="drop-down">
          <Accordion allowToggle>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Sales
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Content of the Sales section goes here.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Revenue
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Content of the Revenue section goes here.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="categories" className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Categories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select placeholder="Select a category">
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Sort
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Content of the Sales section goes here.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Type
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Select
                  placeholder="Select a product type"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option value="digital">Digital</option>
                  <option value="physical">Physical</option>
                </Select>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Date
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Content of the Sales section goes here.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="acordians">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Seller
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex align="center">
                  <InputGroup>
                    <Input
                      outlineColor={"black"}
                      placeholder="Seller Name..."
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                    />
                  </InputGroup>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SearchFilter;
