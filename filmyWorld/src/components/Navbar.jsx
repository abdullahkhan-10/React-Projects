import myAssets from "../assets/asset"

const Navbar = () => {
  return (
    <div className=" sticky z-10 top-0 bg-gray-500 ">
        <div className="flex items-center justify-between container mx-auto p-6">
            <a className="text-3xl font-bold" href="/">Filmy <span className="text-red-500">World</span></a>

            <div className="flex gap-8 ">
                <a className="text-red-500 text-[17px] hover:text-red-500" href="Home">Home</a>
                <a className="text-white text-[17px] hover:text-red-500" href="Home">Browse Movie</a>
                <a className="text-white text-[17px] hover:text-red-500" href="Home">News</a>
                <a className="text-white text-[17px] hover:text-red-500" href="Home">Contact us</a>
            </div>

            <div className="flex items-center gap-8">
                <div className="border border-gray-100 px-3 py-2 rounded-md flex items-center">
                    <input className="bg-transparent text-slate-100 text-[14px] border border-none outline-0" type="text" placeholder="Quick search" />
                    <img src={myAssets.searchIcon} className="w-4 cursor-pointer" alt="" />
                </div>

                <button>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar