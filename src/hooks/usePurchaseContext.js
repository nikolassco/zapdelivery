import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";

export const usePurchaseContext = () => {
  const purchase = useContext(PurchaseContext);

  return purchase;
};
