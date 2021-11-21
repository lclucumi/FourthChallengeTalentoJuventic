import React from "react";
class Header extends React.Component {
  emptyCar(e) {
    e.preventDefault();
    while (document.querySelector("#car-list tbody").firstChild) {
      document
        .querySelector("#car-list tbody")
        .removeChild(document.querySelector("#car-list tbody").firstChild);
    }
    this.emptyLocalStorage();
    return false;
  }

  emptyLocalStorage() {
    localStorage.clear();
  }

  orderProcess(e) {
    e.preventDefault();
    if (this.obtainProductsLocalStorage().length === 0) {
      window.alert("No hay productos en el carrito");
    } else {
      window.location.href = "/buy";
    }
  }

  obtainProductsLocalStorage() {
    let productLS;

    if (localStorage.getItem("productos") === null) {
      productLS = [];
    } else {
      productLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productLS;
  }

  eraseProduct(e) {
    e.preventDefault();
    let product, productID;
    if (e.target.classList.contains("delete-product")) {
      e.target.parentElement.parentElement.remove();
      product = e.target.parentElement.parentElement;
      productID = product.querySelector("a").getAttribute("data-id");
    }
    this.deleteProductLocalStorage(productID);
  }

  deleteProductLocalStorage(productID) {
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (productLS, index) {
      if (productLS.id === productID) {
        productsLS.splice(index, 1);
      }
    });

    localStorage.setItem("productos", JSON.stringify(productsLS));
  }

  obtainEvent(e) {
    e.preventDefault();
    let id, cant, product, productsLS;
    if (e.target.classList.contains("cantidad")) {
      product = e.target.parentElement.parentElement;
      id = product.querySelector("a").getAttribute("data-id");
      cant = product.querySelector("input").value;
      let updateCant = document.querySelectorAll("#subtotals");
      productsLS = this.obtainProductsLocalStorage();
      productsLS.forEach(function (productLS, index) {
        if (productLS.id === id) {
          productLS.cantidad = cant;
          updateCant[index].innerHTML = Number(cant * productsLS[index].precio);
        }
      });
      localStorage.setItem("productos", JSON.stringify(productsLS));
    } else {
      console.log("click afuera");
    }
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", this.readLocalStorage());
  }

  readLocalStorage() {
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (product) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <img src="${product.imagen}" width=100>
        </td>
        <td>${product.titulo}</td>
        <td>${product.precio}</td>
        <td>${product.cantidad}</td>
        <td>
          <a href="#" class="delete-product bx bxs-x-circle" data-id="${product.id}"></a>
        </td>
      `;
      document.querySelector("#car-list tbody").appendChild(row);
    });
  }

  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="./logo.png" alt="" width="50" height="44" />
                Dunkers
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      Quienes somos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/menu">
                      Menú
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/service">
                      Servicios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contáctenos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/map">
                      Mapa del sitio
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDarkDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-cart-alt car-icon"></i>
                          </a>
                          <div
                            id="buy-car"
                            className="dropdown-menu"
                            aria-labelledby="navbarCollapse"
                            onClick={(e) => this.eraseProduct(e)}
                            onChange={(e) => this.obtainEvent(e)}
                            onKeyUp={(e) => this.obtainEvent(e)}
                          >
                            <table id="car-list" className="table">
                              <thead>
                                <tr>
                                  <th>Imagen</th>
                                  <th>Nombre</th>
                                  <th>Precio</th>
                                  <th>Cantidad</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>

                            <a
                              href="#"
                              id="empty-car"
                              className="btn btn-danger btn-block"
                              onClick={(e) => this.emptyCar(e)}
                            >
                              Vaciar Carrito
                            </a>
                            <a
                              href="#"
                              id="buy-process"
                              className="btn btn-success btn-block"
                              onClick={(e) => this.orderProcess(e)}
                            >
                              Finalizar pedido
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <form className="d-flex userProfile">
                  <a href="/login" className="user">
                    <i class="bx bx-user-circle"></i>
                  </a>
                </form>

                <form className="d-flex media">
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
