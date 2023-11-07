import { Container, Nav, Navbar } from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavComp = () => {  
	const [curPath, setPath] = useState('')
	
	useEffect(()=>{
		console.log(window.location.pathname);
		setPath(window.location.pathname);
	},[])

	const handleClick = (path) => {
		setPath(path)
	}

	return (
		<Navbar expand="lg" className="bg-darkbg" collapseOnSelect>
			<Container className="justify-content-center">
				<Navbar.Brand><Link to={'/'}><Logo /></Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="text-secondary bg-primary mb-3"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto fs-2">
                        <div className="border border-2 rounded border-secondary"></div>
                        <Nav.Link as={Link} eventKey={1} onClick={()=>handleClick('/')} to={'/'} className={`p-2 text-decoration-none ${curPath === "/" ? "text-primary" : "text-grey"}`}>Home</Nav.Link>
                        <div className="border border-2 rounded border-secondary"></div>
                        <Nav.Link as={Link} eventKey={1}onClick={()=>handleClick('/art')} to={'/art'} className={`p-2 text-decoration-none ${curPath === "/art" ? "text-primary" : "text-grey"}`}>Art</Nav.Link>
                        <div className="border border-2 rounded border-secondary"></div>
                        <Nav.Link as={Link} eventKey={1}onClick={()=>handleClick('/portfolio')} to={'/portfolio'} className={`p-2 text-decoration-none ${curPath === "/portfolio" ? "text-primary" : "text-grey"}`}>Portfolio</Nav.Link>
                        <div className="border border-2 rounded border-secondary"></div>
                        <Nav.Link as={Link} eventKey={1}onClick={()=>handleClick('/about')} to={'/about'} className={`p-2 text-decoration-none ${curPath === "/about" ? "text-primary" : "text-grey"}`}>About</Nav.Link>
                        <div className="border border-2 rounded border-secondary"></div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavComp;
