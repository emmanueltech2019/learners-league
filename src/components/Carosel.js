import React from 'react';
import first from '../images/slide1.jpg';
import second from '../images/slide2.jpg';
import third from '../images/slide3.jpg';
import fourth from '../images/learn1.jpg';
import five from '../images/learn2.jpg';
import advert1 from '../images/wristwatch.jpg';
import advert2 from '../images/nice1.jpg';
import { Jumbotron } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';

class Carosel extends React.Component {
	render() {
		return (
			<div className="carosel">
				<Carousel>
					<Carousel.Item>
						<img className="slideimg" src={first} alt="First slide" />
						<Carousel.Caption>
							<p className="carolcaption">
								"Learn different skills from trusted tutors and experts in your field."
							</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="slideimg" src={second} alt="Third slide" />

						<Carousel.Caption>
							<p className="carolcaption">"Bringing students and teachers together for easy learning."</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="slideimg" src={third} alt="Third slide" />

						<Carousel.Caption>
							<p className="carolcaption">"Providing quick solutions to help imporve productivity."</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="slideimg" src={fourth} alt="Third slide" />

						<Carousel.Caption>
							<p className="carolcaption">
								“People expect to be bored by eLearning—let’s show them it doesn’t have to be like
								that.”
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="slideimg" src={five} alt="Third slide" />

						<Carousel.Caption>
							<p className="carolcaption">
								"Stressed free learning with diffrent kinds of materials for learning."
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				<Jumbotron className="left-advert">
					<img src={advert1} alt="" />
					<hr></hr>
					<button className="btn btn-info" variant="primary">
						buy now
					</button>
					<label>
						we are currently doing our black friday to be able to participate all you need to do is buy any
						of our product
					</label>
					<h2>compliment of the session</h2>
				</Jumbotron>
				<Jumbotron className="right-advert">
					<img src={advert2} style={{ width: '180px' }} alt="" />
					<hr></hr>
					<button className="btn btn-info" variant="primary">
						buy now
					</button>
					<label>
						we are currently doing our black friday to be able to participate all you need to do is buy any
						of our product
					</label>
					<h2>compliment of the session</h2>
				</Jumbotron>
			</div>
		);
	}
}
export default Carosel;
