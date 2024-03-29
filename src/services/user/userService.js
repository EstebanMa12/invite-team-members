import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const collectionName = "users";

export const createUserInCollection = async (uid, data) => {
  try {
    const docRef = doc(db, collectionName, uid);
    await setDoc(docRef, data);
    return {
      id: uid,
      ...data,
    };
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const getUserFromCollection = async (uid) => {
  try {
    const userRef = doc(db, collectionName, uid);
    const user = await getDoc(userRef);
    if (user.exists()) {
      return {
        id: user.id,
        ...user.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const loginFromFirestore = async (userData) => {
  try {
    let userLogged = await getUserFromCollection(userData.uid);
    if (userLogged) {
      return userLogged;
    } else {
      const newUser = {
        name: userData.displayName,
        photoUrl: userData.photoURL,
        accessToken: userData.accessToken,
        /* Otra información de usuario */
      };
      await createUserInCollection(userData.uid, newUser);
      return {
        id: userData.uid,
        ...newUser,
      };
    }
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const getEmailsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const emails = querySnapshot.docs.map((doc) => doc.data().email);
    return emails;
  } catch (error) {
    console.warn(error);
    return false;
  }
}

export const getUserByEmailFromFirestore = async (email) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const user = querySnapshot.docs.find((doc) => doc.data().email === email);
    if (user) {
      return {
        id: user.id,
        ...user.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error);
    return false;
  }
}

