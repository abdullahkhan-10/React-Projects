import { motion } from "motion/react"
import { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", " df199d8d-0876-4f65-9370-06a4ca2faa5d"); 

  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        alert("Form Submitted successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("");
        alert(data.message)
      }
    };
  return (
    <motion.div
        initial={{opacity:0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
     className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-2 under font-light">With Us</span></h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to make a Move? Let's Build your future Together</p>

        <form onSubmit={onSubmit} className="max-w-3xl mx-auto text-gray-600 pt-6" >
            {/* input box */}
            <div className="flex flex-wrap  p-4">

                <div className="w-full md:w-1/2 text-left">
                    Your Name
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />
                </div>
                <div className="w-full md:w-1/2 text-left md:pl-6">
                    Your Email
                    <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required />
                </div>

            </div>

            {/* text area  */}
            <div className="my-6 text-left">
                Message
                <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
            </div>

            {/* button */}
            <button className="bg-blue-500 text-white py-2 px-10 rounded">{ result ? result : "Send Message"}</button>
        </form>
    </motion.div>
  )
}

export default Contact