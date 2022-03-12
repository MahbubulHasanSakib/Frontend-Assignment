import React from 'react'
import {Link} from 'react-router-dom'
const Tweets = () => {
  return (
   <>
   <div className="tweets block"> 
                    <h2 className="titular"><span className="icon zocial-twitter"></span>LATEST TWEETS</h2>
                    <div className="tweet first">
                        <p>Ice-cream trucks only play music when out of ice-cream. Well played dad. On <Link className="tweet-link" to="#17">@Quora</Link></p>
                        <p><Link className="time-ago scnd-font-color" to="#18">3 minutes ago</Link></p>
                    </div>
                    <div className="tweet">
                        <p>We are in the process of pushing out all of the new CC apps! We will tweet again once they are live <Link className="tweet-link" to="#19">#CreativeCloud</Link></p>
                        <p><Link className="scnd-font-color" to="#20">6 hours ago</Link></p>
                    </div>
                </div> 
   </>
  )
}

export default Tweets