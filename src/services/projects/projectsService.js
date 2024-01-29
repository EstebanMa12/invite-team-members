import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const collectionName = "projects"

export const createProjectInCollection = async (uid, data) => {
    try{
        const docRef = doc(db, collectionName, uid);
        await setDoc(docRef, data);
        return{
            id: uid,
            ...data,
        };
    }catch(error){
        console.warn(error);
        return false;
    }
}