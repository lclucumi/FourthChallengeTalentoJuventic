import React from "react";
import ManagerHeader from "./managerComponents/ManagerHeader";
import Footer from "./Footer";
import ManagerSitePlato from "./managerComponents/ManagerSitePlato";
import ManagerSiteEmpleado from "./managerComponents/ManagerSiteEmpleado";
import ManagerSiteServicio from "./managerComponents/ManagerSiteServicio";
import ManagerSiteComentario from "./managerComponents/ManagerSiteComentario";
import ManagerReserva from "./managerComponents/ManagerReserva";
import ManagerText from "./managerComponents/ManagerText";
import { ButtonToolbar, Button, ButtonGroup, Row, Col } from "react-bootstrap";
class ManagerSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plato: true,
      empleado: false,
      servicio: false,
      comentario: false,
      texto: false,
      reserva: false,
    };
  }
  render() {
    return (
      <>
        <ManagerHeader />
        <section id="manager">
          <div className="manager-title">
            <h2>
              Información <span>Restaurante</span>
            </h2>
          </div>
          <br />
          <Row className="justify-content-md-center">
            <Col id="button_manager">
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.setState({
                        plato: true,
                        empleado: false,
                        servicio: false,
                        comentario: false,
                        text: false,
                        reserva: false,
                      })
                    }
                  >
                    Platos
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button
                    variant="outline-warning"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: true,
                        servicio: false,
                        comentario: false,
                        text: false,
                        reserva: false,
                      })
                    }
                  >
                    Empleados
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Third group">
                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: false,
                        servicio: true,
                        comentario: false,
                        text: false,
                        reserva: false,
                      })
                    }
                  >
                    Servicios
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: false,
                        servicio: false,
                        comentario: true,
                        text: false,
                        reserva: false,
                      })
                    }
                  >
                    Comentarios
                  </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                  <Button
                    variant="outline-dark"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: false,
                        servicio: false,
                        comentario: false,
                        text: true,
                        reserva: false,
                      })
                    }
                  >
                    Texto
                  </Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Fourth group">
                  <Button
                    variant="outline-success"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: false,
                        servicio: false,
                        comentario: false,
                        text: false,
                        reserva: true,
                      })
                    }
                  >
                    Reserva
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <br />
          {this.state.plato ? (
            <ManagerSitePlato />
          ) : this.state.empleado ? (
            <ManagerSiteEmpleado />
          ) : this.state.servicio ? (
            <ManagerSiteServicio />
          ) : this.state.comentario ? (
            <ManagerSiteComentario />
          ) : this.state.text ? (
            <ManagerText />
          ) : this.state.reserva ? (
            <ManagerReserva />
          ) : null}
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default ManagerSite;
