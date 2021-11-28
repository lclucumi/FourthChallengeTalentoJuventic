import { useState } from "react";
import { Card, Row, Col, FormGroup, Form, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function dataCreate(username, password) {
  fetch("http://localhost:5016/api/Cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => {
      response.json();
      console.log(response);
    })
    .catch((error) => console.log(error));
}

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("¡Se ha registrado exitosamente!", auth);
      dataCreate(registerEmail, registerPassword);
      window.location.href = "/login";
    } catch (error) {
      alert("¡Error! Verifica tus datos");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="content" id="registerCard">
      <Row className="justify-content-center">
        <Col md="4">
          <Card>
            <Card.Header id="headerLogin">Registro</Card.Header>
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
                              setRegisterEmail(event.target.value);
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
                            setRegisterPassword(event.target.value);
                          }}
                        />
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col id="sigIn">
                      <h6>
                        Ir a página de <a href="/">inicio</a>
                      </h6>
                      <Button
                        variant="outline-success"
                        size="md"
                        onClick={register}
                      >
                        Registrar
                      </Button>
                      {"  "}
                      <Button variant="outline-warning" size="md" href="/login">
                        Iniciar sesión
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
  );
}

export default SignIn;
