import { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { getDocs, query, where} from "firebase/firestore"
import { usersRef } from "../Firebase/firebase";
import swal from "sweetalert"
import {appState} from "../App"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  const useAppState = useContext(appState)

  // method to verify login details 
  const loginUser = async(e) =>{
    e.preventDefault()

    setLoading(true)
    try {
      const quer = query(usersRef, where("email", "==", form.email))
      const querySnap = await getDocs(quer)
      // console.log(querySnap);
      
      querySnap.forEach( (details) =>{
        const userDetails = details.data()
        // console.log(userDetails);
        // console.log(userDetails.name);
        if (userDetails.password == form.password) {
          useAppState.setLogin(true)
          useAppState.setUserName(userDetails.name)
          swal({
            text: "Logged in",
            icon: "success",
            buttons: false,
            timer: 3000
          })
          navigate("/")
        }else{
          swal({
            text: "Invalid Credentials",
            icon: "error",
            buttons: false,
            timer: 3000
          })
        }
      })

    } catch (error) {
      window.alert(error)
    }
    setLoading(false)
   
  }
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <h1 className="text-3xl text-center">Login</h1>

      <div className="p-2 my-2 w-1/2 md:w-1/3">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type={"email"}
          name="email"
           value={form.email}
           onChange={ (e) =>setForm({...form, email: e.target.value})}
        />
      </div>

      <div className="p-2 w-1/2 md:w-1/3">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type="password"
          name="password"
           value={form.password}
           onChange={ (e) =>setForm({...form, password: e.target.value})}
        />
      </div>

      <button onClick={loginUser} className="flex mx-auto bg-red-500 border-0 py-2 px-8 hover:bg-red-700 rounded-md text-lg my-2">
        {loading ? <TailSpin height={20} color="white" /> : "login"}
      </button>

      <div>
        <p>Do not have account ?
            <Link to={"/signup"}><span className="text-blue-500 ml-2">Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
