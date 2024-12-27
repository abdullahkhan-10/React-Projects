import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    mobile: "",
    password: ""
  })
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <h1 className="text-3xl text-center">Login</h1>

      <div className="p-2 my-2 w-1/2 md:w-1/3">
        <label htmlFor="mobile">Mobile No.</label>
        <input
          className="p-2 rounded-md w-full border-none outline-none text-black"
          type={"number"}
          name="mobile"
           value={form.mobile}
           onChange={ (e) =>setForm({...form, mobile: e.target.value})}
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

      <button className="flex mx-auto bg-red-500 border-0 py-2 px-8 hover:bg-red-700 rounded-md text-lg my-2">
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
