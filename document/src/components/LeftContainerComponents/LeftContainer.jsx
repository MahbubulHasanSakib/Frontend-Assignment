import React from 'react'
import MenuBox from './MenuBox'
import DonutChart from './DonutChart'
import LineChart from './LineChart'
import Media from './Media'
import SocialListLeft from './SocialListLeft'

const LeftContainer = () => {
  return (
    <>
        <div className="left-container container">
          <MenuBox/>
          <DonutChart/>
          <LineChart/>
          <Media/>
          <SocialListLeft/>
        </div>
    </>
  )
}

export default LeftContainer