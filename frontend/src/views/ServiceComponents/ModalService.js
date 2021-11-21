import React, { useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import imgService1 from "../../images/event-birthday.jpg";
import imgService2 from "../../images/event-custom.jpg";
import imgService3 from "../../images/event-private.jpg";
import imgService4 from "../../images/child-party.jpg";
import imgService5 from "../../images/proposal.jpg";
import imgService6 from "../../images/anniversary.jpg";
import emailjs from "emailjs-com";

export default function InfoModal(props) {
  const serviceID = "default_service";
  const templateID = "template_6mr32th";
  /** Servicios */

  function dataService(e) {
    e.preventDefault();
    let btn = document.getElementById("button");
    btn.value = "Reservando...";

    emailjs
      .sendForm(
        serviceID,
        templateID,
        document.getElementById("form"),
        "user_ueQX19o7DPyIEt7Q0KiW7"
      )
      .then(
        () => {
          btn.value = "Reservar";
          alert("Reservado!");
          localStorage.clear();
        },
        (err) => {
          console.log("ERROR");
          btn.value = "Reservar";
          alert(JSON.stringify(err));
        }
      );
  }

  const [imgs] = useState([
    imgService1,
    imgService2,
    imgService3,
    imgService4,
    imgService5,
    imgService6,
  ]);
  const [data] = useState(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="btn btn-outline-warning" type="button" onClick={handleShow}>
        Reserva Ahora
      </a>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 class="modal-title" id="exampleModalLabel">
              <strong>{data.service}</strong>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center">
            <Col md="10">
              <img class="img-fluid" src={imgs[data.img]} alt="" />
              <Form id="form">
                <div class="field">
                  <label for="nombre">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    id="nombre"
                    maxlength="50"
                    minlength="20"
                    required
                  />
                </div>
                <div class="field">
                  <label for="correo">Correo</label>
                  <input
                    class="form-control"
                    type="email"
                    name="correo"
                    id="correo"
                    aria-describedby="emailHelp"
                    maxlength="60"
                    minlength="13"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="reserva"
                  id="reserva"
                  value="Cumpleaños"
                  hidden
                />
                <div class="field">
                  <label for="telefono">Teléfono móvil</label>
                  <input
                    class="form-control"
                    type="tel"
                    name="telefono"
                    pattern="[0-9]{10}"
                    id="telefono"
                    required
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese el nombre en el campo correspondiente
                  </div>
                </div>
                <div class="field">
                  <label for="indicaciones">Indicaciones</label>
                  <textarea
                    class="form-control"
                    name="indicaciones"
                    id="indicaciones"
                    maxlength="100"
                    minlength="20"
                    required
                  ></textarea>
                </div>
                <div class="field">
                  <label for="fecha">fecha</label>
                  <input
                    class="form-control"
                    type="date"
                    name="fecha"
                    id="fecha"
                    required
                  />
                </div>
                <div class="field">
                  <label for="hora">hora</label>
                  <input
                    class="form-control"
                    type="time"
                    name="hora"
                    id="hora"
                    required
                  />
                </div>
                <div class="field">
                  <label for="personas">Cantidad de personas</label>
                  <input
                    class="form-control"
                    type="number"
                    name="personas"
                    id="personas"
                    maxlength="3"
                    required
                  />
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <input
            class="btn btn-outline-warning"
            type="submit"
            id="button"
            onClick={(e) => dataService(e)}
            value="Reservar"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
