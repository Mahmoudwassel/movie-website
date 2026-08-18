import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';

import "./nav.css"
function NavScrollExample() {
    const favoritsList = useSelector((state) => state.favorits);

    return (
    <Navbar expand="lg"  bg="primary"  variant="dark" className=" px-5" fixed="top" >
        <Container fluid>
            <Navbar.Brand  as={NavLink} to="/"  >Wassel Actions </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"  />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2  my-lg-0" style={{ maxHeight: '200px'}} navbarScroll>
                <NavLink className={({isActive})=>isActive ? "nav-link active-link fw-bold text-white" : "nav-link fw-bolder text-info" }  to="/" >Home</NavLink>
                <NavDropdown title="Genres" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#adventure">Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
                    <NavDropdown.Item href="#drama">Drama</NavDropdown.Item>
                </NavDropdown>
                <NavLink className={({isActive})=>isActive ? "nav-link active-link fw-bold text-white fav" : "nav-link fw-bolder text-info fav" }  to="/Favorites" >Favorites<span className='fav-num'>{favoritsList.length}</span></NavLink>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavScrollExample;