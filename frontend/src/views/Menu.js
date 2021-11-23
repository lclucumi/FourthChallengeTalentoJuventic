import React from "react";
import dataMenu from "../json/dataMenu.json";
import MenuPlates from "./menuComponents/MenuPlates";
import { Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    };
  }

  render() {
    return (
      <>
        <Header />
        <section id="menu">
          <div className="container content-menu" id="list-products">
            <div className="section-title">
              <h2>
                Nuestro <span>Menú</span>
              </h2>
              <a href="../pdf/menu.pdf" download="menu">
                <i className="bx bxs-file-pdf"></i>
              </a>
            </div>

            <Row className="justify-content-md-center">
              {dataMenu.objMenu.map((menu, i) => {
                if (i % 2 == 0) {
                  return (
                    <div id="left_column" key={menu.precio}>
                      <MenuPlates
                        i={i}
                        image={menu.image}
                        precio={menu.precio}
                        plate={menu.plato}
                        ingredients={menu.ingredientes}
                        key={i}
                        description={menu.descripcion}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div id="right_column" key={menu.precio}>
                      <MenuPlates
                        i={i}
                        image={menu.image}
                        precio={menu.precio}
                        plate={menu.plato}
                        ingredients={menu.ingredientes}
                        key={i}
                        description={menu.descripcion}
                      />
                    </div>
                  );
                }
              })}
            </Row>
          </div>
        </section>
        <div>
          <meta charSet="utf-8" />
          <script src="../js/car.js"></script>
          <script src="../js/order.js"></script>
        </div>
        ;
        <Footer />
      </>
    );
  }
}

export default Menu;
