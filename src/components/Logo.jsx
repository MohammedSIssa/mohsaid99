import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <div className='logo hidden md:block'>
      <NavLink className="text-3xl" to='/'>MohammedSaid</NavLink>
    </div>
  )
}

export default Logo