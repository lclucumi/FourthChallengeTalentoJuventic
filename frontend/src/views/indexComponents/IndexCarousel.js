// React
import React from "react";
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
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/slide%2Fslide-1.jpg?alt=media&token=d420313d-f054-4441-92c2-731d18e506d1"
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
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/slide%2Fslide-2.jpg?alt=media&token=aa64f872-f702-4730-99bc-3684548d6024"
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
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/slide%2Fslide-3.jpg?alt=media&token=7b214ea0-baaa-474f-9ee5-2f845be82f61"
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
