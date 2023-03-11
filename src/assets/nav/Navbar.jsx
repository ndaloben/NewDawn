import { useEffect, useState } from 'react'
import { getTopNav } from '../data/navBar';
import './navbar.css'

const Navbar = () => {

    const [navItems, setNavItems] = useState([]);
    const [collapse, setCollapse] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('toggler-icon');

    useEffect(() => {
        setNavItems(getTopNav());

    },[])

    const onToggle = () => {
        collapse === 'nav-menu'
        ? setCollapse('nav-menu nav-collapse')
        : setCollapse('nav-menu');

        toggleIcon === 'toggler-icon'
        ? setToggleIcon('toggler-icon toggle')
        : setToggleIcon('toggler-icon');
    };

  return (
    <div className="nav-wrapper">
        <div  className="container">
        <a href="/" className="nav-brand">
                 NewDawn
            </a>
        <nav className="nav">
           
            <ul className={collapse}>
                {navItems.map(item => 
                <li key={item.id}className="nav-item">
                <a href={item.href} className="nav-link " >{item.label}
                </a>
               </li>
                    )}
                
            </ul>
            <div className={toggleIcon} onClick={onToggle}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </nav>


    </div>
    
    </div>
  )
}

export default Navbar