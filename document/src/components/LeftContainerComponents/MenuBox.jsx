import React from 'react'
import {Link} from 'react-router-dom'
const MenuBox = () => {
  return (
     <>
       <div className="menu-box block">
                    <h2 className="titular">MENU BOX</h2>
                    <ul className="menu-box-menu">
                      
                        <li>
                            <Link className="menu-box-tab" to="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></Link>                            
                        </li>
                        <li>
                            <Link className="menu-box-tab" to="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></Link>                            
                        </li>
                        <li>
                            <Link className="menu-box-tab" to="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></Link>                            
                        </li>
                        <li>
                            <Link className="menu-box-tab" to="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</Link>
                        </li>
                        <li>
                            <Link className="menu-box-tab" to="#13"><span className="icon entypo-chart-line scnd-font-color"></span>Statistics</Link>
                        </li>  
                                          
                    </ul>
                </div>
     </>
  )
}

export default MenuBox