import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">هاد الصفحة غير موجودة</h1>
      <NavLink to={"/"} className="text-violet-200 underline" replace>
        اضغط هنا
      </NavLink>
    </div>
  );
}
