/* eslint-disable react/no-unknown-property */
import DropdownList from "../DropdownList";
import Profile from "../Profile";

const UsersTable = ({onOpenModal}) => {
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
        overflow-y-hidden
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
                            <Profile/>
                        </th>
                        <td className="px-6 py-4">
                            <RoleBadge role="guest"/>
                        </td>
                        <td className="px-6 py-4">
                            <DropdownList/> 
                        </td>
                        <td className="px-6 py-4">
                            <DropdownList/>                      
                        </td>
                    </tr>
                    <tr className="bg-white border-b  hover:bg-gray-50 ">
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <Profile/>
                        </th>
                        <td >
                            <RoleBadge role="admin"/>
                        </td>
                        <td className="px-6 py-4">
                            <DropdownList/>                      
                        </td>
                        <td className="px-6 py-4">
                            <DropdownList/>                      
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    )    
}
export default UsersTable;
