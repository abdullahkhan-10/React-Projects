import {myAssets} from "../assets/assets"

const Footer = () => {

  return (
    <footer className="w-full pt-10 mt-8 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden" id="Footer">
        {/* top  */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-start">
            {/* left side  */}
             <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img src={myAssets.logo_dark} />
                <p className="text-gray-400 mt-4 max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi perferendis autem dignissimos possimus obcaecati voluptate voluptas dolores, quae eos aliquam voluptatem ea!</p>
            </div>
            

            {/* middle  */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>

              <ul className="flex flex-col gap-2 text-gray-400">
                <a href="#Header" className="hover:text-white">Home</a>
                <a href="#About" className="hover:text-white">About us</a>
                <a href="#Contact" className="hover:text-white">Contact us</a>
                <a href="#Privacy" className="hover:text-white">Privacy Policy</a>
              </ul>
            </div>

            {/* right side  */}
            <div className="w-full md:w-1/3">
              <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
              <p className="text-gray-400 mb-4 max-w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
              
              <div className="flex gap-1">
                <input type="email" placeholder="Enter Your Email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus-outline-none w-full md-w-auto" />
                <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
              </div>
            </div>
      </div>

      {/* bottom  */}
      <div className="border-t border-gray-700 py-4 mt-10 text-gray-500 text-center">
        Copyright 2024 @Abdullahkhan. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
