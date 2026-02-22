import { createContext, type SetStateAction } from "react";

type TypeContextType = {
  type: string | null;
  setType: React.Dispatch<SetStateAction<string | null>>;
};

export const TypeContext = createContext<TypeContextType | undefined>(
  undefined,
);
