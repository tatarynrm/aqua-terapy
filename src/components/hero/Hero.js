import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <h1>Find your perfect car</h1>
                <p className='search-text'>
                    Search the largest selection of luxury cars
                </p>
                <form className='search'>

                    <div>
                        <input type="text" placeholder='Car details' />
                    </div>
                    <div className='radio'>
                        <input type="radio" name='car' checked />
                        <label>Buy</label>
                        <input type="radio" name='car' />
                        <label>Rent</label>
                        <button type='submit'>
                            <AiOutlineSearch className='icon' />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Hero