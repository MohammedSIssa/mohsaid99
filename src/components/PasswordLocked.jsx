import { useState } from "react";
import { currentPassword } from "../model/special";
import { useContext } from "react";
import { SpecialContext } from "./SpecialContext";

export default function PasswordLocked({ children }) {
  const { showSpecial, setShowSpecial } = useContext(SpecialContext);
  const [password, setPassword] = useState("");

  return (
    <div className="text-center">
      {!showSpecial ? (
        <div
          dir="ltr"
          className="w-80 border-2 rounded-lg border-zinc-800 mx-auto my-10 pt-10 pb-5"
        >
          <h1 dir="ltr">Only for special people 🔓</h1>
          <hr className="border-1 border-zinc-800 mt-2 mb-5 mx-auto w-50" />
          <div dir="ltr" className="flex items-center justify-center gap-2">
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="🔒"
              className="text-center border-2 border-zinc-800 rounded-lg py-2"
              dir="ltr"
            />
            <button
              onClick={() => setShowSpecial(password === currentPassword)}
              className="bg-zinc-600 p-2 rounded-lg"
            >
              🔑
            </button>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
