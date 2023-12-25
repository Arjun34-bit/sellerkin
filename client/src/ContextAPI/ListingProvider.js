import React, { useContext, useState } from "react";
import { createContext } from "react";
const ListingContext = createContext();
const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState("");
  const [productName, setProductName] = useState("");

  return (
    <ListingContext.Provider
      value={{
        listing,
        setListing,
        productName,
        setProductName,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export const ListingState = () => {
  return useContext(ListingContext);
};

export default ListingProvider;
