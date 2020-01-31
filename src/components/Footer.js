import React from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';
import msg from '../images/message-icon-png-clip-art.png';

function Footer(props) {
	const { title } = props;
		const year = new Date().getFullYear();
        const fitems = [
			{ name: 'TopStudents', href: '/TopStudents' },
			{ name: 'TopTutors', href: '/TopTutors' },
			{ name: 'TrendingCourses', href: '/TrendingCourses' },
			{ name: 'Competition & Winners List,', href: '/Competition' },
			{ name: 'Competition & Winners List,', href: '/Competition' },
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
				<footer className="footer">
					<div className="sub">
						<img src={msg} alt="msg icon" width='50px' height="50px"/>
						<h2>subscribe to our newsletter</h2>
						<input type="email" className="subemail" placeholder="enter your email"/>

					</div>
					<div>
						<label className="copyright">
							<Link>{title}</Link> ©  {year}  All Right Reserved | privacy policy
						</label>
						<ul className="footerlist">{fitems}</ul>
					</div>
				</footer>
			</div>
		);
	}

export default Footer;
