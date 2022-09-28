import { createContext, useState } from "react";

export const PurchaseContext = createContext({});

export const PurchaseContextProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [shopCart, setShopCart] = useState([]);

  function handleAddItem(item, type) {
    const newItem = {
      id: item.id,
      category: item.category,
      name: item.itemName,
      description: item.itemDescription,
      type: type.option,
      price: type.price,
      promotion: item.promotion
    }

    setShopCart([...shopCart, newItem]);
  }
  console.log(shopCart)


  return (
    <PurchaseContext.Provider value={{ searchTerm, setSearchTerm, handleAddItem }}>
      {children}
    </PurchaseContext.Provider>
  )
}
