import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Redux-Saga Boilerplate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
