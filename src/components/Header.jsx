import { Link } from "react-router-dom"
import { IoReturnUpBackOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <h1>Rick && Morti</h1>
        <nav> 
            <Link to='/' className="hover:text-emerald-500 flex items-center gap-2"><IoReturnUpBackOutline /> Inicio</Link>   
        </nav>
    </div>
  )
}

export default Header