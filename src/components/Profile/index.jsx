import { useState } from "react";
import { useSelector } from "react-redux";
import { logoutAsync } from "../../redux/user/userThunks";
import { useDispatch } from "react-redux";
const Profile = ({photoURL, name, email}) => { 
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex items-center gap-4 border-b m-4 pb-4 cursor-pointer relative"
        onClick={handleToggle}>
            <img 
            className="w-10 h-10 rounded-full"
            src={photoURL}
            />
            <div className="font-medium">
                <div>{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{email}</div>
            </div>
            {isOpen && (
                <div className="z-10 absolute top-4 right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{name}</div>
                        <div className="font-medium truncate">{email}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Earnings
                            </a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a
                            href="#"
                            onClick={()=>dispatch(logoutAsync())}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Profile;