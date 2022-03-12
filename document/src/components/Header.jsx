import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    {/*Header*/}
    <header className="block">
        <ul className="header-menu horizontal-list">
            <li>
                <Link className="header-menu-tab" to="#1"><span className="icon entypo-cog scnd-font-color"></span>Settings</Link>
            </li>
            <li>
                <Link className="header-menu-tab" to="#2"><span className="icon fontawesome-user scnd-font-color"></span>Account</Link>
            </li>
            <li>
                <Link className="header-menu-tab" to="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</Link>
                <Link className="header-menu-number" to="#4">5</Link>
            </li>
            <li>
                <Link className="header-menu-tab" to="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favorites</Link>
            </li>
        </ul>
        <div className="profile-menu">
            <p>Me <Link to="#26"><span className="entypo-down-open scnd-font-color"></span></Link></p>
            <div className="profile-picture small-profile-picture">
                <img width="40px" alt="Anne Hathaway"  src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header