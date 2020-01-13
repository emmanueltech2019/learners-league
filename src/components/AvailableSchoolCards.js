import React from 'react'
import '../App.css'
import  { Card, Button} from 'react-bootstrap'
import image1 from '../images/coding.jpg'
import forex from '../images/forex.jpg';
import business from '../images/digital-marketing.jpg';
import real from '../images/realestate.jpg';
import { Link } from 'react-router-dom';

class AvailbleSchoolCards extends React.Component{
    render(){

        return (
			<div>
				<div className="cards">
					<Card style={{ width: '17rem' }} className="cardspace">
						<Card.Img
							style={{ height: '200px', borderRadius: '5px' }}
							variant="top"
							src={image1}
							alt="programming"
						/>
						<Card.Body>
							<Card.Title style={{ height: '30px' }}>school of programming</Card.Title>
							<hr />
							<Card.Text>become a complete web developer</Card.Text>
							<hr />
							<Link to='/school/Programming'>
								<Button variant="primary">start your course</Button>
							</Link>
						</Card.Body>
					</Card>

					<Card style={{ width: '17rem' }} className="cardspace">
						<Card.Img
							variant="top"
							style={{ height: '200px', borderRadius: '5px' }}
							src={forex}
							alt="forex"
						/>
						<Card.Body>
							<Card.Title style={{ height: '30px' }}>school of forex</Card.Title>
							<hr />
							<Card.Text>start learning forex today and make money from home</Card.Text>
							<hr />
							<Button variant="primary">start your course</Button>
						</Card.Body>
					</Card>

					<Card style={{ width: '17rem' }} className="cardspace">
						<Card.Img
							variant="top"
							style={{ height: '200px', borderRadius: '5px' }}
							src={business}
							alt="programming"
						/>
						<Card.Body>
							<Card.Title>school of digital marketing</Card.Title>
							<hr />
							<Card.Text>learn how you can grow your business and make more profit.</Card.Text>
							<hr />
							<Button variant="primary">Start your course</Button>
						</Card.Body>
					</Card>

					<Card style={{ width: '17rem' }} className="cardspace">
						<Card.Img
							variant="top"
							style={{ height: '200px', borderRadius: '5px' }}
							src={real}
							alt="programming"
						/>
						<Card.Body>
							<Card.Title>Real estate</Card.Title>
							<hr />
							<Card.Text>become a sucessful Real estate agent with this course</Card.Text>
							<hr />
							<Button variant="primary">start your course</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
    }
}
export default AvailbleSchoolCards;

