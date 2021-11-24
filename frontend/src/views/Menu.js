import React from "react";
import MenuPlates from "./menuComponents/MenuPlates";
import { Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import ManagerSite from "./ManagerSite";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      dataMenu: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Plato")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataMenu: data });
      })
      .catch((error) => console.log(error));
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
              {this.state.dataMenu.map((menu, i) => {
                if (i % 2 == 0) {
                  return (
                    <div id="left_column" key={menu.price}>
                      <MenuPlates
                        i={i}
                        image={menu.image}
                        precio={menu.price}
                        plate={menu.name}
                        ingredients={menu.ingredient}
                        key={i}
                        description={menu.description}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div id="right_column" key={menu.price}>
                      <MenuPlates
                        i={i}
                        image={menu.image}
                        precio={menu.price}
                        plate={menu.name}
                        ingredients={menu.ingredient}
                        key={i}
                        description={menu.description}
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
