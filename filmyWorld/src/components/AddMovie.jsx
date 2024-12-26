import { useState } from "react"
import {TailSpin} from "react-loader-spinner"
import { addDoc } from "firebase/firestore"
import { moviesRef } from "../Firebase/firebase"
import swal from "sweetalert"

const AddMovie = () => {

    const [form, setForm] = useState({
        title: "",
        year: "",
        description: "",
        image: "",
        rated: 0,
        rating: 0
    })

    const [loading, setLoading] = useState(false)

    const addNewMovie = async(e) =>{
        e.preventDefault()
        // console.log(form);
        
        setLoading(true)
        try {
            await addDoc(moviesRef, form)
            swal({
                title: "Successfully Added",
                icon: "success",
                buttons: "false",
                timer: 3000
            })
            // console.log("movie added");
            
            // empty the form when the data is sent 
            setForm({
                title: "",
                year: "",
                description: "",
                image: ""
            })
            
        } catch (error) {
            swal({
                title: error,
                icon: "error",
                buttons: false,
                timer: 3000
            })            
            // console.log("movie not added");
        }
        setLoading(false)
        
    }

  return (
    <div className="flex items-center justify-center mt-8">
        <form action="" className=" p-4">
            <h1 className="text-3xl text-center">Add Movie</h1>
            <div className="flex justify-center gap-4 mt-8 px-2">
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="name">Title</label>
                    <input 
                     className="p-2 rounded-md w-full border-none outline-none text-black"
                     type="text"
                     placeholder="The movie"
                     name="name"
                     value={form.title}
                     onChange={ (e) =>setForm({...form, title: e.target.value})}
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="year">Year</label>
                    <input 
                     className="p-2 rounded-md w-full border-none outline-none text-black"
                     type="number"
                     placeholder="2002"
                     name="year"
                     value={form.year}
                     onChange={ (e) =>setForm({...form, year: e.target.value})}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full px-2 py-4 gap-1">
                <label htmlFor="img">Image Link</label>
                <input
                 className="rounded-md border-none outline-none focus:border-gray-500 text-black p-2"
                 type="text"
                 name="img"
                 value={form.image}
                 onChange={ (e) =>setForm({...form, image: e.target.value})}
                />
            </div>

            <div className="flex flex-col w-full px-2 py-2 gap-1">
                <label htmlFor="area">Description</label>
                <textarea
                 className="rounded-md border-none outline-none focus:border-gray-500 text-black p-1"
                 name="area"
                 cols="20"
                 rows="7"
                 value={form.description}
                 onChange={ (e) =>setForm({...form, description: e.target.value})}
                ></textarea>
            </div>

            <button onClick={addNewMovie} className="flex mx-auto bg-red-500 border-0 py-2 px-8 hover:bg-red-700 rounded-md text-lg"> { loading ? <TailSpin height={25} color="white"/> : "Submit"}</button>
        </form>
    </div>
  )
}

export default AddMovie