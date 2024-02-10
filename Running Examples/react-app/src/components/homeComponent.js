import React from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

export const Home = () => {
    return (
        <Container>
            <Row className='px-4 mt-5 mb-5'>
                <Col sm={7}><Image src="https://picsum.photos/900/400" fluid rounded/></Col>
                <Col sm={5}>
                    <h1 className='font-weight-light'>Monster Truck International</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna at orci aliquam tristique nec vitae mauris. Etiam id malesuada sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus pellentesque, nisl in tincidunt auctor, eros purus posuere nulla, porta luctus eros est sed velit.
                    </p>
                    <Button>Contact Us</Button>
                </Col>
            </Row>
            <Row>
                <Card className='bg-primary text-white mb-5 py-1'>
                    <Card.Body>
                        <Card.Title>
                        Monster Truck Events</Card.Title>
                        </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/202/400/400" />
                        
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>

                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>                
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/203/400/400" />
                        
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>

                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>                
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/201/400/400" />
                        
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>

                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}