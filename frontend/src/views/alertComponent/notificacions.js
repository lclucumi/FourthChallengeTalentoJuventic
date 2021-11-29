import React from "react";
import Alert from "react-bootstrap/Alert";

const notificationAlert = React.createRef();

const showAlert = (code, alert, position = "tc", duration = 2) => {
  let type = "";
  switch (true) {
    case code == "editado":
      type = "warning";
      break;
    case code == "eliminado":
      type = "primary";
      break;
    case code == "creado":
      type = "success";
      break;
    default:
      type = "danger";
  }
  let options = {};
  options = {
    place: position,
    message: <div id="alert">{alert}</div>,
    type: type,
    closeButton: false,
    autoDismiss: duration,
  };
  try {
    return notificationAlert.current.notificationAlert(options);
  } catch (error) {
    console.log(error);
  }
};

export { showAlert, notificationAlert };
