import React from 'react';
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Navigationbar extends React.Component {
	render() {
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
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
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
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
export default Navigationbar;
