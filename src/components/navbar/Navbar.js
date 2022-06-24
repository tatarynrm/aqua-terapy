import React, { useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handlerMenu = () => setMenu(!menu);
    return (
        <div className='navbar'>
            <div className="container">
                <h1><span><AiFillCar /></span> <span>Rent</span> Cars</h1>

                <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Show More</a></li>
                </ul>

                <div onClick={() => handlerMenu()} className="hamburger">
                    {menu ? (<FaTimes className='icon' />) : (<GiHamburgerMenu className='icon' />)}

                </div>
            </div>

        </div >
    )
}

export default Navbar