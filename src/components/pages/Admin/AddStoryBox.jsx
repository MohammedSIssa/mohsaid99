import { FaPlus } from "react-icons/fa";

import { API, DEV_API } from '../../../scripts/globals'
import { useAuth } from "../../hooks/useAuth";

export default function AddStoryBox({ type, count }) {
  const API_CALL =
    import.meta.env.MODE !== "development"
      ? `${API}/${type}`
      : `${DEV_API}/${type}`;
	
	const { user } = useAuth();

  async function createStory(e) {
  	e.preventDefault();
  	alert(`Creating ${type} ${count}`)
  	try {
  	const res = await fetch(API_CALL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.apikey}`,
        },
        body: JSON.stringify({
          title: "ستوري جديد",
          year: new Date().getFullYear(),
          type,
          summary: "",
          count,
          special: false,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save data.");
      }
      
      if(res.ok) {
      	alert(`Created ${type} ${count} successfully!`)
      	location.reload();
      }
  	} catch (err) {
  		console.error(err)
  	}
  }
  
  return (
    <form
      className={`story p-5 hover:brightness-110 transition-all duration-200 hover:cursor-pointer w-60 min-w-60 border rounded-lg flex items-center justify-center`}
      onSubmit={createStory}
      onClick={createStory}
      style={{ color: 'var(--font-color)'}}
    >
      <FaPlus size={50} />
    </form>
  );
}
