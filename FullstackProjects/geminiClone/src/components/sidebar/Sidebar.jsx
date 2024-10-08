import "./sidebar.css"
import  {myAssets} from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* top  */}
        <div className="top">
            <img src={myAssets.menu_icon} className='menu' />
            <div className="new-chat">
                <img src={myAssets.plus_icon}  />
                <p>New Chat</p>
            </div>

            <div className="recent">
                <p className='recent-list'>Recent</p>
                <div className="recent-entry">
                    <img src={myAssets.message_icon}  />
                    <p>What is React...</p>
                </div>
            </div>
        </div>
        {/* bottom  */}

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={myAssets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={myAssets.history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={myAssets.setting_icon} alt="" />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar