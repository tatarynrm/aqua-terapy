import React from 'react'

import Car1 from '../../assets/images/car1.jpg'
import Car2 from '../../assets/images/car2.jpg'
import Car3 from '../../assets/images/car3.jpg'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properities</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Higway</p>
                <p>Jeeps</p>
            </div>
            <div className="container">
                <img src={Car1} alt="" />
                <img src={Car2} alt="" />
                <img src={Car3} alt="" />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best