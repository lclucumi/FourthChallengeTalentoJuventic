import React from "react";
import { Card, Button, Col } from "react-bootstrap";

class SelectInfo extends React.Component {
  render() {
    return (
      <>
        <Col md={4}>
          <Card>
            <Card.Header>
              <strong>Platos</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>Seleccionados</Card.Title>
              <Card.Text>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{this.props.info.nombre}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </>
    );
  }
}

export default SelectInfo;
