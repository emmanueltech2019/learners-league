import React from 'react';
import bg from '../images/nice8.jpg'

class Sec extends React.Component {
	constructor(){
		super();
		this.state = {
			one: 'Everything you need to learn, produce and make money fron home is under one roof',
			two: 'Available',
			three: 'Easily upload videos, build quizzes, and organize all your learning content with our drag and drop builder. Set pricing, schedule lessons, and automate your content to curate a learning experience your students will love.'
		};
	}
	render() {
			const { vt } = this.props; 
		return (
			<div>
				<div style={{ backgroundColor: 'rgba(0,0,0,0.100)', opacity: '5', position: 'relative' }}>
					<img className="sec2" src={bg} alt="" />
					<h1 className="real">{this.state.one}</h1>
					<h2 className="real2">{this.state.two}</h2>
					<p className="real3">{vt}</p>
					<ul className="real4">
						<li>Skill</li>
						<li>Schools</li>
						<li>Jobs</li>
						<li>Monthly competitions</li>
					</ul>
					<button className="btn btn-info my-btn">
						get started <span>&#187;</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Sec;
