import React from 'react'
import {Link} from 'react-router-dom'
const CalenderDay = () => {
  return (
   <>
   <div className="calendar-day block">
                    <div className="arrow-btn-container">
                        <Link className="arrow-btn left" to="#200"><span className="icon fontawesome-angle-left"></span></Link>
                        <h2 className="titular">WEDNESDAY</h2>
                        <Link className="arrow-btn right" to="#201"><span className="icon fontawesome-angle-right"></span></Link>
                    </div>
                        <p className="the-day">26</p>
                        <Link className="add-event button" to="#27">ADD EVENT</Link>
                </div>
   </>
  )
}

export default CalenderDay