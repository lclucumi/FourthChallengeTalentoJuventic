import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import NotificationAlert from "react-notification-alert";
import {
  showAlert,
  notificationAlert,
} from "../views/alertComponent/notificacions";
class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productEmail: "",
    };
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

  totalCalculate() {
    let productLS;
    let total = 0,
      subtotal = 0,
      igv = 0;
    productLS = this.obtainProductsLocalStorage();
    for (let i = 0; i < productLS.length; i++) {
      let element = Number(productLS[i].precio * productLS[i].cantidad);
      total = total + element;
    }
    igv = parseFloat(total * 0.18).toFixed(2);
    subtotal = parseFloat(total - igv).toFixed(2);

    document.getElementById("subtotal").innerHTML = "$" + subtotal;
    document.getElementById("igv").innerHTML = "$" + igv;
    document.getElementById("total").value = "$" + total.toFixed(2);
  }

  readLocalStorageShop() {
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
        <td>
          <input type="number" class="form-control cantidad" min="1" value=${
            product.cantidad
          }>
        </td>
        <td id='subtotals'>${(product.precio * product.cantidad).toFixed(
          2
        )}</td>
        <td>
          <a href="#" class="delete-product bx bxs-x-circle" style="font-size:30px" data-id="${
            product.id
          }"}></a>
        </td>
      `;
      document.querySelector("#buy-list tbody").appendChild(row);
    });
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
    this.totalCalculate();
  }

  deleteProductLocalStorage(productID) {
    this.totalCalculate();
    let productsLS;
    productsLS = this.obtainProductsLocalStorage();
    productsLS.forEach(function (productLS, index) {
      if (productLS.id === productID) {
        productsLS.splice(index, 1);
      }
    });

    localStorage.setItem("productos", JSON.stringify(productsLS));
  }

  componentDidMount() {
    this.totalCalculate();
    document.addEventListener("DOMContentLoaded", this.readLocalStorageShop());
  }

  emptyLocalStorage() {
    localStorage.clear();
  }

  dataCreate(title, amount, id, email, date_pedido) {
    fetch("http://localhost:5016/api/Pedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title: title,
        amount: amount,
        plato_id: id,
        email: email,
        date_pedido: date_pedido,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  purchaseProcess(e) {
    const hoy = new Date();
    e.preventDefault();
    if (this.obtainProductsLocalStorage().length === 0) {
      showAlert(
        "editado",
        "No se puede realizar la compra porque no hay productos seleccionados"
      );
      window.location.href = "/menu";
    } else if (
      document.getElementById("client").value === "" ||
      document.getElementById("address").value === ""
    ) {
      showAlert("editado", "Por favor, diligencia todos los campos");
    } else {
      const loadingGif = document.querySelector("#load");
      loadingGif.style.display = "block";
      const send = document.createElement("img");
      send.src =
        "https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/mail.gif?alt=media&token=f19bd594-9167-42dc-a1f9-24e84867908a";
      send.id = "mailImage";
      let productsLS, product;
      productsLS = JSON.parse(localStorage.getItem("productos"));
      productsLS.map((productLS, i) => {
        product +=
          "\n" +
          JSON.stringify(
            `Plato: ${productLS.titulo} Precio: ${productLS.precio} Cantidad: ${productLS.cantidad}`
          );
        this.dataCreate(
          productLS.titulo,
          productLS.cantidad,
          productLS.id,
          document.getElementById("client").value,
          hoy
        );
      });
      product = product.replace("undefined", "");
      emailjs
        .send(
          "service_dxswoo3",
          "template_mlm662d",
          {
            addressee: document.getElementById("client").value,
            products: product,
            cc_to: document.getElementById("address").value,
            total_value: document.getElementById("total").value,
          },
          "user_CWVJnQVkk2WBBvozaeuKP"
        )
        .then(
          function () {
            loadingGif.style.display = "none";
            document.querySelector("#loaders").appendChild(send);
            setTimeout(() => {
              send.remove();
              localStorage.clear();
              showAlert(
                "creado",
                "¡Pedido registrado exitosamente! Revisa el correo diligenciado, por favor"
              );
              window.location = "/menu";
            }, 2000);
          },
          function (err) {
            showAlert(
              "editado",
              "¡Falló el envío del email! Respuesta:\n " + JSON.stringify(err)
            );
          }
        );
    }
  }

  obtainEvent(e) {
    e.preventDefault();
    this.totalCalculate();
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

  twoActionsBuy(e) {
    this.obtainEvent(e);
    this.eraseProduct(e);
  }

  render() {
    return (
      <>
        <Header
          total={() => {
            this.totalCalculate();
          }}
        />
        <section id="buy">
          <NotificationAlert ref={notificationAlert} />
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h2 className="d-flex justify-content-center mb-3">
                  Realizar Pedido
                </h2>
                <form id="buy-process" action="#" method="POST">
                  <div className="form-group row">
                    <label
                      for="client"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Cliente :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        id="client"
                        placeholder="Ingresa nombre cliente"
                        name="addressee"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="email"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Correo :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="email"
                        className="form-control"
                        id="address"
                        placeholder="Ingresa tu correo"
                        name="cc_to"
                      />
                    </div>
                  </div>

                  <div
                    id="buy-car"
                    className="table-responsive"
                    onClick={(e) => this.twoActionsBuy(e)}
                    onChange={(e) => this.obtainEvent(e)}
                    onKeyUp={(e) => this.obtainEvent(e)}
                  >
                    <table className="table" id="buy-list">
                      <thead>
                        <tr>
                          <th scope="col">Imagen</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Sub Total</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          SUB TOTAL :
                        </th>
                        <th scope="col">
                          <p id="subtotal"></p>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          IGV :
                        </th>
                        <th scope="col">
                          <p id="igv"></p>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          TOTAL :
                        </th>
                        <th scope="col">
                          <input
                            type="text"
                            id="total"
                            name="total_value"
                            readonly
                            className="font-weight-bold border-0"
                          ></input>
                        </th>
                      </tr>
                    </table>
                  </div>

                  <div className="row justify-content-center" id="loaders">
                    <img
                      id="load"
                      src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/load.gif?alt=media&token=a56af775-6034-4b7e-91f5-ff8585ea15a8"
                    />
                  </div>

                  <div className="row justify-content-between">
                    <div className="col-md-4 mb-2">
                      <a
                        href="/menu"
                        className="btn btn-outline-primary btn-block"
                      >
                        Seguir comprando
                      </a>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <button
                        href=""
                        className="btn btn-outline-success btn-block"
                        type="submit"
                        id="process"
                        onClick={(e) => this.purchaseProcess(e)}
                      >
                        Realizar compra
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Buy;
