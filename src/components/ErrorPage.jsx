import { NavLink } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="w-full p-25 flex items-center justify-center flex-col gap-5">
      <h1 className="text-2xl text-center md:text-4xl font-bold">
        هذه الصفحة غير موجودة 🚫
      </h1>
      <NavLink className="text-violet-300 hover:underline" to='/'>الصفحة الرئيسية</NavLink>
    </div>
  )
}