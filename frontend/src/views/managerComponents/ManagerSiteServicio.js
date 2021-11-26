import React from "react";
import { Card, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";

class ManagerSiteEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataServicio: [],
      dataCard: [],
      nombre_serv: "",
      descripcion_serv: "",
      imagen_serv: "",
      precio_serv: 0,
      texto_serv: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Servicio")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataServicio = [];
        data.forEach((servicio) => {
          let object = {};
          object["id"] = servicio.id;
          object["nombre"] = servicio.name;
          object["descripcion"] = servicio.description;
          object["imagen"] = <img src={servicio.image} width="100px"></img>;
          object["img"] = servicio.image;
          object["precio"] = servicio.price;
          object["texto"] = servicio.text;
          columnsDataServicio.push(object);
        });
        this.setState({ dataServicio: columnsDataServicio });
      })
      .catch((error) => console.log(error));
  }

  dataElimination(id) {
    fetch("http://localhost:5016/api/Servicio/" + id, {
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
        alert("¡Servicio eliminado!");
      })
      .catch((error) => console.log(error));
  }

  dataCreate(name, description, image, price, text) {
    fetch("http://localhost:5016/api/Servicio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        price: price,
        text: text,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(() => {
        alert("¡Servicio creado! :D");
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    fetch("http://localhost:5016/api/Servicio", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: this.state.dataCard.id,
        name: this.state.nombre_serv,
        description: this.state.descripcion_serv,
        image: this.state.imagen_serv,
        price: this.state.precio_serv,
        text: this.state.texto_serv,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        alert("¡Servicio editado! :D");
      })
      .catch((error) => console.log(error));
  };

  test = (data) => {
    this.setState({
      dataCard: data,
      nombre_serv: data.nombre,
      descripcion_serv: data.descripcion,
      imagen_serv: data.img,
      precio_serv: data.precio,
      texto_serv: data.texto,
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
          <Col md={1}></Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Servicios</strong>
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
                    data={this.state.dataServicio}
                    filter={true}
                    color="#ADACA7"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Header>
                <strong>Servicio seleccionado</strong>
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
                                  id="nombreServ"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcionServ"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagenServ"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Precio</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precioServ"
                                  placeholder=""
                                />
                                <Form.Label>
                                  <strong>Texto</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="textoServ"
                                  placeholder=""
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-success"
                                    onClick={() =>
                                      this.dataCreate(
                                        document.getElementById("nombreServ")
                                          .value,
                                        document.getElementById(
                                          "descripcionServ"
                                        ).value,
                                        document.getElementById("imagenServ")
                                          .value,
                                        document.getElementById("precioServ")
                                          .value,
                                        document.getElementById("textoServ")
                                          .value
                                      )
                                    }
                                  >
                                    {"   "}
                                    Crear Servicio{"   "}
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
                                  id="nombreServ"
                                  placeholder=""
                                  name="nombre_serv"
                                  onChange={this._handleChange}
                                  value={this.state.nombre_serv}
                                />
                                <Form.Label>
                                  <strong>Descripción</strong>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  id="descripcionServ"
                                  placeholder=""
                                  style={{ height: "100px" }}
                                  name="descripcion_serv"
                                  onChange={this._handleChange}
                                  value={this.state.descripcion_serv}
                                />
                                <Form.Label>
                                  <strong>Imagen</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagenServ"
                                  placeholder=""
                                  name="imagen_serv"
                                  onChange={this._handleChange}
                                  value={this.state.imagen_serv}
                                />
                                <Form.Label>
                                  <strong>Precio</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precioServ"
                                  placeholder=""
                                  name="precio_serv"
                                  onChange={this._handleChange}
                                  value={this.state.precio_serv}
                                />
                                <Form.Label>
                                  <strong>Texto</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="textoServ"
                                  placeholder=""
                                  name="texto_serv"
                                  onChange={this._handleChange}
                                  value={this.state.texto_serv}
                                />
                                <br />
                                <Col md={12}>
                                  <Button
                                    as={Col}
                                    variant="outline-primary"
                                    onClick={this.dataEdit}
                                  >
                                    {"   "}
                                    Editar Servicio{"   "}
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
                                  <strong>Precio</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="precio"
                                  placeholder=""
                                  value={this.state.dataCard.precio}
                                />
                                <Form.Label>
                                  <strong>Texto</strong>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="imagen"
                                  placeholder=""
                                  value={this.state.dataCard.texto}
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
                                    Eliminar Servicio{"   "}
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
