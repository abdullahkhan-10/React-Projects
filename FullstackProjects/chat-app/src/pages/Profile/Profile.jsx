import "./profile.css"
import myAssets from "../../assets/assets"
import {useState} from "react"

const Profile = () => {
  const [image, setImage] = useState(false)
  


  return (
    <div className='profile'>
      <div className="profile-container">
        {/* form  */}
        <form >
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={ (e) => setImage(e.target.files[0])} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
            <img src={image? URL.createObjectURL(image) : myAssets.avatar_icon} />
            upload profile image
          </label>

          <input type="text" placeholder='Your name' required />
          <textarea placeholder='write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>

        {/* right image  */}
        <img src={image? URL.createObjectURL(image): myAssets.logo_icon} className='profile-pic' />
      </div>
    </div>
  )
}

export default Profile