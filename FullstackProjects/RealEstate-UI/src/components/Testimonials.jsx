import {myAssets, testimonialsData} from "../assets/assets"
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
        initial={{opacity:0, y: 100}}
        transition={{duration: 1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
     className="container mx-auto py-10 px-4 lg:px-32 w-full overflow-hidden" id="Testimonials">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-2 under font-light">Testimonials</span></h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Real Stories from those who found Home with us</p>

        <div className="flex flex-wrap justify-center gap-8 mt-4 ">
            {
                testimonialsData.map( (testimonial, index) =>(
                    <div key={index} className="max-w-[380px] md:max-w-[300px] border shadow-lg px-8 py-12 text-center">
                        <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt} />
                        <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                        
                        <div className="flex justify-center gap-1 text-red-500 my-2">
                            {
                                Array.from( {length: testimonial.rating}, (item, index) =>(
                                    <img key={index} src={myAssets.star_icon} />
                                ))
                            }
                        </div>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Testimonials