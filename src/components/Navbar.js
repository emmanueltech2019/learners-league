import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Navbar = props => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show1, setShow1] = useState(false);
	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	const { title } = props;
	const items = [
		{ name: 'Home', href: '/Home' },
		{ name: 'School', href: '/School' },
		{ name: 'Skill', href: '/Skills' },
		{ name: 'get employed', href: '/jobs' },
		{ name: 'Blog', href: '/Blog' },
		{ name: 'Contact', href: '/Contact' },
	].map((item, i) => {
		return (
			<li key={i} className="items">
				<NavLink className="link" to={item.href}>
					{item.name}
				</NavLink>
			</li>
		);
	});
	return (
		<div>
			<nav className="nav">
			
					<div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
						<h1>{title}</h1>
					</div>
					<div className="col-md-9 col-sm-9 col-xs-9 col-lg-9" style={{ paddingRight: '0px' }}>
						<ul>
							{items}
							<button className="btn btn-info" variant="primary" onClick={handleShow}>
								Sign up
							</button>
							<button className="btn btn-info" variant="primary" onClick={handleShow1}>
								Sign in
							</button>
						</ul>
					</div>
				
			</nav>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1 className="form">Sign up</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="name" placeholder="first name" className="input" required />
					<input type="name" placeholder="user name" className="input" required />
					<input type="email" placeholder="email" className="input" required />
					<input type="password" placeholder="password" className="input" required />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={show1} onHide={handleClose1}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1 className="form">Sign in</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input placeholder="email" className="input" required />
					<input placeholder="password" className="input" required />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary">Submit</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Navbar;
