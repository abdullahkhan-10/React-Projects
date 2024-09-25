import myAssets from "../../assets/assets";
import "./leftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-side">
      {/* Top */}
      <div className="ls-top">
        <div className="ls-nav">
          <img src={myAssets.logo} className="nav-logo" />

          <div className="menu">
            <img src={myAssets.menu_icon} />

            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <img src={myAssets.search_icon} alt="" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>

      {/* Friends list  */}
      <div className="ls-list">
        {
            Array(10).fill("").map((item, index) => (
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
