import React from 'react'
import {Link} from 'react-router-dom'
const CalenderMonth = () => {
  return (
    <>
    <div className="calendar-month block"> 
                    <div className="arrow-btn-container">
                        <Link className="arrow-btn left" to="#202"><span className="icon fontawesome-angle-left"></span></Link>
                        <h2 className="titular">APRIL 2013</h2>
                        <Link className="arrow-btn right" to="#203"><span className="icon fontawesome-angle-right"></span></Link>
                    </div>
                    <table className="calendar">
                        <thead className="days-week">
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>R</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><Link className="scnd-font-color" to="#100">1</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="scnd-font-color" to="#101">2</Link></td>
                                <td><Link className="scnd-font-color" to="#102">3</Link></td>
                                <td><Link className="scnd-font-color" to="#103">4</Link></td>
                                <td><Link className="scnd-font-color" to="#104">5</Link></td>
                                <td><Link className="scnd-font-color" to="#105">6</Link></td>
                                <td><Link className="scnd-font-color" to="#106">7</Link></td>
                                <td><Link className="scnd-font-color" to="#107">8</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="scnd-font-color" to="#108">9</Link></td>
                                <td><Link className="scnd-font-color" to="#109">10</Link></td>
                                <td><Link className="scnd-font-color" to="#110">11</Link></td>
                                <td><Link className="scnd-font-color" to="#111">12</Link></td>
                                <td><Link className="scnd-font-color" to="#112">13</Link></td>
                                <td><Link className="scnd-font-color" to="#113">14</Link></td>
                                <td><Link className="scnd-font-color" to="#114">15</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="scnd-font-color" to="#115">16</Link></td>
                                <td><Link className="scnd-font-color" to="#116">17</Link></td>
                                <td><Link className="scnd-font-color" to="#117">18</Link></td>
                                <td><Link className="scnd-font-color" to="#118">19</Link></td>
                                <td><Link className="scnd-font-color" to="#119">20</Link></td>
                                <td><Link className="scnd-font-color" to="#120">21</Link></td>
                                <td><Link className="scnd-font-color" to="#121">22</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="scnd-font-color" to="#122">23</Link></td>
                                <td><Link className="scnd-font-color" to="#123">24</Link></td>
                                <td><Link className="scnd-font-color" to="#124">25</Link></td>
                                <td><Link className="today" to="#125">26</Link></td>
                                <td><Link to="#126">27</Link></td>
                                <td><Link to="#127">28</Link></td>
                                <td><Link to="#128">29</Link></td>
                            </tr>
                            <tr>
                                <td><Link to="#129">30</Link></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
    </>
  )
}

export default CalenderMonth