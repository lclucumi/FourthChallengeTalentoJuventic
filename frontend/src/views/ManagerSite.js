import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import BasicFiltering from "./ServiceComponents/table";

class ManagerSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMenu: [],
      dataEmpleado: [],
      dataCard: "",
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

  fetchDataWork() {
    fetch("http://localhost:5016/api/Empleado")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataEmpleado = [];
        data.forEach((empleado) => {
          let object = {};
          object["id"] = empleado.id;
          object["restaurante_id"] = empleado.restaurante_id;
          object["nombre"] = empleado.name;
          object["descripcion"] = empleado.descripcion;
          object["imagen"] = <img src={empleado.image} width="100px"></img>;
          object["img"] = empleado.image;
          columnsDataEmpleado.push(object);
        });
        this.setState({ dataEmpleado: columnsDataEmpleado });
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
        alert("¡Dato eliminado!");
      })
      .catch((error) => console.log(error));
  }

  dataCreate() {
    const formData = new FormData();
    formData.append("restaurante_id", 1);
    formData.append("name", "Perro caliente");
    formData.append("description", "Deliciosooo");
    formData.append("image", "image");
    formData.append("ingredient", "pan,salsa,salchicha");
    formData.append("price", 12000);
    formData.append("amount", 0);

    fetch("http://localhost:5016/api/Plato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        restaurante_id: 1,
        name: "Perro caliente",
        description: "Deliciosooo",
        image: "image",
        ingredient: "pan,salsa,salchicha",
        price: 12000,
        amount: 0,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        alert("¡Dato creado! :D");
      })
      .catch((error) => console.log(error));
  }

  test = (data) => {
    this.setState({ dataCard: data });
  };

  render() {
    return (
      <>
        <Header />
        <section id="manager">
          <div className="manager-title">
            <h2>
              Información <span>Restaurante</span>
            </h2>
          </div>
          <Row className="justify-content-md-center">
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
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Header>
                  <strong>Plato seleccionado</strong>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Datos</Card.Title>
                  <br />
                  <Row className="mx-0">
                    <Button
                      as={Col}
                      variant="outline-success"
                      onClick={() => this.dataCreate()}
                    >
                      Crear
                    </Button>
                    <Button
                      as={Col}
                      variant="outline-danger"
                      className="mx-2"
                      onClick={() =>
                        this.dataElimination(this.state.dataCard.id)
                      }
                    >
                      Eliminar
                    </Button>
                    <Button as={Col} variant="outline-primary">
                      Editar
                    </Button>
                  </Row>
                  <br />
                  <Card.Text>
                    <Card>
                      <Card.Img variant="top" src={this.state.dataCard.img} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <Form.Label>
                            <strong>Ingredientes</strong>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                            value={this.state.dataCard.ingrediente}
                          />
                          <Form.Label>
                            <strong>Precio ($)</strong>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            value={this.state.dataCard.precio}
                          />
                          <Form.Label>
                            <strong>Descripción</strong>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                            value={this.state.dataCard.descripcion}
                          />
                          <Form.Label>
                            <strong>Imagen</strong>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Normal text"
                            value={this.state.dataCard.img}
                          />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={1}></Col>
          </Row>
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default ManagerSite;
