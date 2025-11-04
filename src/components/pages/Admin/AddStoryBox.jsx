import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function AddStoryBox() {
  return (
    <NavLink
      className={`story w-60 min-w-60 h-full border rounded-lg p-3 px-4 flex items-center justify-center`}
      to={`/admin/add/story`}
      style={{ color: 'var(--font-color)'}}
    >
      <FaPlus size={50} />
    </NavLink>
  );
}
