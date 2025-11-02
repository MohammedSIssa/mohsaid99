import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5 h-dvh items-center justify-center">
      <h1 className="text-xl md:text-2xl font-bold">هذه الصفحة غير موجودة</h1>
      <NavLink className={"text-violet-300"} to={"/"}>الذهاب للصفحة الرئيسية</NavLink>
    </div>
  );
};

export default ErrorPage;
