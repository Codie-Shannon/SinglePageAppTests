import { Card, CardGroup, Container, ListGroup } from 'solid-bootstrap';

export const Trucks = () => {
  return (
    <Container>
      <CardGroup class='my-5 py-4'>
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/id/203/500/550" />

          <Card.Body>
            <Card.Title>Event Name</Card.Title>
          </Card.Body>

          <ListGroup class="list-group-flush">
            <ListGroup.Item>Hosts</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            <ListGroup.Item>Date</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Card.Link>Buy Tickets</Card.Link>
            <Card.Link>Hosts</Card.Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="https://picsum.photos/id/202/500/550" />

          <Card.Body>
            <Card.Title>Event Name</Card.Title>
          </Card.Body>

          <ListGroup class="list-group-flush">
            <ListGroup.Item>Hosts</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            <ListGroup.Item>Date</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Card.Link>Buy Tickets</Card.Link>
            <Card.Link>Hosts</Card.Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="https://picsum.photos/id/195/500/550" />

          <Card.Body>
            <Card.Title>Event Name</Card.Title>
          </Card.Body>

          <ListGroup class="list-group-flush">
            <ListGroup.Item>Hosts</ListGroup.Item>
            <ListGroup.Item>Location</ListGroup.Item>
            <ListGroup.Item>Date</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Card.Link>Buy Tickets</Card.Link>
            <Card.Link>Hosts</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
}