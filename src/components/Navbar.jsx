import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to ="/" className="w-10 h-10 rounded-lg bg-gray-100 items-center justify-center flex font-bold shadow-md ">
            <p className='blue-gradient_text'>RL</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':' text-gray-800'}> 
                About
            </NavLink>
            <NavLink to="/project" className={({isActive})=>isActive?'text-blue-500':' text-gray-800'}> 
                Project
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar