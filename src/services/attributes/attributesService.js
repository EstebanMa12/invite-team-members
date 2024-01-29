import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";


const collectionName = 'attributes'

export const createAttibutesInCollection = async (uid, data) => {
    try {
        const docRef = doc(db, collectionName, uid)
        await setDoc(docRef, data)
        return {
            id: uid,
            ...data,
        }
    } catch (error) {
        console.warn(error)
        return false
    }
}

export const getAttributesFromCollection = async (uid) => {
    try {
        const attributesRef = doc(db, collectionName, uid)
        const attributes = await getDoc(attributesRef)
        if (attributes.exists()) {
            return {
                id: attributes.id,
                ...attributes.data(),
            }
        } else {
            return null
        }
    } catch (error) {
        console.warn(error)
        return false
    }
}

export const attributesFromFirestore = async (attributesData) => {
    try {
        let attributesLogged = await getAttributesFromCollection(attributesData.uid)
        if (attributesLogged) {
            return attributesLogged
        } else {
            const newAttributes = {
                user: attributesData.user,
                role: attributesData.role,
                projects: attributesData.projects,
                permission: attributesData.permission,
            }
            await createAttibutesInCollection(attributesData.uid, newAttributes)
            return {
                id: attributesData.uid,
                ...newAttributes,
            }
        }
    } catch (error) {
        console.warn(error)
        return false
    }
}

const updateAttributeInUserDocument = async (userId, attributeKey, value) => {
    try {
        const userRef = doc(db, collectionName, userId)
        await setDoc(userRef, { [attributeKey]: value }, { merge: true })
        return true
    } catch (error) {
        console.warn(error)
        return false
    }
}

// TODO: Implementar logica para actualizar atributo en la base de
// datos de usuario
export const updateAttributeInUser = async (userId, attributeKey, value) => {
    try {
        const userRef = doc(db, collectionName, userId)
        await setDoc(userRef, { [attributeKey]: value }, { merge: true })
        return true
    } catch (error) {
        console.warn(error)
        return false
    }
}