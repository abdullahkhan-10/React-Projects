import { useNavigate } from "react-router-dom";
import myAssets from "../../assets/assets";
import "./leftSidebar.css";

import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../config/configuration"
import {AppContext} from "../../context/AppContext"
import { useContext, useState } from "react";

const LeftSidebar = () => {
  const navigate = useNavigate()
  const {userData} = useContext(AppContext)

  const [user, setUser] = useState(null)
  const [showSearch, setShowSearch] = useState(false)


  // To search our required user 
  const searchUser = async(e)=>{
    try {
      const input = e.target.value
      if (input) {
        setShowSearch(true)
        const userRef = collection(db, "Users")
        const q = query(userRef, where("username", "==", input.toLowerCase()))
        const querySnap = await getDocs(q)
        // console.log(querySnap);
        if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {

          setUser(querySnap.docs[0].data())
        }else{
          setUser(null)
        }

      }else{
        setShowSearch(false)
      }
    } catch (error) {
      console.log(error);
    }
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
          ? <div className="friends add-user">
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