import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from "../Firebase/firebase";
import swal from "sweetalert"
import { usersRef } from "../Firebase/firebase";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const signupUser = (e)=>{
    e.preventDefault()

    setLoading(true)
    const auth = getAuth(app)

    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then( (userDetails) =>{
      // console.log(`User sign up ${userDetails.user}`);
      
      // To add data to firbease firestore database.
      uploadData()
      setLoading(false)
      swal({
        text: "Successfuly Registered",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      navigate("/login")
    })
    .catch( (error) =>{
      window.alert(`An Error occured ${error}`)
    })
  }

  const uploadData = async() =>{
    await addDoc(usersRef, {
      name: form.name,
      email: form.email,
      password: form.password
    })
  }

  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <h1 className="text-3xl text-center">Sign Up</h1>

      <div className="p-2 my-2 w-1/2 md:w-1/3">
        <label htmlFor="name">Name</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="p-2 my-2 w-1/2 md:w-1/3">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="p-2 w-1/2 md:w-1/3">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <button onClick={signupUser} className="flex mx-auto bg-red-500 border-0 py-2 px-8 hover:bg-red-700 rounded-md text-lg my-2">
        {loading ? <TailSpin height={20} color="white" /> : "Sign up"}
      </button>

      <div>
        <p>
          Already have an account ?
          <Link to={"/login"}>
            <span className="text-blue-500 ml-2">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
