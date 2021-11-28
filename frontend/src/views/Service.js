import React from "react";
import ModalService from "../views/ServiceComponents/ModalService";
import Carousel from "react-bootstrap/Carousel";
import dataServices from "../json/dataServices.json";
import Header from "./Header";
import Footer from "./Footer";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: dataServices.objServices[0].image,
      number: 0,
      dataServicio: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Servicio")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataServicio: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Header />
        <section id="eventos-section">
          <div className="container">
            <div className="section-title">
              <h2>
                Organización de <span>eventos</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div
                  id="carouselEventoSection"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <Carousel>
                    {this.state.dataServicio.map((service, i) => {
                      return (
                        <Carousel.Item interval={1000} key={i}>
                          <Carousel.Caption>
                            <div className="row">
                              <div className="col-md-6 col-sm-12 image-evento">
                                <img
                                  src={service.image}
                                  className="d-block w-100 img-fluid shadow-lg sha"
                                />
                              </div>
                              <div className="col-md-6 col-sm-12 info-event">
                                <h2>{service.name}</h2>
                                <span>${service.price}</span>
                                <p>{service.description}</p>
                                <p>{service.text}</p>
                                <div className="btn-menu">
                                  <ModalService
                                    name={service.name}
                                    image={service.image}
                                    id={service.id}
                                  />{" "}
                                  <a
                                    className="btn btn-outline-warning"
                                    href="/contact"
                                    role="button"
                                  >
                                    Contáctanos
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Services;
