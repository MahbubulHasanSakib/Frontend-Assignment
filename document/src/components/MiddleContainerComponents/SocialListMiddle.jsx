import React from 'react'
import SocialLink from './SocialLink'
const SocialListMiddle = () => {
  const socialLinks=[
    {
      name:"facebook",
      path:"#50"
    },
    {
      name:"twitter",
      path:"#51"
    },
    {
      name:"google+",
      path:"#52"
    }
  ]
  return (
    <>
    <ul className="social block">
          {socialLinks.map((s,index)=><SocialLink key={index} name={s.name} path={s.path} />)}
    </ul>
    </>
  )
}

export default SocialListMiddle