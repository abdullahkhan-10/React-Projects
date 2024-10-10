import {myAssets} from "../../assets/assets"
import "./main.css"
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={myAssets.user_icon}  />
        </div>

        {/* main container  */}
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Abdullah</span></p>
                <p>How can I help you today?</p>
            </div>

            {/* cards  */}
            <div className="cards">
                <div className="card">
                    <p>Suggest,beautiful places to see on an upcoming road trip</p>
                    <img src={myAssets.compass_icon} />
                </div>
                <div className="card">
                    <p>Briefly summerize this concept: urban planning</p>
                    <img src={myAssets.bulb_icon} />
                </div>
                <div className="card">
                    <p>Brainstorm team bounding activities for our work retreat</p>
                    <img src={myAssets.message_icon} />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={myAssets.code_icon} />
                </div>
            </div>

            {/* bottom  */}
            <div className="main-bottom">
                {/* search box  */}
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={myAssets.gallery_icon} alt="" />
                        <img src={myAssets.mic_icon} alt="" />
                        <img src={myAssets.send_icon} alt="" />
                    </div>
                </div>

                {/* info  */}
                <p className="bottom-info">Gemini can display inaccurate info, including peple, so double-check its respoonse. Your privacy and Gemini.</p>
            </div>
        </div>
    </div>
  )
}

export default Main