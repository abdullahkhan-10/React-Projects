import {assets} from "../assets/assets"
const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-[25%] h-full p-2 gap-2 text-white">
        {/* Top section  */}
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
            <div className="flex items-center gap-3 pl-3 cursor-pointer">
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className="font-bold">Home</p>
            </div>
            <div className="flex items-center gap-3 pl-3 cursor-pointer">
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className="font-bold">Search</p>
            </div>
        </div>

        {/* Below section  */}
        <div className="bg-[#121212] h-[85%] rounded">
            {/* top  */}
            <div className="flex items-center justify-between p-4">
                {/* left  */}
                <div className="flex items-center gap-3">
                    <img src={assets.stack_icon} className="w-8" alt="" />
                    <p className="font-semibold">Your Library</p>
                </div>

                {/* right  */}
                <div className="flex items-center gap-3">
                    <img className="w-5" src={assets.arrow_icon}  alt="" />
                    <img className="w-5" src={assets.plus_icon}  alt="" />
                </div>
            </div>

            {/* below  */}
            <div className="bg-[#242424] flex flex-col items-start justify-start gap-1 pl-4 p-4 m-2 rounded font-semibold">
                <h1>Create your first playlist</h1>
                <p className="font-light">it is easy we will help you</p>
                <button className="bg-white text-black px-4 py-1.5 rounded-full mt-4">Create Playlist</button>
            </div>

            <div className="bg-[#242424] flex flex-col items-start justify-start gap-1 pl-4 p-4 m-2 rounded font-semibold mt-4">
                <h1>Lets find podcasts to follow</h1>
                <p className="font-light">We will help you update on new episode</p>
                <button className="bg-white text-black px-4 py-1.5 rounded-full mt-4">Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar