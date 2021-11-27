import React, { useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
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
            <h5 className="modal-title" id="exampleModalLabel">
              <strong>{data.name}</strong>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center">
            <Col md="10">
              <img className="img-fluid" src={data.image} alt="" />
              <Form id="form">
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    name="nombre"
                    id="nombre"
                    maxLength="50"
                    minLength="20"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="correo">Correo</label>
                  <input
                    className="form-control"
                    type="email"
                    name="correo"
                    id="correo"
                    aria-describedby="emailHelp"
                    maxLength="60"
                    minLength="13"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="reserva"
                  id="reserva"
                  defaultValue="Cumpleaños"
                  hidden
                />
                <div className="field">
                  <label htmlFor="telefono">Teléfono móvil</label>
                  <input
                    className="form-control"
                    type="tel"
                    name="telefono"
                    pattern="[0-9]{10}"
                    id="telefono"
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese el nombre en el campo correspondiente
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="indicaciones">Indicaciones</label>
                  <textarea
                    className="form-control"
                    name="indicaciones"
                    id="indicaciones"
                    maxLength="100"
                    minLength="20"
                    required
                  ></textarea>
                </div>
                <div className="field">
                  <label htmlFor="fecha">fecha</label>
                  <input
                    className="form-control"
                    type="date"
                    name="fecha"
                    id="fecha"
                    required
                  />
                </div>
                {console.log(document.getElementById)}
                <div className="field">
                  <label htmlFor="hora">hora</label>
                  <input
                    className="form-control"
                    type="time"
                    name="hora"
                    id="hora"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="personas">Cantidad de personas</label>
                  <input
                    className="form-control"
                    type="number"
                    name="personas"
                    id="personas"
                    maxLength="3"
                    required
                  />
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <input
            className="btn btn-outline-warning"
            type="submit"
            id="button"
            onClick={(e) => dataService(e)}
            defaultValue="Reservar"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
