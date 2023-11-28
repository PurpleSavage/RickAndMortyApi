import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    
    <nav>
        <ul className="flex flex-col gap-10 py-4 px-8">
          <li>
            <Link to='/home' className="hover:text-emerald-500">Home</Link>
          </li>
          <li>
            <Link to='characters' className="hover:text-emerald-500">Characters</Link>
          </li>
          <li>
            <Link to='episodes' className="hover:text-emerald-500">Episode</Link>
          </li>
          <li>
            <Link to='location' className="hover:text-emerald-500">Location</Link>
          </li>
        </ul>
    </nav>
 
  )
}

export default Sidebar