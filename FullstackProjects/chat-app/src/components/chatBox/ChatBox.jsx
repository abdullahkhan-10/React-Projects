import "./chatBox.css"
import myAssets from "../../assets/assets"

const ChatBox = () => {
  return (
    <div className="chat-box">
      {/* user  */}
      <div className="chat-user">
        <img src={myAssets.profile_img}  />
        <p>George Smith <img src={myAssets.green_dot} className="dot" /></p>
        <img src={myAssets.help_icon} alt="" />
      </div>

      {/* users Messages */}
      <div className="user-msg">
        {/* sender message  */}
        <div className="sender-msg">
          <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vitae.</p>
          <div>
            <img src={myAssets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        {/* sender media files, images etc */}
        <div className="sender-msg">
          <img src={myAssets.pic1} className='media-img' />
          <div>
            <img src={myAssets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        {/* Reciever message  */}
        <div className="reciever-msg">
          <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vitae.</p>
          <div>
            <img src={myAssets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      {/* chat input  */}
      <div className="chat-input">
        <input type="text" placeholder='send a message' />

        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={myAssets.gallery_icon}  />
        </label>

        <img src={myAssets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox