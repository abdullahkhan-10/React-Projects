import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"

import { toast } from "react-toastify";

const auth = getAuth(app)
const db = getFirestore()

const signUp = async(userName, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const myUser = res.user

        // Users info
        // also add the info to database 
        await setDoc( doc(db, "Users", myUser.userId), {
            id: myUser.userId,
            username: userName.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "",
            lastSeen: Date.now()
        })

        // Chat info 
        await setDoc(doc(db, "Chats", myUser.userId), {
            chatData: []
        })

    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}

export { signUp }