import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    return (
        <div className="bg-gray-100 w-64 p-4 min-h-screen">
        <h3 className="text-xl font-semibold mb-3">General</h3>
        <ul className="space-y-2">
            <li><Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link></li>
            <li><Link to="/messages" className="text-gray-700 hover:text-blue-500">Messages</Link></li>
            <li><Link to="/reports" className="text-gray-700 hover:text-blue-500">Reports</Link></li>
            <li><Link to="/calendar" className="text-gray-700 hover:text-blue-500">Calendar</Link></li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-5">Workspace</h3>
        <ul className="space-y-2">
            <li><Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link></li>
            <li><Link to="/manage-members" className="text-gray-700 hover:text-blue-500">Manage Members</Link></li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-5">Pro</h3>
        <ul className="space-y-2">
            <li><Link to="/upgrade" className="text-gray-700 hover:text-blue-500">Upgrade to Pro</Link></li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-5">Help</h3>
        <ul className="space-y-2">
            <li><Link to="/help" className="text-gray-700 hover:text-blue-500">Help Center</Link></li> 
            <li><Link to="/settings" className="text-gray-700 hover:text-blue-500">Settings</Link></li>
        </ul>
        </div>
 );
};

export default SidebarMenu;
