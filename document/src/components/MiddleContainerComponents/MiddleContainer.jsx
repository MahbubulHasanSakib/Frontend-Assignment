import React from 'react'
import Profile from './Profile'
import Weather from './Weather'
import Tweets from './Tweets'
import SocialListMiddle from './SocialListMiddle'
const MiddleContainer = () => {
  return (
    <>
        <div className="middle-container container">
                <Profile/>
                <Weather/>
                <Tweets/>
                <SocialListMiddle/>
        </div>
    </>
  )
}

export default MiddleContainer