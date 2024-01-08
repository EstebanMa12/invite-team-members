/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [emails, setEmails] = useState([]);
    const [selectedProjects, setSelectedProjects] = useState([]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleAddEmail = () => {
        setEmails([...emails, '']);
    };

    const handleRemoveEmail = (index) => {
        setEmails(emails.filter((_, i) => i !== index));
    };

    const handleEmailChange = (index, value) => {
        const newEmails = [...emails];
        newEmails[index] = value;
        setEmails(newEmails);
    };

    const handleSelectProject = (project) => {
        setSelectedProjects([...selectedProjects, project]);
    };

    const handleUnselectProject = (project) => {
        setSelectedProjects(selectedProjects.filter((p) => p !== project));
    };

    const handleSendInvites = () => {
        // Your logic to send invites goes here
        console.log('Sending invites to:', emails);
        console.log('Selected projects:', selectedProjects);
    };

    return (
        <div>
            <button onClick={openModal}>Invite people to My workspace</button>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen">
                        <div className="bg-white rounded-lg p-6 m-4 text-left shadow-xl transition-all transform">
                            <h2 className="text-xl font-semibold mb-6">
                                Add members
                            </h2>
                            <label className="block mb-4">
                                <span className="text-gray-700">Email</span>
                                {emails.map((email, index) => (
                                    <div key={index} className="flex mt-2">
                                        <input
                                            type="email"
                                            className="border border-gray-300 rounded p-2 w-full"
                                            value={email}
                                            onChange={(e) => handleEmailChange(index, e.target.value)}
                                        />
                                        {index > 0 && (
                                            <button
                                                onClick={() => handleRemoveEmail(index)}
                                                className="ml-2 p-2 text-red-500 hover:bg-red-100 rounded"
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button onClick={handleAddEmail} className="mt-2">
                                    + Add more members
                                </button>
                            </label>
                            <label className="block mb-4">
                                <span className="text-gray-700">Projects</span>
                                <select
                                    className="border border-gray-300 rounded p-2 w-full mt-2"
                                    onChange={(e) => handleSelectProject(e.target.value)}
                                >
                                    <option>Select a project</option>
                                    <option>Project 1</option>
                                    <option>Project 2</option>
                                    <option>Project 3</option>
                                </select>
                                <div className="mt-2">
                                    {selectedProjects.map((project) => (
                                        <div key={project} className="inline-block bg-gray-200 rounded p-2 mr-2">
                                            {project}
                                            <button
                                                onClick={() => handleUnselectProject(project)}
                                                className="ml-2 p-2 text-red-500 hover:bg-red-100 rounded"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </label>
                            <div className="mt-6">
                                <button
                                    onClick={handleSendInvites}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Send invites
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )};
        </div>
        );
    };
export default Modal;