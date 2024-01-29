import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="flex
        justify-end
        items-center
        pb-5
        gap-5
        border-b
        ">
            <FaRegBell className="cursor-pointer"/>
            <Link to='/projects'><button className="bg-pink-400 text-white rounded text-xs h-9 w-24 ml-6"> + New Project</button></Link>
        </header>
    );
    }

export default Header;