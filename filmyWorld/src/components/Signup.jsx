import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from "../Firebase/firebase";
// import swal from "sweetalert"

// const auth = getAuth(app)

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

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

      <button className="flex mx-auto bg-red-500 border-0 py-2 px-8 hover:bg-red-700 rounded-md text-lg my-2">
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
