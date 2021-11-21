import React from "react";
import Header from "./Header";
import Footer from "./Footer";
class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="contactos">
          <div className="container">
            <div className="section-title">
              <h2>
                <span>Puedes</span> contactarnos
              </h2>
              <p>
                Gracias por elegirnos para acompañar tus eventos, por favor,
                diligencia cada campo, nos encargaremos de responder en el menor
                tiempo posible.
              </p>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?
              pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%
              3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                style={{
                  border: "0",
                  width: "100%",
                  height: "350px",
                  frameborder: "0",
                  allowFullScreen: true,
                }}
              ></iframe>
            </div>

            <div className="container mt-5">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6  info">
                    <i class="bx bxs-location-plus"></i>
                    <h4>Localización:</h4>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i class="bx bxs-watch"></i>
                    <h4>Hora de apertura:</h4>
                    <p>
                      Lunes-Sábado:
                      <br />
                      11:00 AM - 2300 PM
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i class="bx bx-mail-send"></i>
                    <h4>Correo electrónico:</h4>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i class="bx bxs-phone-call"></i>
                    <h4>Número telefónico:</h4>
                    <p>
                      +602 5589 55488 51
                      <br />
                      +1 5589 22475 14
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="formulario-contacto">
              <div className="col-md-6">
                <label for="validationCustom03" class="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">
                  Escriba un asunto en el área correspondiente
                </div>
              </div>

              <div className="col-md-6">
                <label for="validationCustom03" class="form-label">
                  Nombre completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  maxlength="50"
                  minlength="20"
                  required
                  pattern="[A-Za-z]{10,50}"
                />
                <div className="invalid-feedback">
                  Por favor, ingrese el nombre en el campo correspondiente
                </div>
              </div>
              <div className="col-mb-6">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  maxlength="60"
                  minlength="13"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationCustom04" class="form-label">
                  Eventos
                </label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Elige el evento de interés
                  </option>
                  <option>Cumpleaños</option>
                  <option>Aniversario</option>
                  <option>Fiesta infantil</option>
                  <option>Declaración o propuesta</option>
                  <option>Despedida</option>
                  <option>Cena con amigos</option>
                </select>
                <div className="invalid-feedback">
                  Por favor, eleccione un evento válido
                </div>
              </div>
              <div className="mb-6">
                <label for="validationTextarea" class="form-label">
                  Área de comentarios o solicitudes especiales
                </label>
                <textarea
                  class="form-control"
                  id="validationTextarea"
                  maxlength="200"
                  minlength="20"
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Por favor, escriba un mensaje en el área.
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="validationFormCheck1"
                  required
                />
                <label class="form-check-label" for="validationFormCheck1">
                  Tratamiento de datos personales
                </label>
                <div className="invalid-feedback">
                  Para poder realizar su reserva, debe aceptar el tratamiento de
                  datos
                </div>
              </div>
              <button type="submit" class="btn btn-warning">
                Enviar
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
