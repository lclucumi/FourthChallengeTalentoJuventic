import React from "react";
import IndexCarousel from "./indexComponents/IndexCarousel";
import IndexAbout from "./indexComponents/IndexAbout";
import IndexOutStanding from "./indexComponents/IndexOutStandind";
import TestimonialCarousel from "./TestimonialCarousel";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
class Inicio extends React.Component {
  render() {
    return (
      <>
        <Header />
        <IndexCarousel />
        <IndexAbout />
        <IndexOutStanding />
        <TestimonialCarousel />
        <Footer />
      </>
    );
  }
}

export default Inicio;
