import { useState, useEffect } from "react";
import { searchRestaurant, searchDish, searchTag } from "../api";
import Cart from "../components/Cart";
import ResturantList from "../components/ResturantList";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import pic from "../images/4d24384cea464ce39a8ea7d5c6bb3812.png";
import "../style/style.css";
import Form from "react-bootstrap/Form";

const MainLayout = () => {
  const [dataSearch, setDataSearch] = useState([]);
  // const [data, setData] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  const style = {
    main: {
      backgroundColor: "#e6faf8",
    },
  };

  /*const handleSeachBarSubmit = () => {
    setDataSearch(data);
  }; */

  const itemIsPresent = (item) => {
    return (
      cartProducts.findIndex((el) => {
        return el.id === item.id;
      }) > -1
    );
  };

  const addToCart = (product) => {
    console.log(product);
    let newCart = [];
    let itemWithQuant = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    if (!itemIsPresent(itemWithQuant)) {
      newCart = [...cartProducts, { ...itemWithQuant }];
    } else {
      cartProducts.forEach((el) => {
        if (product.id !== el.id) {
          newCart.push(el);
        } else {
          newCart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: el.quantity + 1,
          });
        }
      });
    }
    setCartProducts(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = [];
    if (product.quantity === 1) {
      cartProducts.forEach((el) => {
        if (product.id !== el.id) {
          newCart.push(el);
        }
      });
    } else {
      cartProducts.forEach((el) => {
        if (product.id !== el.id) {
          newCart.push(el);
        } else {
          newCart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: el.quantity - 1,
          });
        }
      });
    }
    setCartProducts(newCart);
  };
  const removeSigleProduct = (product) => {
    const newCart = cartProducts.filter((el) => {
      return el.id !== product.id;
    });
    setCartProducts(newCart);
  };

  const updateData = async (term) => {
    document.title = "NaplEat";
    const responseData = await searchRestaurant(term);
    setDataSearch(responseData);
  };

  const updateDataDish = async (term) => {
    const responseData = await searchDish(term);
    setDataSearch(responseData);
  };

  const updateDataTag = async (term) => {
    const responseData = await searchTag(term);
    setDataSearch(responseData);
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="main" style={style.main}>
      <header>
        <Navbar bg="warning" expand="sm" className=" col-12 ">
          <Container>
            <Link
              className="navbar-brand"
              to="/"
              onClick={() => window.location.reload(false)}
            >
              <img
                className=" img-fluid rounded-circle "
                style={{ height: 80, width: 80 }}
                src={pic}
                alt="..."
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
              <SearchBar
                // callWhenSubmit={handleSeachBarSubmit}
                updateData={updateDataDish}
              />
            </Navbar.Collapse>

            <Cart
              cart={cartProducts}
              onRemove={removeFromCart}
              addToCart={addToCart}
              removeSigleProduct={removeSigleProduct}
            ></Cart>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className="d-flex row mt-4">
          <div className="d-flex justify-content-center mx-3 mb-4 ">
            <h5 className="d-none d-lg-block">
              Filtra per ciò che più preferisci:
            </h5>
            <Form>
              <div key={`inline-radio`} className="mb-3 mx-3 d-none d-lg-block">
                <Form.Check
                  inline
                  label="Tutto"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  onChange={() => updateDataDish()}
                />

                <Form.Check
                  inline
                  label="Fast Food"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  onChange={() => updateDataTag("fastfood")}
                />
                <Form.Check
                  inline
                  label="Giapponese"
                  name="group1"
                  type="radio"
                  id={`inline-radio-3`}
                  onChange={() => updateDataTag("giapponese")}
                />
                <Form.Check
                  inline
                  label="Pasta"
                  name="group1"
                  type="radio"
                  id={`inline-radio-4`}
                  onChange={() => updateDataTag("pasta")}
                />
                <Form.Check
                  inline
                  label="Carne"
                  name="group1"
                  type="radio"
                  id={`inline-radio-5`}
                  onChange={() => updateDataTag("carne")}
                />
                <Form.Check
                  inline
                  label="Dolci"
                  name="group1"
                  type="radio"
                  id={`inline-radio-6`}
                  onChange={() => updateDataTag("dolci")}
                />

                <Form.Check
                  inline
                  label="Pizza"
                  name="group1"
                  type="radio"
                  id={`inline-radio-7`}
                  onChange={() => updateDataTag("pizza")}
                />
              </div>
            </Form>
          </div>
          <ResturantList
            data={dataSearch}
            incrementCart={addToCart}
            itemIsPresent={itemIsPresent}
          />
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

export default MainLayout;
