import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

interface HeaderProps {
    linkMenu: {name: string, href: string}[]
}

export default function Header({linkMenu} : HeaderProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const closeMenu = () => {
        setTimeout(() => {
            setNavbarOpen(false);
        }, 300)
      }

      useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1200 && navbarOpen) {
                setNavbarOpen(false);
            }
        }
 
        handleResize();
 
        window.addEventListener("resize", handleResize);
 
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [navbarOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`sectHeader sectHeader--fixed${navbarOpen ? ' show-menu' : ''}${scrolled ? ' scrolled' : ''}`}>
            <div className="headerIntern"> 
                <div className="container-transverse container">
                    <div className="headerIntern-left">
                        <div className="cntlogo">
                                <Link to='/' title='Ancre to top'>
                                    MaDesign system
                                </Link>
                            </div>
                        <div className="btnBox">
                            <button className={navbarOpen ? "btn btn-icon btn-mobile open" : "btn btn-icon btn-mobile"} onClick={()=>setNavbarOpen(!navbarOpen)} aria-label="open navBar">
                                <span></span>
                                <span></span>
                                <span></span>    
                            </button>
                        </div>  
                    </div>
                    <div className="headerIntern-center">
                        <div className={`headerInternContent${navbarOpen ? ' show-menu' : ''}`}>
                            
                            <div className="boxNavIntern"> 
                                <nav className="menuNav"> 
                                    <div className="cntNavBox"> 
                                        <ul className="cntNav">
                                            {linkMenu.map((link) => {
                                                return (
                                                    <li key={link.name}>
                                                        <Link
                                                            className={location.pathname === link.href ? 'cntNav-link active' : 'cntNav-link'}
                                                            to={link.href} 
                                                            onClick={() => closeMenu()} title='Link menu'>
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul> 
                                    </div> 
                                </nav>  
                            </div>
                        </div> 
                    </div>
                </div>
            </div>   
        </header>
    )
  }
  