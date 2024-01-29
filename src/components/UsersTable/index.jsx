/* eslint-disable react/no-unknown-property */
import DropdownList from "../DropdownList";
import Profile from "../Profile";
import { useEffect, useState } from 'react';
import { getGuest } from "../../redux/guest/guestThunks";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmailFromFirestore } from "../../services/user/userService";
import { getProjects } from "../../redux/projects/projectsThunks";

const PermissionSelection = ({ initialPermission, onChange }) => {
    const [permission, setPermission] = useState(initialPermission);
  
    const handlePermissionChange = (e) => {
      setPermission(e.target.value);
      onChange(e);
    };
  
    return (
      <div className="flex flex-col justify-center items-center">
        <select
          name="role"
          id="role"
          className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-28 bg-gray-50 focus:ring-pink-500 focus:border-pink-500 focus:text-pink-700 focus:font-bold"
          value={permission}
          onChange={handlePermissionChange}
        >
          <option value="admin">Admin</option>
          <option value="can-edit">Can edit</option>
          <option value="can-view">Can view</option>
        </select>
      </div>
    );
  };

const UsersTable = ({onOpenModal}) => {
    const dispatch = useDispatch();
    const {guest} = useSelector((store)=>store.guests)
    const {user} = useSelector((store)=>store.user)
    const [userData, setUserData] = useState(null);

    const {projects} = useSelector(store => store.projects)
    useEffect(() => {
        dispatch(getProjects())
    }
    , [dispatch])



    useEffect(() => {
        dispatch(getGuest());
    }, [dispatch]);

    useEffect(() => {
        guest.forEach(async(item)=>{
            const userData = await getUserByEmailFromFirestore(item.email)
            setUserData(userData)
        })
    }, [guest]);

    function RoleBadge({ role }) {
        const roleClasses = getRoleClasses(role);
    
        return (
            <div className={`px-3 py-1 flex items-center justify-center w-20 rounded-md ${roleClasses}`}>
                {role}
            </div>
        );
    }
    function getRoleClasses(role) {
        switch (role) {
            case 'admin':
                return 'text-red-800 bg-red-200   border-red-300 ';
            case 'editor':
                return 'text-cyan-800 bg-cyan-200 border-green-600';
            case 'guest':
                return 'text-yellow-800 bg-yellow-200 border-yellow-600';
            default:
                return '';
        }
      }


    return (
        <div className=" overflow-x-auto shadow-md sm:rounded-lg
        w-full
        h-full
        ">
            <div className="  items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
                {/* <label htmlFor="table-search" className="sr-only">Search</label> */}
                <div className="relative flex w-full justify-between">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users"/>
                    <button 
                    type="button"
                    className="bg-pink-400 text-white rounded text-xs h-9 w-24 ml-6"
                    onClick={onOpenModal}
                    > Add member</button>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-8 py-3
                        w-1/4">
                            User
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Projects
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Permissions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap w-1/4 ">
                            <Profile photoURL={user.photoURL} name={user.name} email={user.email}/>
                        </th>
                        <td className="px-6 py-4">
                            <RoleBadge role="admin"/>
                        </td>
                        <td className="px-6 py-4">
                            <DropdownList/> 
                        </td>
                        <td className="px-6 py-4">
                            <PermissionSelection onChange={(e) => handlePermissionChange(e, index)}/>                      
                        </td>
                    </tr>
                    {guest.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap w-1/4 ">
                                <Profile photoURL={userData?.photoURL} name={userData?.name} email={item.email}/>
                            </th>
                            <td className="px-6 py-4">
                                <RoleBadge role={
                                    item.permission === 'admin' ? 'admin' : 
                                    item.permission === 'can-edit' ? 'editor' : 
                                    item.permission === 'can-view' ? 'guest' : ''
                                }/>
                            </td>
                            <td className="px-6 py-4">
                                <DropdownList/> 
                            </td>
                            <td className="px-6 py-4">
                                <PermissionSelection initialPermission={item.permission} onChange={(e) => handlePermissionChange(e, index)}/>                      
                            </td>
                        </tr>
                    ))}
                                        
                </tbody>
            </table>
        </div>
    )    
}
export default UsersTable;
