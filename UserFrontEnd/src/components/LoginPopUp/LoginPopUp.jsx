import {useState} from 'react'
import './LoginPopUp.css'
import {assets} from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    
    const [curState,setCurState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
              {curState!=="Log In" && <input type="text" placeholder='Your Name' required/>}
              <input type="email" placeholder='Your Email' required/>
              <input type="password" placeholder='Password' required/>
              <button className='btn'>{curState==="Sign Up"?"Create Account":"Log in"}</button>
            </div>
            <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>{curState === "Sign Up" ? "By continuing I agree to the terms of privacy & policy" : "Remember Me"}</p>
        </div>

        <p className="toggle-form">
          {curState === "Sign Up" ? (
            <>
              Already have an account? <span onClick={() => setCurState("Log In")}>Log In</span>
            </>
          ) : (
            <>
              Don't have an account? <span onClick={() => setCurState("Sign Up")}>Sign Up</span>
            </>
          )}
        </p>
        </form>
    </div>
  )
}

export default LoginPopUp