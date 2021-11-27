import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import BasicFiltering from "../ServiceComponents/table";

class ManagerReserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDescription: [],
      dataCard: [],
      fecha_reserva_res: "",
      estado_res: "",
      cliente_res: 5,
      servicio_res: 1,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Reserva")
      .then((response) => response.json())
      .then((data) => {
        let columnsDataReserva = [];
        data.forEach((reserva) => {
          let object = {};
          object["id"] = reserva.id;
          object["cliente_id"] = reserva.cliente_id;
          object["servicio_id"] = reserva.servicio_id;
          object["estado"] = reserva.state;
          columnsDataReserva.push(object);
        });
        this.setState({
          dataDescription: columnsDataReserva,
        });
      })
      .catch((error) => console.log(error));
  }

  dataEdit = () => {
    console.log(this.state.estado_res);
    fetch("http://localhost:5016/api/Reserva", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: 2,
        cliente_id: this.state.cliente_res,
        servicio_id: this.state.servicio_res,
        date_reserva: "2021-11-17",
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
      fecha_reserva_res: data.fecha_reserva,
      estado_res: data.estado,
      cliente_res: data.cliente_id,
      servicio_res: data.servicio_id,
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
                <strong>Reserva</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Información</Card.Title>
                <Card.Text>
                  <BasicFiltering
                    test={this.test}
                    columns={[
                      { title: "CLIENTE", field: "cliente_id" },
                      { title: "ESTADO", field: "estado" },
                      { title: "SERVICIO", field: "servicio_id" },
                    ]}
                    data={this.state.dataDescription}
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
