import React from "react";
import ManagerHeader from "./managerComponents/ManagerHeader";
import Footer from "./Footer";
import ManagerSitePlato from "./managerComponents/ManagerSitePlato";
import ManagerSiteEmpleado from "./managerComponents/ManagerSiteEmpleado";
import ManagerSiteServicio from "./managerComponents/ManagerSiteServicio";
import ManagerSiteComentario from "./managerComponents/ManagerSiteComentario";
import { ButtonToolbar, Button, ButtonGroup, Row, Col } from "react-bootstrap";
class ManagerSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plato: true,
      empleado: false,
      servicio: false,
      comentario: false,
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
                      })
                    }
                  >
                    Servicios
                  </Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Fourth group">
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      this.setState({
                        plato: false,
                        empleado: false,
                        servicio: false,
                        comentario: true,
                      })
                    }
                  >
                    Comentarios
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
          ) : null}
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default ManagerSite;
