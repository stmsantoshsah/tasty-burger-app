import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../styles/header.scss'
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png"
import { Bag } from "react-bootstrap-icons"
function Header() {
    const [nav, setNav] = useState(false)

    const changeOnScroll = () => {
        let scrollVal = document?.documentElement.scrollTop;
        scrollVal > 100 ? setNav(true) : setNav(false);
    }
    window.addEventListener("scroll", changeOnScroll);
    return (
        <header>
            <Navbar expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='logo'><img src={Logo} alt="Logo" className='img-fluid' /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/" >
                                <div className='cart'>
                                    <Bag size={30} />
                                    <em className='roundpoint'>2</em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
