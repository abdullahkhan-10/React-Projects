import myAssets from "../../assets/assets"
import "./rightSidebar.css"

import { logOut } from "../../config/configuration"



const RightSidebar = () => {
  
  return (
    <div className='right-side'>

      {/* Profile */}
      <div className="rs-profile">
        <img src={myAssets.profile_img}  />
        <h3>George Smith <img src={myAssets.green_dot} className='dot' /></h3>
        <p>Hey, There I am George Smithusing chat app</p>
      </div>
      <hr />

      {/* Media */}
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={myAssets.pic1} alt="" />
          <img src={myAssets.pic2} alt="" />
          <img src={myAssets.pic3} alt="" />
          <img src={myAssets.pic4} alt="" />
          <img src={myAssets.pic1} alt="" />
          <img src={myAssets.pic2} alt="" />
        </div>
      </div>
      <button onClick={() => logOut()}>Logout</button>

    </div>
  )
}

export default RightSidebar