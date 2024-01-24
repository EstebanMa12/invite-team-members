import { useState } from "react";

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    return(
        <div className="relative inline-block">
            <button 
                id="dropdownDefaultButton" 
                data-dropdown-toggle="dropdown" 
                className="bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
                type="button"
                onClick={handleToggle} 
            >
                Dropdown button 
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {
                isOpen && (
                    <div id="dropdown" className="z-1000 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default DropdownList;