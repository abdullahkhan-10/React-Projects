import "./sidebar.css"
import  {myAssets} from "../../assets/assets"
import {useState} from "react"

const Sidebar = () => {

    const [extend, setExtend] = useState(true)
  return (
    <div className='sidebar'>
        {/* top  */}
        <div className="top">
            <img onClick={ ()=>setExtend(prev => !prev)} src={myAssets.menu_icon} className='menu' />
            <div className="new-chat">
                <img src={myAssets.plus_icon}  />
                {extend ? <p>New Chat</p>: null}
            </div>

            {extend
            ? <div className="recent">
                  <p className='recent-title'>Recent</p>
                  <div className="recent-entry">
                     <img src={myAssets.message_icon}  />
                     <p>What is React...</p>
                  </div>
                </div>
            : null
            }
            
        </div>
        {/* bottom  */}

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={myAssets.question_icon} alt="" />
                {extend? <p>Help</p>: null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={myAssets.history_icon} alt="" />
                {extend? <p>Activity</p>: null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={myAssets.setting_icon} alt="" />
                {extend? <p>Settings</p>: null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar