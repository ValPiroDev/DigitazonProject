import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteRestaurant,
  postRestaurant,
  searchRestaurant,
  putRestaurant,
  postDish,
  deleteDish,
  putDish,
} from "../api";
import FormRestaurant from "../components/FormRestaurant";
import FormDish from "../components/FormDish";
import Modal from "react-bootstrap/Modal";
import ResturantList from "../components/ResturantList";
import pic from "../images/4d24384cea464ce39a8ea7d5c6bb3812.png";

const AdminLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDish, setShowModalDish] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [idDish, setIdDish] = useState("");
  const [clickedButtonDish, setClickedButtonDish] = useState("");
  const [clickedButton, setClickedButton] = useState("");
  const handleShowDish = () => setShowModalDish(true);
  const handleCloseDish = () => setShowModalDish(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const updateData = async (term) => {
    const responseData = await searchRestaurant(term);
    setData(responseData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const deleteResturant = async () => {
    deleteRestaurant(id);
    const updatedRestaurants = await updateData("");
    setData(updatedRestaurants);
    updateData();
  };

  const deleteDishes = async () => {
    deleteDish(idDish);
    const updatedRestaurants = await updateData("");
    setData(updatedRestaurants);
    updateData();
  };

  const createRestaurant = async (restaurant) => {
    // creo un nuovo oggetto book
    const newRestaurant = await postRestaurant({
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      tag: restaurant.tag,
      image: restaurant.image,
      reviews: restaurant.reviews,
    });
    if (newRestaurant.status === 400) {
      const error = "Inserisci tutti i campi correttamente!";
      window.alert(error);
      console.log(newRestaurant.status);
    } else {
      console.log(newRestaurant);
      const updatedRestaurants = await updateData("");
      setData(updatedRestaurants);
      handleClose();
      updateData();
    }
  };

  const createDish = async (dish) => {
    // creo un nuovo oggetto book
    const newDish = await postDish(
      {
        name: dish.name,
        price: dish.price,
        image: dish.image,
        restaurantId: dish.restaurantId,
      },
      dish.restaurantId
    );
    if (newDish.status === 400) {
      const error = "Inserisci tutti i campi correttamente!";
      window.alert(error);
      console.log(newDish.status);
    } else {
      console.log(newDish);
      const updatedDish = await updateData("");
      setData(updatedDish);
      handleClose();
      updateData();
    }
  };

  const updateRestaurant = async (restaurant) => {
    // creo un nuovo oggetto book
    const updateRestaurant = await putRestaurant(
      {
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        tag: restaurant.tag,
        image: restaurant.image,
        reviews: restaurant.reviews,
      },
      id
    );
    if (updateRestaurant.status === 400) {
      const error = "Inserisci tutti i campi correttamente!";
      window.alert(error);
      console.log(updateRestaurant.status);
    } else {
      console.log(updateRestaurant);
      const updatedRestaurants = await updateData("");
      setData(updatedRestaurants);
      handleClose();
      updateData();
    }
  };

  const updateSingleDish = async (dish, id, restaurantId) => {
    const updateSingleDish = await putDish(
      {
        name: dish.name,
        price: dish.price,
        image: dish.image,
      },

      id,
      restaurantId
    );
    if (updateSingleDish.status === 400) {
      const error = "Inserisci tutti i campi correttamente!";
      window.alert(error);
      console.log(updateSingleDish.status);
    } else {
      console.log(updateSingleDish);
      const updatedRestaurants = await updateData("");
      setData(updatedRestaurants);
      handleClose();
      updateData();
    }
  };

  useEffect(() => {
    updateData();
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
                alt="..."
                src={pic}
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
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </Nav>
              <Container className="d-flex ">
                <form onSubmit={handleSubmit} className="ms-5">
                  <label className="form-label" htmlFor="name"></label>
                  <input
                    type="text"
                    id="id"
                    className="form-control"
                    placeholder="id del ristorante"
                    onChange={(event) => setId(event.target.value)}
                  ></input>
                  <button
                    className="btn btn-outline-dark"
                    onClick={deleteResturant}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2"
                    type="button"
                    onClick={() => {
                      setClickedButton("update");
                      handleShow();
                      console.log(id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2 "
                    type="button"
                    onClick={() => {
                      setClickedButton("create");
                      handleShow();
                    }}
                  >
                    Nuovo ristorante
                  </button>
                </form>
                <form onSubmit={handleSubmit} className="ms-5">
                  <label className="form-label ms-2" htmlFor="name"></label>
                  <input
                    type="text"
                    id="id"
                    className="form-control"
                    placeholder="id del Piatto"
                    onChange={(event) => setIdDish(event.target.value)}
                  ></input>
                  <button
                    className="btn btn-outline-dark"
                    onClick={deleteDishes}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2"
                    type="button"
                    onClick={() => {
                      setClickedButtonDish("update");
                      handleShowDish();
                      console.log(id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2 "
                    type="button"
                    onClick={() => {
                      handleShowDish();
                      setClickedButtonDish("create");
                    }}
                  >
                    Nuovo piatto
                  </button>
                </form>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title className="bg-dark text-warning">
                      {clickedButton}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <FormRestaurant
                      onCreate={createRestaurant}
                      onUpdate={updateRestaurant}
                      id={id}
                      clickedButton={clickedButton}
                    />
                  </Modal.Body>
                </Modal>
                <Modal show={showModalDish} onHide={handleCloseDish}>
                  <Modal.Header className="bg-dark" closeButton>
                    <Modal.Title className="bg-dark text-warning">
                      Aggiungi un nuovo piatto!
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-dark">
                    <FormDish
                      onCreate={createDish}
                      id={idDish}
                      onUpdate={updateSingleDish}
                      clickedButton={clickedButtonDish}
                    />
                  </Modal.Body>
                </Modal>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className="d-flex row mt-4">
          <ResturantList data={data} />
        </div>
      </main>
      <footer className="bg-warning text-center text-lg-start mt-auto opacity-75">
        <div className="text-center text-dark p-3 ">
          ©2023 Copyright: Valerio Pirozzi
        </div>
      </footer>
    </div>
  );
};
export default AdminLayout;
