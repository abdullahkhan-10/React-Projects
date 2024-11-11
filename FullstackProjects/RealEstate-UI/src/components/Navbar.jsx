import myAssets from "../assets/assets.js"
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div>
            <img src={myAssets.logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar