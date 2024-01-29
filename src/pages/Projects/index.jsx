import Sidebar from "../../components/Sidebar"
import ProjectsCRUD from "../../components/ProjectsCRUD"

const Projects = () => {    
    <Sidebar/>
    return (
        <div className="container flex flex-row ">
            <Sidebar/>
            <ProjectsCRUD/>
        </div>
    )

}

export default Projects