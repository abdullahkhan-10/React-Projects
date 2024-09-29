import "./profile.css"
import myAssets from "../../assets/assets"
import {useContext, useEffect, useState,} from "react"
import {useNavigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import {auth, db} from "../../config/configuration"
import { getDoc, doc, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import Upload from "../../lib/Upload"
import { AppContext } from "../../context/AppContext"

const Profile = () => {
  const [image, setImage] = useState(false)
  
  const [myName, setMyName] = useState("")
  const [myBio, setMyBio] = useState("")
  const [userId, setUserId] = useState("")
  const [prevImage, setPrevImage] = useState("")

  const navigate = useNavigate()

  const {getUserData} = useContext(AppContext)

  useEffect( () =>{
    onAuthStateChanged(auth, async(user) =>{
      if (user) {
        setUserId(user.uid)
        const userRef = doc(db, "Users", user.uid)
        const getUsers = await getDoc(userRef)

        if (getUsers.data().name) {
          setMyName(getUsers.data().name)
        }
        if (getUsers.data().bio) {
          setMyBio(getUsers.data().bio)
        }
        if (getUsers.data().avatar) {
          setPrevImage(getUsers.data().avatar)
        }
      }else{
        navigate("/")
      }
    })
  },[])

  // To update profile information.
  const updateProfile = async (event)=>{
    event.preventDefault()
    try {
      if (!prevImage & !image) {
        toast.error("Upload profile image")
      }

      const userRef = doc(db, "Users", userId)
      if (image) {
        const imageUrl = await Upload(image)
        setPrevImage(imageUrl)
        await updateDoc(userRef, {
          avatar: imageUrl,
          bio: myBio,
          name: myName
        })
      }else{
        await updateDoc(userRef, {
          bio: myBio,
          name: myName
        })
      }

      const users = await getDoc(userRef)
      getUserData(users.data())
      navigate("/chat")

    } catch (error) {
      // console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <div className='profile'>
      <div className="profile-container">
        {/* form  */}
        <form onSubmit={updateProfile}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={ (e) => setImage(e.target.files[0])} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
            <img src={image? URL.createObjectURL(image) : myAssets.avatar_icon} />
            upload profile image
          </label>

          <input onChange={ (e) =>setMyName(e.target.value)} value={myName} type="text" placeholder='Your name' required />
          <textarea onChange={ (e) => setMyBio(e.target.value)} value={myBio} placeholder='write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>

        {/* right image  */}
        <img src={image? URL.createObjectURL(image): prevImage? prevImage : myAssets.logo_icon} className='profile-pic' />
      </div>
    </div>
  )
}

export default Profile