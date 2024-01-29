
import { setProjects, setError, addProjects, updateProjects, deleteProjects } from "./projectsSlice";
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const projectCollection = collection(db, "projects");

export const getProjects = () => {
    return async (dispatch) => {
        try {
            let tempArr = []
            const response = await getDocs(projectCollection);
            response.forEach((item)=>{
                tempArr.push({id: item.id, ...item.data() })
            });
            dispatch(setProjects(tempArr));
        } catch (error) {
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    };
}

export const createProject = (newProject) => {
    return async (dispatch) => {
        try {
            let tempObject = {... newProject};
            const response = await addDoc(projectCollection, newProject);
            tempObject.id = response.id;
            dispatch(addProjects(tempObject));
        } catch (error) {
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    };
}

export const updateProject = (project) => {
    const documentRef = doc(projectCollection, project.id);
    return async (dispatch) => {
        try {
            dispatch(updateProjects(project));
            delete project.id;
            await setDoc(documentRef, project);
        }catch(error){
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    }
}

export const deleteProject = (id) => {
    const documentRef = doc(projectCollection, id);
    return async (dispatch) => {
        try {
            dispatch(deleteProjects(documentRef));
            const response = await deleteDoc(documentRef);
            console.log(response);
        }catch(error){
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    }
}


