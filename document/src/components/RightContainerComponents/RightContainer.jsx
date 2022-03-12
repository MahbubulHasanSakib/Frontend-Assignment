import React from 'react'
import JoinNewsLetter from './JoinNewsLetter'
import Account from './Account'
import Loading from './Loading'
import Calender from './Calender'

const RightContainer = () => {
  return (
  <>
   <div className="right-container container">
               <JoinNewsLetter/>
               <Account/>
               <Loading/>
               <Calender/>
            </div> 
  </>
  )
}

export default RightContainer