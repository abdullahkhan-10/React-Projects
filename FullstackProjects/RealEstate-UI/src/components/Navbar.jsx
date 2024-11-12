import { useEffect, useState } from "react"
import { myAssets } from "../assets/assets"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect( () =>{
    if(showMobileMenu){
      document.body.style.overflow = "hidden"

    }else{
      document.body.style.overflow = "auto"
    }
    
    return () =>{
      document.body.style.overflow = "auto"

    }
  }, [showMobileMenu])


  return (
    <div className="absolute top-0 left-0 w-full z-10">

        <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-22 bg-transparent">
            {/* logo */}
            <a href="/">
               <img src={myAssets.logo} className="cursor-pointer" />
            </a>

            <ul className="hidden md:flex gap-7 text-white">
                <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
                <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
            </ul>

            {/* sign in button */}
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>

            {/* menu button */}
            <img onClick={() => setShowMobileMenu(true)} src={myAssets.menu_icon} className="md:hidden w-7 cursor-pointer" />
        </div>

        {/* ------------------------ Mobile menu ---------------------------- */}
        <div className={`border border-blue-500 md:hidden fixed right-0 top-0 bottom-0 ${showMobileMenu ? 'w-full' : 'h-0 w-0'} overflow-hidden bg-white transition-all`}>
          {/* cross icon  */}
          <div className="flex justify-end p-6">
            <img onClick={() => setShowMobileMenu(false)} src={myAssets.cross_icon} className="w-6 cursor-pointer" />
          </div>

          {/* all anchor tags  */}
          <ul className="flex flex-col items-center mt-6 px-5 text-lg font-bold ">
            <a onClick={() => setShowMobileMenu(false)} href="Header" className="px-4 py-2 rounded-full">Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="About" className="px-4 py-2 rounded-full">About</a>
            <a onClick={() => setShowMobileMenu(false)} href="Projects" className="px-4 py-2 rounded-full">Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href="Testimonials" className="px-4 py-2 rounded-full">Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar