import React from 'react';
import { Navbar, Form, Nav, FormControl, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/easylearning.jpg';
// import url('https://fonts.googleapis.com/css?family=Inconsolata:700')
// import search from '../images/searcher.png'
class Navigationbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			show1: false,
		};
	}
	render() {
		const {show, show1} = this.state

		const handleClose = () => this.setState({ show: false });
		const handleShow = () => this.setState({ show: true });

		const handleClose1 = () => this.setState({ show1: false });
		const handleShow1 = () => this.setState({ show1: true });

		const { title } = this.props;
		const items = [
			{ name: 'Home', href: '/Home' },
			{ name: 'School', href: '/School' },
			{ name: 'Skill', href: '/Skills' },
			{ name: 'Jobs', href: '/jobs' },
			{ name: 'Blog', href: '/Blog' },
			{ name: 'Contact', href: '/Contact' },
		];
		return (
			<div>
				<Navbar bg="dark" expand="lg" className="navbar nav">
					<Navbar.Brand href="#home">
						<Link to={items[0].href} className="lltitle">
							<div style={{ display: 'inline-flex' }}>
								{' '}
								<h1 className="namelogo">{title}</h1>
							</div>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="navtoggler" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link>
								<Link to={items[0].href}>{items[0].name}</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to={items[1].href}>{items[1].name}</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to={items[2].href}>{items[2].name}</Link>
							</Nav.Link>
							<Nav.Link>
								<Link className="get-employed-link" to={items[3].href}>
									{items[3].name}
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to={items[4].href}>{items[4].name}</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to={items[5].href}>{items[5].name}</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Form inline>
						<input type="search" placeholder="Search" className="mr-sm-2 searchbar" />	
						<Button variant="outline-info" className="logs" onClick={handleShow}>
							Sign Up
						</Button>
						<Button variant="outline-info" className="logs" onClick={handleShow1}>
							Sign In
						</Button>	
						{/*                         
						<button
							className="btn btn-info logs"
							variant="outline-info"
							//  onClick={handleShow}
						>
							Sign up
						</button> */}

						{/* <button
							className="btn btn-info logs "
							variant="outline-info"
							//  onClick={handleShow1}
						>
							Sign in
						</button> */}
					</Form>
				</Navbar>
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
	}
}
export default Navigationbar;
