import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";

class ManagerReserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDescription: [],
      dataServicio: [],
      dataCard: [],
      nombre_res: "",
      correo_res: "",
      telefono_res: 0,
      indicacion_res: "",
      hora_res: "",
      persona_res: 0,
      servicio_res: 0,
      fecha_reserva_res: "",
      estado_res: "",
      id_res: 0,
    };
  }

  componentDidMount() {
    this.fetchDataServicio();
    this.fetchData();
  }

  fetchDataServicio() {
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

  fetchData() {
    fetch("http://localhost:5016/api/Reserva")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataReserva = [];
        data.forEach((reserva) => {
          let object = {};
          object["id"] = reserva.id;
          object["servicio_id"] = reserva.servicio_id;
          object["nombre"] = reserva.name;
          object["correo"] = reserva.email;
          object["telefono"] = reserva.phone;
          object["indicacion"] = reserva.indication;
          object["fecha"] = reserva.date_reserva;
          object["hora"] = reserva.hour;
          object["persona"] = reserva.people;
          object["estado"] = reserva.state;
          this.state.dataServicio.map((servicio) => {
            if (servicio.id == reserva.servicio_id) {
              object["nombre_servicio"] = servicio.nombre;
            }
          });
          console.log(object["servicio_id"], object["correo"]);
          columnsDataReserva.push(object);
        });
        this.setState({
          dataDescription: columnsDataReserva,
        });
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    fetch("http://localhost:5016/api/Reserva", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: this.state.id_res,
        servicio_id: this.state.servicio_res,
        name: this.state.nombre_res,
        email: this.state.correo_res,
        phone: this.state.telefono_res,
        indication: this.state.indicacion_res,
        date_reserva: this.state.fecha_reserva_res,
        hour: this.state.hora_res,
        people: this.state.persona_res,
        state: this.state.estado_res,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        alert("¡Reserva editada! :D");
      })
      .catch((error) => console.log(error));
  };

  test = (data) => {
    this.setState({
      dataCard: data,
      id: data.id,
      fecha_reserva_res: data.fecha_reserva,
      estado_res: data.estado,
      correo_res: data.correo,
      servicio_res: data.servicio_id,
      nombre_res: data.nombre,
      telefono_res: data.telefono,
      indicacion_res: data.indicacion,
      hora_res: data.hora,
      persona_res: data.persona,
      fecha_reserva_res: data.fecha,
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
          <Col md={6}>
            <Card>
              <Card.Header>
                <strong>Reserva</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Información</Card.Title>
                <Card.Text>
                  <BasicFiltering
                    test={this.test}
                    columns={[
                      { title: "CLIENTE", field: "nombre" },
                      { title: "SERVICIO", field: "nombre_servicio" },
                      { title: "HORA", field: "hora" },
                      { title: "FECHA", field: "fecha" },
                      { title: "ESTADO", field: "estado" },
                    ]}
                    data={this.state.dataDescription}
                    filter={true}
                    color="#34BE82"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
                <strong>Reservas</strong>
              </Card.Header>
              <Card.Body>
                <br />
                <Row className="mx-0">
                  <Col md={12}>
                    <Card.Text>
                      <Card>
                        <Card.Body>
                          <Card.Title></Card.Title>
                          <Card.Text>
                            <Form.Label>
                              <strong>Estado</strong>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              id="descripcionRest"
                              placeholder=""
                              style={{ height: "100px" }}
                              name="estado_res"
                              onChange={this._handleChange}
                              value={this.state.estado_res}
                            />
                            <br />
                            <Col md={12}>
                              <Button
                                as={Col}
                                variant="outline-primary"
                                onClick={this.dataEdit}
                              >
                                {"   "}
                                Editar Reserva{"   "}
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
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default ManagerReserva;
