import React from "react";
import { Card, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";
import NotificationAlert from "react-notification-alert";
import { showAlert, notificationAlert } from "../alertComponent/notificacions";
class ManagerSiteEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmpleado: [],
      dataCard: [],
      nombre_emp: "",
      descripcion_emp: "",
      imagen_emp: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Empleado")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataEmpleado = [];
        data.forEach((empleado) => {
          let object = {};
          object["id"] = empleado.id;
          object["nombre"] = empleado.name;
          object["descripcion"] = empleado.description;
          object["imagen"] = <img src={empleado.image} width="100px"></img>;
          object["img"] = empleado.image;
          columnsDataEmpleado.push(object);
        });
        this.setState({ dataEmpleado: columnsDataEmpleado });
      })
      .catch((error) => console.log(error));
  }

  dataElimination(id) {
    fetch("http://localhost:5016/api/Empleado/" + id, {
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
      .then(() => {
        showAlert("eliminado", "¡Trabajador eliminado!");
      })
      .catch((error) => console.log(error));
  }

  dataCreate(name, description, image) {
    fetch("http://localhost:5016/api/Empleado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        restaurante_id: 1,
        name: name,
        description: description,
        image: image,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(() => {
        showAlert("creado", "¡Trabajador creado! :D");
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    fetch("http://localhost:5016/api/Empleado", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: this.state.dataCard.id,
        restaurante_id: 1,
        name: this.state.nombre_emp,
        description: this.state.descripcion_emp,
        image: this.state.imagen_emp,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        showAlert("editado", "¡Trabajador eliminado! :D");
      })
      .catch((error) => console.log(error));
  };

  test = (data) => {
    this.setState({
      dataCard: data,
      nombre_emp: data.nombre,
      descripcion_emp: data.descripcion,
      imagen_emp: data.img,
    });
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
          <Col md={1}></Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Empleados</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Información</Card.Title>
                <Card.Text>
                  <BasicFiltering
                    test={this.test}
                    columns={[
                      { title: "NOMBRE", field: "nombre" },
                      { title: "DESCRIPCIÓN", field: "descripcion" },
                      { title: "IMAGEN", field: "imagen" },
                    ]}
                    data={this.state.dataEmpleado}
                    filter={true}
                    color="#F7A440"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Empleado seleccionado</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Datos</Card.Title>
                <br />
                <Row className="mx-0">
                  <Col md={12}>
                    <Tabs
                      defaultActiveKey="crear"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="crear" title="Crear">
                        <br />
                        <Card.Text>
                          <Card>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                              <Card.Title></Card.Title>
                              <Card.Text>
                                <Form.Label>
                                  <strong>Nombre</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="nombreEmp"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcionEmp"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagenEmp"
                                  placeholder=""
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-success"
                                    onClick={() =>
                                      this.dataCreate(
                                        document.getElementById("nombreEmp")
                                          .value,
                                        document.getElementById(
                                          "descripcionEmp"
                                        ).value,
                                        document.getElementById("imagenEmp")
                                          .value
                                      )
                                    }
                                  >
                                    {"   "}
                                    Crear Empleado{"   "}
                                  </Button>
                                </Col>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Card.Text>
                      </Tab>
                      <Tab eventKey="editar" title="Editar">
                        <br />
                        <Card.Text>
                          <Card>
                            <Card.Img
                              variant="top"
                              src={this.state.dataCard.img}
                            />
                            <Card.Body>
                              <Card.Title></Card.Title>
                              <Card.Text>
                                <Form.Label>
                                  <strong>Nombre</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="nombreEmp"
                                  placeholder=""
                                  name="nombre_emp"
                                  onChange={this._handleChange}
                                  value={this.state.nombre_emp}
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcionEmp"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  name="descripcion_emp"
                                  onChange={this._handleChange}
                                  value={this.state.descripcion_emp}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagenEmp"
                                  placeholder=""
                                  name="imagen_emp"
                                  onChange={this._handleChange}
                                  value={this.state.imagen_emp}
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-primary"
                                    onClick={this.dataEdit}
                                  >
                                    {"   "}
                                    Editar Empleado{"   "}
                                  </Button>
                                </Col>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Card.Text>
                      </Tab>
                      <Tab eventKey="eliminar" title="Eliminar" id="delete">
                        <br />
                        <Card.Text>
                          <Card>
                            <Card.Img
                              variant="top"
                              src={this.state.dataCard.img}
                            />
                            <Card.Body>
                              <Card.Title></Card.Title>
                              <Card.Text>
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
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcion"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  value={this.state.dataCard.descripcion}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagen"
                                  placeholder=""
                                  value={this.state.dataCard.img}
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
                                    Eliminar Empleado{"   "}
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

export default ManagerSiteEmpleado;
