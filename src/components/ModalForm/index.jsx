
import { useState } from 'react';
import DropdownCheckbox from '../DropdownCheckbox';

const EmailInput = ({ email, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        id="email"
        className="block p-2 text-sm 
        text-gray-900 
        rounded-lg w-72 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Enter email address"
        value={email}
        onChange={onChange}
      />
    </div>
  );
};


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

const ModalForm = ({closeModal}) => {

  const [rows, setRows] = useState([
    {email:'',projects:[],permission:''},
    {email:'',projects:[],permission:''},
    {email:'',projects:[],permission:''}
  ]);

  const projects = ['Project 1', 'Project 2', 'Project 3'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // send invite here
    console.log(rows);
    closeModal();
  };

  const addRow = () => {
    const newRow = { email: '', projects: [], permission: '' };
    setRows([...rows, newRow]);
  }

  const handleEmailChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].email = e.target.value;
    setRows(updatedRows);
  };

  const handleProjectsChange = (selectedProjects, index) => {
    const updatedRows = [...rows];
    updatedRows[index].projects = selectedProjects;
    setRows(updatedRows);
  };

  const handlePermissionChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].permission = e.target.value;
    setRows(updatedRows);
  };

  return (
    <div className="w-full h-full fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="w-[1157px] h-[466px] my-32 rounded-lg bg-white shadow-xl z-50 overflow-hidden flex">
        <div className="flex justify-center items-center w-72 h-full  bg-pink-50 ">

        </div>
        <div className='p-4 '>
          <h1 className="text-pink-500 font-bold text-2xl pb-4 mb-6">
            Invite people to My workspace
          </h1>          
          <div>
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th scope='col' className="text-left px-6 py">Email</th>
                  <th scope='col' className="text-left px-6 py">Projects</th>
                  <th scope='col' className="text-left px-6 py">Permission</th>
                </tr>
              </thead>
              <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className='px-6 py-2'>
                    <EmailInput email={row.email} onChange={(e) => handleEmailChange(e, index)} />
                  </td>
                  <td className='px-6 py-2'>
                    <DropdownCheckbox
                      options={projects}
                      selectedOptions={row.projects}
                      onChange={(selectedProjects) => handleProjectsChange(selectedProjects, index)}
                    />
                  </td>
                  <td className='px-6 py-2'>
                    <PermissionSelection permission={row.permission} onChange={(e) => handlePermissionChange(e, index)} />
                  </td>
                </tr>
              ))}

              </tbody>
            </table>
            <div className="w-full">
              <button
                type="button"
                className="block p-2 text-sm  rounded-lg w-80 bg-white text-pink-500 mt-6 mb-8"
                onClick={addRow}
              >
                + Add more members
              </button>
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
              <button
                type="button"
                className="block p-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-500 w-20 "
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="block p-2 text-sm border border-gray-300 rounded-lg w-32 bg-pink-500 text-white"
              >
                Send invites
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;