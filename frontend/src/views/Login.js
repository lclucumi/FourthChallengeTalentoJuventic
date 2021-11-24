import { useState } from "react";
import { Card, Row, Col, FormGroup, Form, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert("¡Bienvenido!");
      window.location.href = "/";
    } catch (error) {
      alert("¡Error! Verifica tus datos");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
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
                          <Form.Label column>Correo electrónico</Form.Label>
                          <Col sm="12">
                            <Form.Control
                              type="text"
                              placeholder="Correo electrónico"
                              onChange={(event) => {
                                setLoginEmail(event.target.value);
                              }}
                            />
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
                            placeholder="Contraseña"
                            onChange={(event) => {
                              setLoginPassword(event.target.value);
                            }}
                          />
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col id="sigIn">
                        <Button variant="success" size="md" onClick={login}>
                          Iniciar Sesión
                        </Button>
                        {"  "}
                        <Button variant="danger" size="md" onClick={logout}>
                          Cerrar Sesión
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

export default SignIn;
