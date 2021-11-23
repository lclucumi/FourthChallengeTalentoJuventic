import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dataTestimonial from "../json/dataTestimonial.json";

class TestimonialCarousel extends React.Component {
  render() {
    return (
      <>
        <section id="testimonio">
          <div className="row">
            <div className="col-sm">
              <div
                id="carouselTestimonio"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="row">
                  <div className="col-md-6 col-sm-6 image-evento"></div>
                  <Carousel>
                    {dataTestimonial.objTestimonials.map((testimonial, i) => {
                      return (
                        <Carousel.Item interval={1000}>
                          <Carousel.Caption>
                            <div className="row">
                              <div className="col-md-6 col-sm-6 image-evento">
                                <img
                                  src={testimonial.img}
                                  className="testimonial-img"
                                  alt=""
                                />
                                <h1>{testimonial.nombre}</h1>
                                <h4>{testimonial.puesto}</h4>
                                <div className="stars">
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <div className="testimonio-personal fst-italic">
                                  <i className="bx bxs-quote-alt-left comilla"></i>
                                  <p>{testimonial.testimonio}</p>
                                  <i className="bx bxs-quote-alt-right comilla"></i>
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
      </>
    );
  }
}

export default TestimonialCarousel;
