import React, { useState } from 'react';
import { Navbar, Form, Nav, FormControl, Button ,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import search from '../images/searcher.png'
class Navigationbar extends React.Component {
	render() {
        // const [show, setShow] = useState(false);
		// const handleClose = () => setShow(false);
		// const handleShow = () => setShow(true);

		// const [show1, setShow1] = useState(false);
		// const handleClose1 = () => setShow1(false);
        // const handleShow1 = () => setShow1(true);
        
		const { title } = this.props;
		const items = [
			{ name: 'Home', href: '/Home' },
			{ name: 'School', href: '/School' },
			{ name: 'Skill', href: '/Skills' },
			{ name: 'Get Employed', href: '/jobs' },
			{ name: 'Blog', href: '/Blog' },
			{ name: 'Contact', href: '/Contact' },
		];
		// .map((item, i) => {
		// 	return (
		// 		<li key={i} className="items">
		// 			<NavLink className="link" to={item.href}>
		// 				{item.name}
		// 			</NavLink>
		// 		</li>
		// 	);
		// });
		return (
			<div>
				<Navbar bg="dark" expand="lg">
					<Navbar.Brand href="#home">
						<Link to={items[0].href}>
							<h1>{title}</h1>
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
								<Link to={items[3].href}>{items[3].name}</Link>
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
						<FormControl type="search" placeholder="Search" className="mr-sm-2 searchbar" />
						
						<button>search</button>
						
						{/*                         
						<button
							className="btn btn-info logs"
							variant="outline-info"
							//  onClick={handleShow}
						>
							Sign up
						</button> */}
						<Button variant="outline-info" className="logs">
							Sign Up
						</Button>
						{/* <button
							className="btn btn-info logs "
							variant="outline-info"
							//  onClick={handleShow1}
						>
							Sign in
						</button> */}
						<Button variant="outline-info" className="logs">
							Sign In
						</Button>
					</Form>
				</Navbar>
				{/* <Modal show={show} onHide={handleClose}>
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
				</Modal> */}
			</div>
		);
	}
}
export default Navigationbar;
