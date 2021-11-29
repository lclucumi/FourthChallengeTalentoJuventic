import React from "react";
import { Card, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";
import NotificationAlert from "react-notification-alert";
import { showAlert, notificationAlert } from "../alertComponent/notificacions";
class ManagerSiteComentario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComment: [],
      dataCard: [],
      nombre: "",
      correo: "",
      mensaje: "",
      tipo: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Comentario")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataComment = [];
        data.forEach((comment) => {
          let object = {};
          object["id"] = comment.id;
          object["nombre"] = comment.name;
          object["correo"] = comment.email;
          object["mensaje"] = comment.message;
          object["tipo"] = comment.type;
          columnsDataComment.push(object);
        });
        this.setState({ dataComment: columnsDataComment });
      })
      .catch((error) => console.log(error));
  }

  dataElimination(id) {
    fetch("http://localhost:5016/api/Comentario/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        showAlert("eliminado", "¡Comentario eliminado!");
      })
      .catch((error) => console.log(error));
  }

  test = (data) => {
    this.setState({
      dataCard: data,
      nombre: data.nombre,
      correo: data.correo,
      mensaje: data.mensaje,
      tipo: data.tipo,
    });
  };

  render() {
    return (
      <>
        <Row className="justify-content-md-center">
          <NotificationAlert ref={notificationAlert} />
          <Col md={1}></Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Comentarios</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Información</Card.Title>
                <Card.Text>
                  <BasicFiltering
                    test={this.test}
                    columns={[
                      { title: "CORREO", field: "correo" },
                      { title: "MENSAJE", field: "mensaje" },
                    ]}
                    data={this.state.dataComment}
                    filter={true}
                    color="#32C1CD"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Comentario seleccionado</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Datos</Card.Title>
                <br />
                <Row className="mx-0">
                  <Col md={12}>
                    <Tabs
                      defaultActiveKey="eliminar"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="eliminar" title="Eliminar" id="delete">
                        <br />
                        <Card.Text>
                          <Card>
                            <Card.Body>
                              <Card.Title></Card.Title>
                              <Card.Text>
                                <Form.Label>
                                  <strong>Tipo</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="tipo"
                                  placeholder=""
                                  value={this.state.dataCard.tipo}
                                />
                                <Form.Label>
                                  <strong>Nombre</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="nombre"
                                  placeholder=""
                                  value={this.state.dataCard.nombre}
                                />
                                <Form.Label>
                                  <strong>Correo electrónico</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="correo"
                                  placeholder=""
                                  value={this.state.dataCard.correo}
                                />
                                <Form.Label>
                                  <strong>Mensaje</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="mensaje"
                                  placeholder=""
                                  value={this.state.dataCard.mensaje}
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-danger"
                                    className="mx-2"
                                    onClick={() =>
                                      this.dataElimination(
                                        this.state.dataCard.id
                                      )
                                    }
                                  >
                                    {"   "}
                                    Eliminar Comentario{"   "}
                                  </Button>
                                </Col>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Card.Text>
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default ManagerSiteComentario;
