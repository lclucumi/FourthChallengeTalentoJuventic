import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Form, Button, Col, Row, FloatingLabel, Card } from "react-bootstrap";

class ManagerText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComment: [],
      type: "Solicitud",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Comentario")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataComment: data });
      })
      .catch((error) => console.log(error));
  }

  dataCreate(name, email, message, valor) {
    console.log(valor);
    fetch("http://localhost:5016/api/Comentario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        type: valor,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        alert("¡Comentario creado! :D");
      })
      .catch((error) => console.log(error));
  }

  dataType(value) {
    this.setState({ type: value });
  }

  render() {
    return (
      <>
        <Header />
        <section id="manager">
          <div className="manager-title">
            <h2>
              Déjanos tu <span>comentario</span>
            </h2>
          </div>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Form>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Nombre"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    id="nombre"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo electrónico"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Seleccione una opción</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.type}
                    onChange={(e) => {
                      console.log("e.target.value", e.target.value);
                      this.dataType(e.target.value);
                    }}
                  >
                    <option id="solicitud" value="Solicitud">
                      Solicitud
                    </option>
                    <option id="comment" value="Comentario">
                      Comentario
                    </option>
                    <option id="question" value="Pregunta">
                      Pregunta
                    </option>
                  </Form.Control>
                </Form.Group>
                <br />
                <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    id="message"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <br />
                <Button
                  variant="outline-warning"
                  type="submit"
                  onClick={() =>
                    this.dataCreate(
                      document.getElementById("nombre").value,
                      document.getElementById("email").value,
                      document.getElementById("message").value,
                      this.state.type
                    )
                  }
                >
                  Publicar comentario
                </Button>
              </Form>
            </Col>
            <Col md={2}></Col>
          </Row>
          <div className="manager-title">
            <h2>Comentarios</h2>
          </div>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    {this.state.dataComment.map((comment, i) => {
                      if (comment.type == "Comentario") {
                        return (
                          <>
                            <div id="comment_data">
                              <img
                                id="comment_element"
                                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/avatar.png?alt=media&token=2e98dc0f-4f6b-4e54-bdb4-246a647824a5"
                                className="img-fluid"
                              />
                              <h6 id="comment_message"> {comment.message}</h6>
                            </div>
                            <footer className="blockquote-footer comment_footer">
                              <cite title="Source Title">{comment.name}</cite>
                            </footer>
                            <hr />
                          </>
                        );
                      }
                    })}
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}></Col>
          </Row>
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default ManagerText;
