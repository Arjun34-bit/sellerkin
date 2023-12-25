import React from "react";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListingCards = ({ isLoading, list }) => {
  const cardBgColor = useColorModeValue("white", "gray.800");
  const skeletonColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={cardBgColor}
      boxShadow="md"
      padding="7"
      margin="5"
    >
      <Flex>
        <Skeleton isLoaded={!isLoading}>
          <Image
            src={list.productImages[0]}
            alt="Product Image"
            boxSize="150px"
            objectFit="cover"
            mr={4}
          />
        </Skeleton>
        <Stack flex="1">
          <Skeleton isLoaded={!isLoading}>
            <Text textAlign={"left"} fontSize="xl" fontWeight="bold">
              {list.title}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text textAlign={"left"} fontSize="sm" color="gray.500">
              {list.description}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text textAlign={"left"} fontSize="sm" color="gray.500">
              <b>Category: </b>
              {list.category}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text textAlign={"left"} fontSize="sm" color="gray.500">
              <b>Quantity: </b> {list.quantity}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text textAlign={"left"} fontSize="sm" color="gray.500">
              <b>Keywords : </b>
              {list.keywords.map((keyword, index) => (
                <span key={index}>
                  {keyword}
                  {index < keyword.length - 1 ? ", " : ""}
                </span>
              ))}
            </Text>
          </Skeleton>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ListingCards;
