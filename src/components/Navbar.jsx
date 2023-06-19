import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo2.png'
import { links } from '../data'
import { HiBars3 } from 'react-icons/hi2'
import { HiOutlineBarsArrowUp } from 'react-icons/hi2'
import { useState } from 'react'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo"></img>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive
                                        ? 'active-nav' : ''} onClick={() => setIsNavShowing
                                            (prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing
                    (prev => !prev)}>{
                        isNavShowing ? <HiOutlineBarsArrowUp /> : <HiBars3 />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar