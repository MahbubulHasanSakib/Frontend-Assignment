import React from 'react'
import {Link} from 'react-router-dom'
const Media  = () => {
  return (
   <>
    <div className="media  block"> 
                  
                    <div id="media-display">
                        <Link  className="media-btn play" to="#23"><span className="fontawesome-play"></span></Link>
                    </div>
                    <div className="media-control-bar">
                        <Link  className="media-btn play" to="#23"><span className="fontawesome-play scnd-font-color"></span></Link>
                        <p className="time-passed">4:15 <span className="time-duration scnd-font-color">/ 9:23</span></p>
                        <Link  className="media-btn volume" to="#24"><span className="fontawesome-volume-up scnd-font-color"></span></Link>
                        <Link  className="media-btn resize" to="#25"><span className="fontawesome-resize-full scnd-font-color"></span></Link>
                    </div>
                </div>
   </>
  )
}

export default Media