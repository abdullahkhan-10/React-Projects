import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"

import { toast } from "react-toastify";

const auth = getAuth(app)
const db = getFirestore()

// Sign up
const signUp = async(userName, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const myUser = res.user

        // Users info
        // also add the info to database 
        await setDoc( doc(db, "Users", myUser.uid), {
            id: myUser.uid,
            username: userName.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, I am using chat app",
            lastSeen: Date.now()
        })

        // Chat info 
        await setDoc(doc(db, "Chats", myUser.uid), {
            chatData: []
        })

    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

// Login
const signIn = async(email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

// logout
const logOut = async()=>{
    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

export { signUp, signIn, logOut, auth, db }