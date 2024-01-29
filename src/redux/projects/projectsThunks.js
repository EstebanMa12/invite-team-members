
import { setName, setCreateAt } from "./projectsSlice";
import { createProjectInCollection } from "../../services/projects/projectsService";

export const setNameThunk = (name) => (dispatch) => {
    dispatch(setName(name));
    }

export const setCreateAtThunk = (createAt) => (dispatch) => {
    dispatch(setCreateAt(createAt));
    }

export const createAProjectAsync = (newProject) => async (dispatch) => {
    try{
        const projectCollect = await createProjectInCollection(newProject);
        dispatch(setName(projectCollect));
        dispatch(setCreateAt(new Date()))
    }catch(error){
        console.warn(error);
        return false;
    }
}