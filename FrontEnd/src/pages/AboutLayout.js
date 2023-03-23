import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Row, Col, Carousel } from "react-bootstrap";

import pic from "../images/4d24384cea464ce39a8ea7d5c6bb3812.png";

const AboutLayout = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
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
        <div className="container align-items-center ">
          <h1 className="text-center my-5">About Us</h1>
          <p className="text-center my-5 col-12">
            Benvenuti su Napleat, la tua nuova destinazione per ordinare il cibo
            preferito online in Italia! Napleat è una piattaforma di ordinazione
            di cibo online, che ti consente di ordinare cibo da una vasta
            selezione di ristoranti, pizzerie, pub e molto altro ancora,
            direttamente dal comfort della tua casa. Siamo impegnati a fornire
            il servizio più rapido e affidabile per soddisfare le tue esigenze
            culinarie. Con Napleat, puoi cercare facilmente il tuo cibo
            preferito, ordinare online e pagare in modo sicuro con pochi clic.
            La nostra interfaccia utente intuitiva ti permette di navigare
            rapidamente tra le categorie di cibo e i menu dei ristoranti per
            trovare ciò che desideri. Seleziona il tuo ristorante preferito e
            ordina il tuo pasto preferito, sia che tu stia cercando la pizza
            tradizionale, un piatto di pasta fatto in casa o un delizioso
            antipasto. Con la nostra app mobile gratuita, puoi fare ordini
            ancora più rapidi e semplici ovunque tu sia. Con Napleat, non devi
            più preoccuparti di cercare il numero di telefono del ristorante, di
            sprecare tempo al telefono per effettuare un ordine o di dover
            uscire di casa per andare a ritirarlo. Il tuo pasto preferito viene
            consegnato direttamente a casa tua! Siamo orgogliosi di lavorare con
            una vasta gamma di ristoranti di alta qualità, che offrono una
            varietà di opzioni di cucina italiana e internazionale. La nostra
            missione è quella di offrire un'esperienza di ordinazione di cibo
            online senza problemi, con consegne rapide e prezzi competitivi.
            Ordinare il cibo online con Napleat è facile, veloce e sicuro. Prova
            oggi stesso la nostra piattaforma di ordinazione di cibo online e
            goditi il tuo pasto preferito comodamente a casa tua.
          </p>
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

export default AboutLayout;
