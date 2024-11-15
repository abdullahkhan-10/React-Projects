// import { useState } from "react"
import { myAssets, projectsData } from "../assets/assets"

const Projects = () => {
  

  return (
    <section className=" border border-red-600 container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden" id="Projects">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-2 under font-light">Completed</span></h1>
        <p className="text-center mx-auto text-gray-500 max-w-80 mb-6">Crafting Spaces, Building Legacies, Explore Our portofolio</p>

        {/* Slider button  */}
        <div className="flex items-center justify-end mb-8">
          <button className="bg-gray-200 rounded p-3 mr-2">
            <img src={myAssets.left_arrow} alt="Previous" />
          </button>

          <button className="bg-gray-200 rounded p-3 mr-2">
            <img src={myAssets.right_arrow} alt="Next" />
          </button>
        </div>

        {/* projects slider container  */}
        <div className=" overflow-hidden">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out">
            {
              projectsData.map( (project, index) =>(
                <div key={index} className="relative flex-shrink-0 w-full md:w-1/4">
                  <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />

                  <div className=" absolute left-0 right-0 bottom-5 flex justify-center">
                    <div className="inline-block bg-white w-3/4 pl-2 py-2 shadow-md rounded-md">
                      <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                      <p className="text-gray-500 text-sm">{project.price} <span>{project.location}</span></p>
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Projects