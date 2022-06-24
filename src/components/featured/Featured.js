import React from 'react'

import Sale1 from '../../assets/images/sale1.jpg'
import Sale2 from '../../assets/images/sale2.jpg'
import Sale3 from '../../assets/images/sale3.jpg'
import Sale4 from '../../assets/images/sale4.jpg'
import Sale5 from '../../assets/images/sale5.jpg'
const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City,State & Zip based on views.</p>
            <div className="container">
                <img src={Sale1} alt="car" />
                <img className='order-1' src={Sale2} alt="car" />
                <img src={Sale3} alt="car" />
                <img src={Sale4} alt="car" />
                <img src={Sale5} alt="car" />
                <div className='span-3 img-details'>
                    <div className="top">
                        <h2> 123 Acme St. Dallas,TX</h2>
                        <p>Car for Sale</p>
                        <p className='price'>$120,000,000</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className='bold'>Capacity:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="span-2 right-img-details">
                    <p>
                        Нові спортивні сидіння AMG Line надають особливо відчутну більшу бічну підтримку та комфорт. Візуальними особливостями є двоколірна оббивка з імітації шкіри ARTICO червона журавлина/чорний, а також типовий для AMG хвилюючий дизайн.
                    </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>
            {/* {Section} */}

        </div>

    )
}

export default Featured