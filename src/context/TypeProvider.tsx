import { TypeContext } from "./TypeContext";
import { useState } from "react";

export default function TypeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [type, setType] = useState<string | null>(null);
  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
}
