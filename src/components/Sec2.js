import React from 'react';
import bg from '../images/nice8.jpg';
import { NavLink } from 'react-router-dom'

class Sec extends React.Component {
	constructor(){
		super();
		this.state = {
			one: 'Everything you need to learn, produce and make money fron home is under one roof',
			two: 'Available',		};
	}
	
	render() {
		const items = [
			{ name: 'Skill Aquisition Programs', href: '/Skills' },
			{ name: 'Schools Of All Kinds', href: '/School' },
			{ name: 'Get Employed Today', href: '/jobs' },
			{ name: 'Monthly Competitions.............e.t.c.', href: '/Competition' },
		].map((item, i) => {
			return (
				<li key={i} >
					<NavLink to={item.href}>{item.name}</NavLink>
				</li>
			);
		});
			const { vt } = this.props; 
		return (
			<div>
				<div className="secimg">
					<img className="sec2" src={bg} alt="" />
					<h1 className="real">{this.state.one}</h1>
					{/* <h2 className="real2">{this.state.two}</h2> */}
					<p className="real3">
						{vt}
						<h2 className="real2">{this.state.two}</h2>
					</p>
					<ul className="real4">
						{items}
						
					</ul>
					<button className="btn btn-info my-btn">
						Get Started <span>&#187;</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Sec;
