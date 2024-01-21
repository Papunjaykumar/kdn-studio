import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css';
import logo from '../../assets/logo/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    // mobile menu state
    const [sidenav,setSidenav]=useState(false);

    // desktop  menu fixed
    const [sticky,setSticky]=useState(false);

    // menu icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />
    // sidenave bar
    const sidenavShow=()=>{
        setSidenav(!sidenav);
    }
    // scroll fixed nav bar
    useEffect(()=>{
        const handleScroll=()=>{
            setSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
    return (
        <div>
            <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
                <div className='container'>
                    <nav className='navbar' id='Navbar'>
                        <div className='navbar_brand'>
                            <a href='/'>
                                <img src={logo} alt='logo' />

                            </a>
                        </div>
                        <div className='navbar_toggler' onClick={sidenavShow}>
                            {menuIcon}
                        </div>
                        <div className={`menu_items ${sidenav===true ? 'active' : ''}`}>
                            <ul>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="service"
                                        spy={true}
                                        smooth={true}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="portfolio"
                                        spy={true}
                                        smooth={true}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        
    )
}
