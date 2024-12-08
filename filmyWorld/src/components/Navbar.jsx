import myAssets from "../assets/asset"

const Navbar = () => {
  return (
    <div className="container mx-auto ">
        <div className="flex items-center justify-between p-6">
            <a className="text-3xl font-bold" href="/">Filmy <span className="text-red-500">World</span></a>

            <div className="flex gap-8 text-gray-300">
                <a href="Home">Home</a>
                <a href="Home">Browse Movie</a>
                <a href="Home">News</a>
                <a href="Home">Contact us</a>
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