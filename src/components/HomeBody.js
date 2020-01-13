import React from 'react';
import Sec from '../components/Sec2';
import mrope from '../images/mrope.jpg';
import dan from '../images/dan.jpeg';
import lisa from '../images/lisa.jpg'
import emmanuel from '../images/emmanuel.jpg'
import dan2 from '../images/dan2.jpeg';
import ife from '../images/ife.jpeg';
import spon1 from '../images/sponsor1.jpg';
import spon2 from  '../images/sponsor2.jpg';
import spon3 from '../images/sponsor3.jpg';
import spon4 from '../images/sponsor4.png';


import { Card,Button,Carousel } from "react-bootstrap"

class HomeBody extends React.Component{
	constructor() {
		super();
		this.state = {
			aboutUs:"About Learner's League ",
			siteName:"Learner's, League",
			ourvisions:"Our visions",
			ourForce:'Our driving force'
		}
		}
    render(){
		const { explainElText}=this.props; 	 	
        return (
			<div>
				<div>
					<h1 className="aboutel">
						<i>{this.state.aboutUs}</i>
					</h1>
				</div>
				<section style={{ margin: '0px 0px 0px 0px', padding: '0px 0px 0px 0px' }}>
					<Sec
						vt="The reason and motive towards building this platform is to reduce the rate of unemployment in the world and make
					 people live a flexible life work and make money from home, bringing people extremely
					  high information that can not be found in and school in the world this will help solve the under qualified education 
					  system flowing in so many country in the world to reduce the excuse of not having money tobe educated so we came up 
					  with the idea of scolarship examination every three month we will be empolying 10 students in any field under 
					  scolarship also to help people we have taught and already existing business grow they business with our markething 
					  equipment and business training classes which is free to only our students."
					/>
				</section>
				<section className="win">
					<div style={{ width: '95%', textAlign: 'center', margin: 'auto' }}>
						<p className="abtext">
							<label style={{ fontSize: '50px' }}>{this.state.siteName}</label>
							{explainElText}
						</p>
						<div className="cards">
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={emmanuel}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Lucky Emmanuel</Card.Title>
									<hr />
									<Card.Text>founding CEO</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={dan}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Jumbo daniel</Card.Title>
									<hr />
									<Card.Text>founding CPO</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={mrope}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Opeyemi Fehintola</Card.Title>
									<hr />
									<Card.Text>founding PR</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<br />
							<hr />
						</div>
						<hr />
						<br />
						<div className="cards">
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={lisa}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Lisa Uloh</Card.Title>
									<hr />
									<Card.Text>founding CTO</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={ife}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Ugochukwu Joshua Ifeanyi</Card.Title>
									<hr />
									<Card.Text>founding PR</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src={dan2}
									alt="programming"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>Daniel Innocent</Card.Title>
									<hr />
									<Card.Text>founding CMO</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
						</div>
						<h1 class="boardheaders">board of directors</h1>
						<div className="cards">
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<br />
							<hr />
						</div>
						<hr />
						<br />
						<div className="cards">
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }} className="cardspace">
								<Card.Img
									style={{ height: '200px', borderRadius: '5px' }}
									variant="top"
									src=""
									alt="board of direcors image"
								/>
								<Card.Body>
									<Card.Title style={{ height: '30px' }}>pending.....</Card.Title>
									<hr />
									<Card.Text>pending.....</Card.Text>
									<hr />
									<Button variant="primary">
										view profile <span>&#187;</span>
									</Button>
								</Card.Body>
							</Card>
						</div>
					</div>
				</section>
				<div className="carosel">
					<Carousel>
						<Carousel.Item>
							<img className="slideimg" src={spon1} alt="First slide" />
							<Carousel.Caption>
								<p className="carolcaption">proudly sponsors of Learners League</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="slideimg" src={spon2} alt="Third slide" />

							<Carousel.Caption>
								<p className="carolcaption">proudly sponsors of Learners League</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="slideimg" src={spon3} alt="Third slide" />

							<Carousel.Caption>
								<p className="carolcaption">proudly sponsors of Learners League</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="slideimg" src={spon4} alt="Third slide" />
							<Carousel.Caption>
								<p className="carolcaption">proudly sponsors of Learners League</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
    }
}
export default HomeBody;