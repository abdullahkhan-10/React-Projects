import { getDoc, doc, updateDoc } from 'firebase/firestore'
import {createContext, useState} from 'react'
import {db} from "../config/configuration"
import { useNavigate } from 'react-router-dom'
import {auth} from "../config/configuration"

export const AppContext = createContext()

const ContextProvider = (props) =>{

    const [userData, setUserData] = useState(null)
    const  [chatData, setChatData] = useState(null)
    const navigate = useNavigate()

    // to get userData from firebase
    const getUserData = async(userid) =>{
        const useRef = doc(db, "Users",userid)
        const userSnap = await getDoc(useRef)
        // console.log(userSnap);
        const data = userSnap.data()
        // console.log(data);
        setUserData(data)

        if(userData.avatar && userData.name){
            navigate("/chat")
        }else{
            navigate("/profile")
        }

        // to update last seen time
        await updateDoc(useRef, {
            lastSeen: Date.now()
        })

        setInterval( async() => {
            if (auth.chatUser){
                await updateDoc(useRef, {
                    lastSeen: Date.now()
                })
            }
        }, 60000);
        
        
    }

    // data inside this object will be accessible to entire app
    const value = {
        userData, setUserData,
        chatData, setChatData,
        getUserData
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;