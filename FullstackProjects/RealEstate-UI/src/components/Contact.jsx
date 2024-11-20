
const Contact = () => {
  return (
    <secction className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-2 under font-light">With Us</span></h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to make a Move? Let's Build your future Together</p>

        <form className="max-w-3xl mx-auto text-gray-600 pt-6" >
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
            <button className="bg-blue-500 text-white py-2 px-10 rounded">Send Message</button>
        </form>
    </secction>
  )
}

export default Contact