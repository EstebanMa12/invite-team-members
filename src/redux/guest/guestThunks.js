/* eslint-disable no-unused-vars */
import { 
    setGuest, 
    setError,
    addProjectToUser,
    deleteProjectFromUser,
    updateProjectFromUser,
    setUserProjects
 } from "./guestSlice";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
const projectCollection = collection(db, "guest");

export const createGuest = (guest) => async (dispatch) => {
    try {
        const response = await addDoc(projectCollection, guest);
        dispatch(setGuest({id: response.id, ...guest}))
    } catch (error) {   
        console.warn(error);
        dispatch(
            setError({ error: true, code: error.code, message: error.message })
        )
    }
}

export const updateGuest = (guest) => {
    const documentRef = doc(projectCollection, guest.id);
    return async (dispatch) => {
        try {
            dispatch(setGuest(guest));
            delete guest.id;
            await setDoc(documentRef, guest);
        }catch(error){
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    }
}

export const getGuest = () =>{
    return async (dispatch) => {
        try {
            let tempArr = []
            const response = await getDocs(projectCollection);
            response.forEach((item)=>{
                tempArr.push({id: item.id, ...item.data() })
            });
            // console.log(tempArr);
            dispatch(setGuest(tempArr));
        } catch (error) {
            console.warn(error);
            dispatch(
                setError({ error: true, code: error.code, message: error.message })
            )
        }
    }
} 