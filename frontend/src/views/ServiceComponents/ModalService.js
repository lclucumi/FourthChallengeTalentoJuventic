import React, { useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

function dataCreate(
  service,
  name,
  email,
  phone,
  indication,
  date,
  hour,
  people,
  state
) {
  fetch("http://localhost:5016/api/Reserva", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      servicio_id: service,
      name: name,
      email: email,
      phone: phone,
      indication: indication,
      date_reserva: date,
      hour: hour,
      people: people,
      state: state,
    }),
  })
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then(() => {
      alert("¡Reserva creada! :D");
    })
    .catch((error) => console.log(error));
}

export default function InfoModal(props) {
  const serviceID = "default_service";
  const templateID = "template_6mr32th";
  const [data] = useState(props);

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
          dataCreate(
            data.id,
            nombre_res,
            correo_res,
            telefono_res,
            indicacion_res,
            fecha_res,
            hora_res,
            persona_res,
            "En espera"
          );
          localStorage.clear();
        },
        (err) => {
          console.log("ERROR");
          btn.value = "Reservar";
          alert(JSON.stringify(err));
        }
      );
  }

  const [nombre_res, nombre] = useState("");
  const [correo_res, correo] = useState("");
  const [telefono_res, telefono] = useState(0);
  const [indicacion_res, indicaciones] = useState("");
  const [hora_res, hora] = useState("");
  const [persona_res, personas] = useState(0);
  const [fecha_res, fecha] = useState("");
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
                    onChange={(event) => {
                      nombre(event.target.value);
                    }}
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
                    onChange={(event) => {
                      correo(event.target.value);
                    }}
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
                    onChange={(event) => {
                      telefono(event.target.value);
                    }}
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
                    onChange={(event) => {
                      indicaciones(event.target.value);
                    }}
                    required
                  ></textarea>
                </div>
                <div className="field">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    className="form-control"
                    type="date"
                    name="fecha"
                    id="fecha"
                    onChange={(event) => {
                      fecha(event.target.value);
                    }}
                    required
                  />
                </div>
                {console.log(document.getElementById)}
                <div className="field">
                  <label htmlFor="hora">Hora</label>
                  <input
                    className="form-control"
                    type="time"
                    name="hora"
                    id="hora"
                    onChange={(event) => {
                      hora(event.target.value);
                    }}
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
                    onChange={(event) => {
                      personas(event.target.value);
                    }}
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
