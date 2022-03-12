import React from 'react'
import {Link} from 'react-router-dom'
const SocialLink = ({name,path}) => {
    const classname=(name==='google+'?'googleplus':name)
    return (
        <>
            <li><Link to={path}><div className={`${classname} icon`}><span className={`zocial-${classname}`}></span></div><h2 className={`${classname} titular`}>SHARE TO {name.toUpperCase()}</h2></Link></li>
        </>
    )
}

export default SocialLink