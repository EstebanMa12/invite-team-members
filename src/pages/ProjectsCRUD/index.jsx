/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { createProject, deleteProject, getProjects, updateProject } from "../../redux/projects/projectsThunks"
import { useDispatch } from "react-redux"
import {FaEdit, FaTrashAlt} from 'react-icons/fa'

const ProjectsCRUD = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    const {projects} = useSelector(store => store.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
    }
    , [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProject({name}))
    }

    const handleDelete = (id) => {
        dispatch(deleteProject(id))
    }

    const handleEdit = (item) =>{
        setId(item.id)
        setName(item.name)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateProject({id, name}))
    }

    return (
        <div className="w-full flex flex-col gap-3 justify-center border items-center">
            <h1 className="text-3xl font-bold underline my-3">Proyectos</h1>
            <form className="flex flex-col items-center" >
                <input className="border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5" type="text" placeholder="Nombre del proyecto"
                onChange={(e) => setName(e.target.value)} />
                <div>
                    <button className="bg-pink-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center gap-2" onClick={handleSubmit}>Crear proyecto</button>
                </div>
            </form>
            {
                projects.map(item => (
                    <div className="flex flex-row gap-2" key={item.id}>
                        <div className="border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5">{item.name}</div>
                        <button className="bg-pink-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center gap-2" onClick={() => handleEdit(item)}><FaEdit/></button>
                        <button className="bg-pink-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center gap-2" onClick={() => handleDelete(item.id)}><FaTrashAlt/></button>
                    </div>
                ))
            }

        </div>
    )
}

export default ProjectsCRUD