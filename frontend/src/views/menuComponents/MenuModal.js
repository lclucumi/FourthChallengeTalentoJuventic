import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

export default function InfoModal(props) {
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
              <img class="img-fluid" src={data.image} alt="" />
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
