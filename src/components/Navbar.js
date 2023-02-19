import React, {useEffect, useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button'


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
          setButton(true);
        }
    };

    useEffect(() => {
      showButton();
    }, []);
    

    window.addEventListener('resize', showButton);


  return (
    <>
        <nav className="navbar"> 
           <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Lakbay <i className='fab fa-typo3'></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <CustomLink to="/Destination" className='nav-links' onClick={closeMobileMenu}>
                        Destination
                    </CustomLink>
                </li>
                <li className='nav-item'>
                    <CustomLink to="/Accomodation" className='nav-links' onClick={closeMobileMenu}>
                        Accomodation
                    </CustomLink>
                </li>
                <li className='nav-item'>
                    <CustomLink to="/Sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign-up
                    </CustomLink>
                </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
           </div>
        </nav>
    </>
  )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

