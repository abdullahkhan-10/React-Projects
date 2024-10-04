import { useNavigate } from "react-router-dom";
import myAssets from "../../assets/assets";
import "./leftSidebar.css";

import {arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where} from "firebase/firestore"
import {db} from "../../config/configuration"
import {AppContext} from "../../context/AppContext"
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const LeftSidebar = () => {
  const navigate = useNavigate()
  const {userData, chatData} = useContext(AppContext)

  const [user, setUser] = useState(null)
  const [showSearch, setShowSearch] = useState(false)


  // To search our required user 
  const searchUser = async(e)=>{
    // console.log(chatData);
    
    try {
      const input = e.target.value
      if (input) {
        setShowSearch(true)
        const userRef = collection(db, "Users")
        const q = query(userRef, where("username", "==", input.toLowerCase()))
        const queryUser = await getDocs(q)
        // console.log(querySnap);
        
        if (!queryUser.empty && queryUser.docs[0].data().id !== userData.id) {
          let userExist = false
          chatData.map( (user) =>{
            if (user.rId === queryUser.docs[0].data().id) {
              userExist = true
            }
          })
          if (userExist) {
            setUser(queryUser.docs[0].data())
          }
          
        }else{
          setUser(null)
        }

      }else{
        setShowSearch(false)
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  }

  const addChat = async()=>{
    const messageRef = collection(db, "message")
    const chatRef = collection(db, "Chats")
    try {
      const newMessageRef = doc(messageRef)
      await setDoc(newMessageRef, {
        createAt: serverTimestamp(),
        message: [],
      })

      await updateDoc(doc(chatRef, user.id),{
        chatData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: true,
        })
      })

      await updateDoc(doc(chatRef, userData.id),{
        chatData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: user.id,
          updatedAt: Date.now(),
          messageSeen: true,
        })
      })
    } catch (error) {
      toast.error(error.message)
      console.error(error)
    }

    console.log(chatData);
    
  }


  return (
    <div className="left-side">
      {/* Top */}
      <div className="ls-top">
        <div className="ls-nav">
          <img src={myAssets.logo} className="nav-logo" />

          <div className="menu">
            <img src={myAssets.menu_icon} />

            <div className="sub-menu">
              <p onClick={ () => navigate("/profile")}>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <img src={myAssets.search_icon} alt="" />
          <input onChange={searchUser} type="text" placeholder="Search here..." />
        </div>
      </div>

      {/* Friends list  */}
      <div className="ls-list">
        {showSearch && user 
          ? <div onClick={addChat} className="friends add-user">
              <img src={user.avatar} />
              <p>{user.name}</p>
            </div>
          : Array(10).fill("").map((item, index) => (
            <div key={index} className="friends">
                <img src={myAssets.profile_img} />

                <div>
                    <p>George Smith</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default LeftSidebar;
