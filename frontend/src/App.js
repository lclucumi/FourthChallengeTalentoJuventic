import logo from "./logo.svg";
import "./App.css";
//Secciones
import Login from "./views/Login";
import SignIn from "./views/SignIn";
import Inicio from "./views/Inicio";
import Menu from "./views/Menu";
import About from "./views/About";
import Buy from "./views/Buy";
import Service from "./views/Service";
import ContactUs from "./views/ContactUs";
import SiteMap from "./views/SiteMap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagerSite from "./views/ManagerSite";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/buy">
          <Buy />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/map">
          <SiteMap />
        </Route>
        <Route exact path="/manager">
          <ManagerSite />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
