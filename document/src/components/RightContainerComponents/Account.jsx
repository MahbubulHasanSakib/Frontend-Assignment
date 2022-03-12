import React from 'react'
import {Link} from 'react-router-dom'
const Account = () => {
  return (
   <>
    <div className="account block"> 
                    <h2 className="titular">SIGN IN TO YOUR ACCOUNT</h2>
                    <div className="input-container">
                        <input type="text" placeholder="yourname@gmail.com" className="email text-input"/>
                        <div className="input-icon envelope-icon-acount"><span className="fontawesome-envelope scnd-font-color"></span></div>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Password" className="password text-input"/>
                        <div className="input-icon password-icon"><span className="fontawesome-lock scnd-font-color"></span></div>
                    </div>
                    <Link className="sign-in button" to="#22">SIGN IN</Link>
                    <p className="scnd-font-color">Forgot Password?</p>
                    <Link className="fb-sign-in" to="58">
                        <p><span className="fb-border"><span className="icon zocial-facebook"></span></span>Sign in with Facebook</p>
                    </Link>
                </div>
   </>
  )
}

export default Account