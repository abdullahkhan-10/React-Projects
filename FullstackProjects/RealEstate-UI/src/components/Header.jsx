
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full' style={{backgroundImage: "url('/header_img.png')"}} id='#Header'>
        <Navbar/>

        <div className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white '>
          <h2 className='text-5xl sm:text-6xl md:text-[68px] inline-block max-w-3xl font-semibold pt-24'>Explore home that fit your dream</h2>

          <div className='space-x-6 mt-14'>
            <a href="#Project" className='border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-none'>Projects</a>
            <a href="#Contact-us" className='bg-blue-500 px-8 py-3 rounded hover:bg-transparent hover:border border-white'>Contact Us</a>
          </div>
        </div>
    </div>
  )
}

export default Header