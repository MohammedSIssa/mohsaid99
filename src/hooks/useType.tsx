import { useContext } from "react";
import { TypeContext } from "../context/TypeContext";

export const useType = () => {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useType must be used within an AuthProvider");
  }
  return context;
};
