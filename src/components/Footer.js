import React from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';

function Footer(props) {
	const { title } = props;
		const year = new Date().getFullYear();
        const fitems = [
			{ name: 'TopStudents', href: '/TopStudents' },
			{ name: 'TopTutors', href: '/TopTutors' },
			{ name: 'TrendingCourses', href: '/TrendingCourses' },
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
					<div>
						<label className="copyright">
							© Copyright {year} <Link>{title}</Link> All Right Reserved
						</label>
						<ul className="footerlist">
							{fitems}
						</ul>
					</div>
				</footer>
			</div>
		);
	}

export default Footer;
