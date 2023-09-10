import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-scroll'; // Import Link from 'react-scroll' for smooth scrolling
import Logo from '../img/Logo w. Transparency.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar color='' className='bg-light' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img
                    src={Logo}
                    alt=''
                    className='float-start'
                    width={'5%'}
                    height={'10%'}
                />
                <h1 className='mt-1'>Hello, I'm Raphael...</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <Link
                            className='nav-link'
                            to='home-section'
                            smooth={true}
                            duration={500}
                            offset={-50}
                        >
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            className='nav-link'
                            to='about-me-section'
                            smooth={true}
                            duration={500}
                            offset={-50}
                        >
                            About Me
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            className='nav-link'
                            to='projects-section'
                            smooth={true}
                            duration={500}
                            offset={-50}
                        >
                            Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            className='nav-link'
                            to='connect-section'
                            smooth={true}
                            duration={500}
                            offset={-50}
                        >
                            Let's Connect
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
