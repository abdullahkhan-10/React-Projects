import "./login.css"
import myAssets from "../../assets/assets"
import { useState } from "react"

import { signUp, signIn } from "../../config/configuration"

const Login = () => {
    const [currentState, setCurrentState] = useState("Sign Up")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        if (currentState === "Sign Up") {
            signUp(name, email, password)
        }else{
            signIn(email, password)
        }
    }

  return (
    <div className="login">
        <img src={myAssets.logo_big} className= 'logo' alt="" />

        <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{currentState}</h2>
            {currentState === "Sign Up" ?<input onChange={ (e) =>setName(e.target.value)} value={name} type="text" placeholder="username" className="form-input" required /> : null}
            <input onChange={(e) =>setEmail(e.target.value)} value={email} type="email" placeholder="Email address" className="form-input" required />
            <input onChange={ (e) =>setPassword(e.target.value)} value={password} type="password" placeholder="password" className="form-input" required />
            <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login now"}</button>

            <div className="login-term">
                <input type="checkbox"  />
                <p>Agree to the terms of use & privacy policy</p>
            </div>

            <div className="login-forget">
                {
                    currentState === "Sign Up"
                    ? <p className="login-toggle">Already have an account? <span onClick={ () => setCurrentState("Login")}>Login here</span></p>
                    : <p className="login-toggle">To create account! <span onClick={ () => setCurrentState("Sign Up")}>Click here</span></p>
                }

            </div>
        </form>
    </div>
  )
}

export default Login