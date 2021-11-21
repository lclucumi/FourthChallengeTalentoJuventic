import React from "react";
// reactstrap components
import { Card, Row, Col, FormGroup, Form, Button } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="content" id="loginCard">
          <Row className="justify-content-center">
            <Col md="4">
              <Card>
                <Card.Header id="headerLogin">Login</Card.Header>
                <Card.Body>
                  <Form>
                    <Col sm="12">
                      <Row>
                        <Col className="px-2" md="12">
                          <FormGroup>
                            <Form.Label column>Usuario</Form.Label>
                            <Col sm="12">
                              <Form.Control type="text" placeholder="usuario" />
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="px-2" md="12" id="passLogin">
                          <Form.Label column>Contraseña</Form.Label>
                          <Col sm="12">
                            <Form.Control
                              type="password"
                              placeholder="contraseña"
                            />
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <Col id="sigIn">
                          <Button variant="success" size="md" href="/">
                            Iniciar Sesión
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Login;
