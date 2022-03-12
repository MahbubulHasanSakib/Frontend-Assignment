import React from 'react'
import {Link} from 'react-router-dom'
const Profile = () => {
  return (
     <>
     <div className="profile block">
                    <Link className="add-button" to="#28"><span className="icon entypo-plus scnd-font-color"></span></Link>
                    <div className="profile-picture big-profile-picture clear">
                        <img width="150px" alt="Anne Hathaway" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/ >
                    </div>
                    <h1 className="user-name">Anne Hathaway</h1>
                    <div className="profile-description">
                        <p className="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
                    </div>
                    <ul className="profile-options horizontal-list">
                     
                        <li><Link className="comments" to="#40"><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>23</p></Link></li>
                        <li><Link className="views" to="#41"><p><span className="icon fontawesome-eye-open scnd-font-color"></span>841</p></Link></li>
                        <li><Link className="likes" to="#42"><p><span className="icon fontawesome-heart-empty scnd-font-color"></span>49</p></Link></li>
                        
                    </ul>
     </div>
     </>
  )
}

export default Profile