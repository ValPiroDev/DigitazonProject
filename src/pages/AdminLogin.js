import AdminLayout from "./AdminLayout";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import pic from "../images/4d24384cea464ce39a8ea7d5c6bb3812.png";

const AboutLogin = () => {
  const [adminInput, setAdminInput] = useState("");
  const [passwordInupt, setPasswordInput] = useState("");

  const json = {
    admin: "admin",
    password: "password",
  };

  const ControllaStringhe = () => {
    // controlla se le stringhe passate sono uguali a quelle nel JSON

    if (adminInput == json.admin && passwordInupt == json.password) {
      window.location.href = "/admin";
    } else {
      return window.alert("Inserisci i campi correttamente");
    }
  };

  return (
    <div //className="bg-dark"
      style={{ backgroundColor: "#e6faf8" }}
    >
      <header>
        <Navbar bg="warning" expand="sm" className="">
          <Container>
            <Link
              className="navbar-brand"
              to="#"
              onClick={() => window.location.reload(false)}
            >
              <img
                className=" img-fluid rounded-circle "
                style={{ height: 80, width: 80 }}
                src={pic}
                alt="Responsive image"
              ></img>
            </Link>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/faq">
                  Faq
                </NavLink>
                <NavLink className="nav-link" to="/adminlogin">
                  Admin
                </NavLink>
              </Nav>
              <Container></Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container></Container>
      </header>
      <main>
        <div className="d-flex justify-content-center">
          <form
            // className=""
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label className="form-label ms-2" htmlFor="admin">
              Admin
            </label>
            <input
              type="text"
              value={adminInput}
              className="form-control col-3"
              onChange={(e) => setAdminInput(e.target.value)}
            />
            <label className="form-label ms-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              value={passwordInupt}
              className="form-control"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              className="btn btn-outline-dark mt-3"
              onClick={ControllaStringhe}
            >
              Accedi
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-warning text-center text-lg-start mt-auto mb-0 opacity-75">
        <div className="text-center text-dark p-3 ">
          ©2023 Copyright: Valerio Pirozzi
        </div>
      </footer>
    </div>
  );
};

export default AboutLogin;
