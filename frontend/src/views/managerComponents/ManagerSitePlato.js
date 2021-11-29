import React from "react";
import { Card, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";
import NotificationAlert from "react-notification-alert";
import { showAlert, notificationAlert } from "../alertComponent/notificacions";
class ManagerSitePlato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMenu: [],
      dataCard: [],
      nombre: "",
      descripcion: "",
      imagen: "",
      ingrediente: "",
      precio: 0,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Plato")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataMenu = [];
        data.forEach((menu) => {
          let object = {};
          object["id"] = menu.id;
          object["nombre"] = menu.name;
          object["ingrediente"] = menu.ingredient;
          object["precio"] = menu.price;
          object["descripcion"] = menu.description;
          object["imagen"] = <img src={menu.image} width="100px"></img>;
          object["img"] = menu.image;
          columnsDataMenu.push(object);
        });
        this.setState({ dataMenu: columnsDataMenu });
      })
      .catch((error) => console.log(error));
  }

  dataElimination(id) {
    fetch("http://localhost:5016/api/Plato/" + id, {
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
        showAlert("eliminado", "¡Plato eliminado!");
      })
      .catch((error) => console.log(error));
  }

  dataCreate(name, description, image, ingredient, price) {
    console.log(name);
    fetch("http://localhost:5016/api/Plato", {
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
        ingredient: ingredient,
        price: price,
        amount: 0,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        showAlert("creado", "¡Plato creado! :D");
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    fetch("http://localhost:5016/api/Plato", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: this.state.dataCard.id,
        restaurante_id: 1,
        name: this.state.nombre,
        description: this.state.descripcion,
        image: this.state.imagen,
        ingredient: this.state.ingrediente,
        price: this.state.precio,
        amount: 0,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        showAlert("editado", "¡Plato editado! :D");
      })
      .catch((error) => console.log(error));
  };

  test = (data) => {
    this.setState({
      dataCard: data,
      nombre: data.nombre,
      descripcion: data.descripcion,
      imagen: data.img,
      ingrediente: data.ingrediente,
      precio: data.precio,
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
                <strong>Platos</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Información</Card.Title>
                <Card.Text>
                  <BasicFiltering
                    test={this.test}
                    columns={[
                      { title: "NOMBRE", field: "nombre" },
                      { title: "PRECIO", field: "precio" },
                      { title: "IMAGEN", field: "imagen" },
                    ]}
                    data={this.state.dataMenu}
                    filter={true}
                    color="#039be5"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Plato seleccionado</strong>
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
                                  id="nombre"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcion"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagen"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Ingredientes</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="ingrediente"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                />
                                <Form.Label>
                                  <strong>Precio ($)</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precio"
                                  placeholder=""
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-success"
                                    onClick={() =>
                                      this.dataCreate(
                                        document.getElementById("nombre").value,
                                        document.getElementById("descripcion")
                                          .value,
                                        document.getElementById("imagen").value,
                                        document.getElementById("ingrediente")
                                          .value,
                                        document.getElementById("precio").value
                                      )
                                    }
                                  >
                                    {"   "}
                                    Crear Plato{"   "}
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
                                  id="nombre"
                                  placeholder=""
                                  name="nombre"
                                  onChange={this._handleChange}
                                  value={this.state.nombre}
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcion"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  name="descripcion"
                                  onChange={this._handleChange}
                                  value={this.state.descripcion}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagen"
                                  placeholder=""
                                  name="imagen"
                                  onChange={this._handleChange}
                                  value={this.state.imagen}
                                />
                                <Form.Label>
                                  <strong>Ingredientes</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="ingrediente"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  name="ingrediente"
                                  onChange={this._handleChange}
                                  value={this.state.ingrediente}
                                />
                                <Form.Label>
                                  <strong>Precio ($)</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precio"
                                  placeholder=""
                                  name="precio"
                                  onChange={this._handleChange}
                                  value={this.state.precio}
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-primary"
                                    onClick={this.dataEdit}
                                  >
                                    {"   "}
                                    Editar Plato{"   "}
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
                                <Form.Label>
                                  <strong>Ingredientes</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="ingrediente"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  value={this.state.dataCard.ingrediente}
                                />
                                <Form.Label>
                                  <strong>Precio ($)</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precio"
                                  placeholder=""
                                  value={this.state.dataCard.precio}
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
                                    Eliminar Plato{"   "}
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

export default ManagerSitePlato;
