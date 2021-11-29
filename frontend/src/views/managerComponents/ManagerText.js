import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import NotificationAlert from "react-notification-alert";
import { showAlert, notificationAlert } from "../alertComponent/notificacions";
class ManagerText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDescription: [],
      dataCard: [],
      descripcion_rest: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log("editar");
    fetch("http://localhost:5016/api/Restaurante")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataDescription = [];
        data.forEach((comment) => {
          let object = {};
          object["id"] = comment.id;
          object["nombre"] = comment.name;
          object["descripcion"] = comment.description;
          columnsDataDescription.push(object);
        });
        this.setState({
          dataDescription: columnsDataDescription,
          descripcion_rest: columnsDataDescription[0].descripcion,
        });
        console.log(this.state.dataDescription);
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    fetch("http://localhost:5016/api/Restaurante", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: 1,
        name: "Dunkers",
        description: this.state.descripcion_rest,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        showAlert("editado", "¡Información editada! :D");
      })
      .catch((error) => console.log(error));
  };

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Row className="justify-content-md-center">
          <NotificationAlert ref={notificationAlert} />
          <Col md={3}></Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <strong>Información</strong>
              </Card.Header>
              <Card.Body>
                <br />
                <Row className="mx-0">
                  <Col md={12}>
                    <Card.Text>
                      <Card>
                        <Card.Img
                          id="img_text"
                          variant="top"
                          src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/about.jpg?alt=media&token=42405577-9d2b-469d-80f4-f9e9520319e4"
                        />
                        <Card.Body>
                          <Card.Title></Card.Title>
                          <Card.Text>
                            <Form.Label>
                              <strong>Descripción</strong>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              id="descripcionRest"
                              placeholder=""
                              style={{ height: "100px" }}
                              name="descripcion_rest"
                              onChange={this._handleChange}
                              value={this.state.descripcion_rest}
                            />
                            <br />
                            <Col md={12}>
                              <Button
                                as={Col}
                                variant="outline-primary"
                                onClick={this.dataEdit}
                              >
                                {"   "}
                                Editar Texto{"   "}
                              </Button>
                            </Col>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </>
    );
  }
}

export default ManagerText;
