import React from 'react'

const OsPercentage = ({os,percentage}) => {
    return (
        <>
            <li>
                <p className={`${os.toLowerCase()} os scnd-font-color`}>{os}</p>
                <p className="os-percentage">{percentage}<sup>%</sup></p>
            </li>
        </>
    )
}

export default OsPercentage
