// React
import React from "react";
import imgSlide1 from "../../images/slide/slide-1.jpg";
import imgSlide2 from "../../images/slide/slide-2.jpg";
import imgSlide3 from "../../images/slide/slide-3.jpg";
import Carousel from "react-bootstrap/Carousel";
class IndexCarousel extends React.Component {
  render() {
    return (
      <>
        <section id="indexCarousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgSlide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Descuentos</h1>
                <p>
                  Si compras una House salad, te puedes llevar la segunda con un
                  50% de descuento ¡Anímate a visitarnos!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgSlide2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>Promociones</h1>
                <p>
                  Todos los viernes y sábados, por la compra de dos Cream
                  noodles te damos un tercer plato completamente gratis
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgSlide3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Recomendados</h1>
                <p>
                  En la sección de destacados encontrarás nuestros platos
                  destacados.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
}

export default IndexCarousel;
