import React from 'react'
import { Link } from 'react-router-dom'
const WeatherDay = ({day,date,temp,linkPath}) => {
    return (
        <>
            <li>
                <Link to={`${linkPath}`}>
                    <p className="next-days-date"><span className="day">{day}</span> <span className="scnd-font-color">{date}</span></p>
                    <p className="next-days-temperature">{temp}<span className="icon icon-cloudy scnd-font-color"></span></p>
                </Link>
            </li>
        </>
    )
}

export default WeatherDay