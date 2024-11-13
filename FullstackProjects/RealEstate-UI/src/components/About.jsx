import { myAssets } from "../assets/assets"

const About = () => {
  return (
    <section className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">

        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-2 under font-light">Our Brand</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-6">Passionate About Properties, Dedicated to your Vision</p>

        {/* picture and details  */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">

            {/* right side  */}
            <img src={myAssets.brand_img} className="w-full md:w-1/2 max-w-lg" />

            {/* left side  */}
            <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    <div>
                        <p className="text-4xl font-medium text-gray-800">10+</p>
                        <p>Years of Experiance</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>

                <p className="max-w-lg my-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nisi sint sapiente pariatur dolore, ullam cum quos esse ipsum ea id amet corporis quae ratione cupiditate nemo laboriosam porro earum praesentium odio! Molestiae, adipisci consequuntur?</p>

                <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn More</button>
            </div>
           
        </div>
    </section>
  )
}

export default About