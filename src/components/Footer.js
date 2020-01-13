import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Footer() {
		const year = new Date().getFullYear();
        const fitems = [
			{ name: 'TopStudents', href: '/TopStudents' },
			{ name: 'TopTutors', href: '/TopTutors' },
			{ name: 'TrendingCourses', href: '/TrendingCourses' },
			{ name: 'Competition,', href: '/Competition' },
		].map((item, i) => {
			return (
				<li key={i}>
					<NavLink className="fitems" to={item.href}>
						{item.name}
					</NavLink>
				</li>
			);
		});
		return (
			<div>
				<nav className="footer">
					<div>
					
							
					<ul style={{ listStyle: 'none', display: 'inline-flex' }}>{fitems}</ul>
					<label style={{ textAlign: 'right', fontSize: '25px', color:'blue'}}>
					Copyright @ all right reserved {year}
					</label>
								
					</div>
				</nav>
			</div>
		);
	}

export default Footer;
