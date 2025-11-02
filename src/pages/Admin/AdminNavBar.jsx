import { NavLink } from "react-router-dom";

export default function AdminNavBar() {
  return (
    <nav className="flex gap-5">
      <NavLink className="font-bold" to={"/admin/add/post"}>إضافة منشور</NavLink>
      <NavLink className="font-bold" to={"/admin/add/story"}>إضافة ستوري</NavLink>
      <NavLink className="font-bold" to={"/admin/update/post"}>تحديث منشور</NavLink>
      <NavLink className="font-bold" to={"/admin/update/story"}>تحديث ستوري</NavLink>
    </nav>
  );
}
