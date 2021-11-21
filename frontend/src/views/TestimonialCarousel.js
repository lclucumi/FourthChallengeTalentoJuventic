import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dataTestimonial from "../json/dataTestimonial.json";
import imgSlide1 from "../images/testimonials/testimonials-1.jpg";
import imgSlide2 from "../images/testimonials/testimonials-2.jpg";
import imgSlide3 from "../images/testimonials/testimonials-3.jpg";
import imgSlide4 from "../images/testimonials/testimonials-4.jpg";
import imgSlide5 from "../images/testimonials/testimonials-5.jpg";

class TestimonialCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImg: [imgSlide1, imgSlide2, imgSlide3, imgSlide4, imgSlide5],
    };
  }
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
                                  src={this.state.slideImg[i]}
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
