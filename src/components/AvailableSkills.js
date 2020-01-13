import React from 'react'
import '../App.css'
import { Card, Button } from 'react-bootstrap'
import image1 from '../images/coding.jpg'

class AvailableSkills extends React.Component {
    render() {

        return (
            <div>
                <div className="cards">

                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                become a complete web developer
    </Card.Text>
                            <Button variant="primary">start your course</Button>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of marketing</Card.Title>
                            <Card.Text>
                                start growing businesses today
    </Card.Text>
                            <Button variant="primary">start your course</Button>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="cards">

                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }} className="cardspace" >
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="cardspace">
                        <Card.Img variant="top" src={image1} alt="programming" />
                        <Card.Body>
                            <Card.Title>school of programming</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        )
    }
}
export default AvailableSkills;
