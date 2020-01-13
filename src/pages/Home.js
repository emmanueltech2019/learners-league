import React from 'react';
import Carosel from '../components/Carosel';
import HomeBody from '../components/HomeBody'

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Carosel />
				<HomeBody
					explainElText=" is an educational platform for enterpreneur and students.it was founded by MR Emmanuel Lucky along side
					 with some of his colleagues listed below."
					vt="the reason and motive towards building this platform is to reduce the rate of unemployment in the world and make
					 people live a flexible life work and make money from home also make the world a happy pla bring people with extremely
					  hig information that can not be found in and school inthe world this will help solve the under qualified education 
					  system flowing in so many country in the world to reduce the excuse of not havin money to go to school so we came up 
					  with the idea of scolarship examination every three month we will be empolying 10 students in any field under 
					  scolarship also to help people we have taught and already existin business grow they business with our markething 
					  equipment and minds set training classes which is free to only our students."
					pat="Our patners"
				/>
			</div>
		);
	}
}
