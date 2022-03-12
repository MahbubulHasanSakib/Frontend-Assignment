import React from 'react'
import OsPercentage from './OsPercentage'
const DonutChart = () => {
    const osPercentages = [
        {
            os: 'iOS',
            percentage: '21'
        },
        {
            os: 'Mac',
            percentage: '48'
        },
        {
            os: 'Linux',
            percentage: '9'
        },
        {
            os: 'Win',
            percentage: '32'
        },
          ]
    return (
        <>
            <div className="donut-chart-block block">
                <h2 className="titular">OS AUDIENCE STATS</h2>
                <div className="donut-chart">

                    <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
                    <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
                    <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
                    <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>

                    <p className="center-date">JUNE<br /><span className="scnd-font-color">2013</span></p>
                </div>
                <ul className="os-percentages horizontal-list">
                    {
                        osPercentages.map((p,index) => <OsPercentage key={index} os={p.os} percentage={p.percentage} />)
                    }
                </ul>
            </div>
        </>
    )
}

export default DonutChart