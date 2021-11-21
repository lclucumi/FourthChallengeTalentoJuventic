import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import imgPlate1 from "../../images/menu/lobster-bisque.jpg";
import imgPlate2 from "../../images/menu/Bread-Barrel.jpg";
import imgPlate3 from "../../images/menu/Crab-Cake.jpeg";
import imgPlate4 from "../../images/menu/Caesar-Selections.jpeg";
import imgPlate5 from "../../images/menu/Bandeja-Paisa.jpg";
import imgPlate6 from "../../images/menu/Cocido.jpg";
//column
import imgPlate7 from "../../images/menu/Tuscan-Grilled.jpg";
import imgPlate8 from "../../images/menu/Mozarella-Stick.jpg";
import imgPlate9 from "../../images/menu/Greek-Salad.jpeg";
import imgPlate10 from "../../images/menu/Lasagna.jpg";
import imgPlate11 from "../../images/menu/Pizza.jpg";
import imgPlate12 from "../../images/menu/Ajiaco-santafereno.jpg";

export default function InfoModal(props) {
  const [imgs] = useState([
    imgPlate1,
    imgPlate2,
    imgPlate3,
    imgPlate4,
    imgPlate5,
    imgPlate6,
    imgPlate7,
    imgPlate8,
    imgPlate9,
    imgPlate10,
    imgPlate11,
    imgPlate12,
  ]);
  const [data] = useState(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a type="button" data-toggle="modal" data-target="#" onClick={handleShow}>
        <h5 className="nextButton">
          <strong>{data.name}</strong>
        </h5>
      </a>
      {/* <Button className="nextButton" onClick={handleShow}>
        {data.name}
      </Button> */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 class="modal-title" id="exampleModalLabel">
              <strong>{data.name}</strong>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center">
            <Col md="10">
              <img class="img-fluid" src={imgs[data.img]} alt="" />
              <p>
                <span className="ingredient">Ingredientes:</span>{" "}
                {data.ingredients}
              </p>
              <p>{data.description}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-secondary" onClick={handleClose}>
            Cerrar
          </button>
          <a
            class="btn btn btn-warning"
            href="/contact"
            role="button"
            type="button"
          >
            Contáctanos
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
