import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <Navbar className="border-bottom p-3 mt-4" bg="white" expand="lg">
                <Navbar.Brand className="mx-5 logo" id="logo" style={{color:"red"}}>CampTech</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle" className="toggler">
                    <Nav className="mx-4">
                    <Link className="nav-link me-4" to="/">Our Courses</Link>
                    <Link className="nav-link me-4" to="/quiz">Quiz</Link>
                    <Link className="nav-link me-4" to="/help">Help</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header