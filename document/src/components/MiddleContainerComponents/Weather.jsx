import React from 'react'
import WeatherDay from './WeatherDay'
const Weather = () => {
    const nextDays = [
        {
            day: 'SAT',
            date: '29/06',
            temp: '25º',
            linkPath: '#43'
        },
        {
            day: 'SUN',
            date: '30/06',
            temp: '22º',
            linkPath: '#44'
        },
        {
            day: 'MON',
            date: '01/07',
            temp: '24º',
            linkPath: '#45'
        },
        {
            day: 'TUE',
            date: '02/07',
            temp: '26º',
            linkPath: '#46'
        },
        {
            day: 'WED',
            date: '03/07',
            temp: '27º',
            linkPath: '#47'
        },
        {
            day: 'THU',
            date: '04/07',
            temp: '29º',
            linkPath: '#48'
        }
    ]
    return (
        <>
            <div className="weather block clear">
                <h2 className="titular"><span className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>
                <div className="current-day">
                    <p className="current-day-date">FRI 29/06</p>
                    <p className="current-day-temperature">24º<span className="icon-cloudy"></span></p>
                </div>
                <ul className="next-days">
                    {
                        nextDays.map((d,index) => <WeatherDay key={index} day={d.day} date={d.date} temp={d.temp} linkPath={d.linkPath} />)
                    }
                </ul>
            </div>
        </>
    )
}

export default Weather