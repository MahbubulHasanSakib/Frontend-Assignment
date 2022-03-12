import React from 'react'
import {Link} from 'react-router-dom'
const JoinNewsLetter = () => {
  return (
   <>
    <div className="join-newsletter block">
                    <h2 className="titular">JOIN THE NEWSLETTER</h2>
                    <div className="input-container">
                        <input type="text" placeholder="yourname@gmail.com" className="email text-input"/>
                        <div className="input-icon envelope-icon-newsletter"><span className="fontawesome-envelope scnd-font-color"></span></div>
                    </div>
                    <Link className="subscribe button" to="#21">SUBSCRIBE</Link>
                </div>
   </>
  )
}

export default JoinNewsLetter