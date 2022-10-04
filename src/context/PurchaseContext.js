import { createContext, useState } from "react";

export const PurchaseContext = createContext({});

export const PurchaseContextProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [shopCart, setShopCart] = useState([]);
  const [qtd, setQtd] = useState(1);

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
    // setQtd(qtd + 1);
  }
  console.log(shopCart)


  return (
    <PurchaseContext.Provider value={{ searchTerm, setSearchTerm, handleAddItem, qtd, setQtd, shopCart }}>
      {children}
    </PurchaseContext.Provider>
  )
}
