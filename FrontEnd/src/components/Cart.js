import { useState } from "react";
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs";
import { Button, Offcanvas, Alert } from "react-bootstrap";

const Cart = ({ cart, onRemove, addToCart, removeSigleProduct }) => {
  const [showList, setShowList] = useState(false);
  const [showShip, setShowShip] = useState(false);
  let itemNum = 0;
  let priceTot = 0;
  const current = new Date();
  current.setMinutes(current.getMinutes() + 20);

  const date = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  cart.forEach((el) => {
    itemNum += el.quantity;
    priceTot += el.price * el.quantity;
  });

  const toggleShowList = () => {
    setShowList(!showList);
  };

  const removeProductAndAllItems = (product) => {
    removeSigleProduct(product);
  };

  const removeFromCart = (product) => {
    onRemove(product);
  };
  const addtoTheCart = (product) => {
    addToCart(product);
  };

  let content = (
    <ul className="list-group">
      {cart.map((el) => {
        return (
          <li
            key={el.id}
            className="d-flex align-items-center justify-content-between list-group-item"
            style={{ backgroundColor: "#e6faf8" }}
          >
            <span>
              {el.name}
              <p>
                <span>Quantità: {el.quantity}</span>
                <span className="ms-4">
                  Prezzo: {el.price * el.quantity} &euro;
                </span>
              </p>
            </span>
            <div>
              <button
                id="minus"
                className="btn btn-warning btn-sm"
                onClick={() => {
                  removeFromCart(el);
                }}
              >
                -
              </button>
              <span id="counter" className="mx-2">
                {el.quantity}
              </span>
              <button
                id="plus"
                className="btn btn-warning btn-sm ml-2"
                onClick={() => {
                  addtoTheCart(el);
                }}
              >
                +
              </button>

              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => {
                  removeProductAndAllItems(el);
                }}
              >
                <BsFillTrashFill />
              </button>
            </div>
          </li>
        );
      })}
      <div className="mt-3">
        <div className="fs-3">
          <span className="m-3 fs-3">Totale:</span>
          {Math.round((priceTot + Number.EPSILON) * 100) / 100}&euro;
          <button
            className="btn btn-danger btn-sm ms-2"
            onClick={() => {
              setShowShip(true);
              console.log(showShip);
            }}
          >
            Ordina!
          </button>
        </div>
      </div>
    </ul>
  );
  if (cart.length === 0) {
    content = <Alert variant="info">Il tuo carrello è vuoto!</Alert>;
  }

  if (showShip === true) {
    content = (
      <>
        {" "}
        <Alert variant="info">Il tuo ordine arriverà alle ore: {date}</Alert>
        <button
          className="btn btn-danger btn-sm ms-2"
          onClick={() => {
            setShowShip(false);
          }}
        >
          Clicca qui per tornare all'ordine!
        </button>
      </>
    );
  }

  return (
    <div>
      <Button
        className="col-sm-10 col-lg-12 ms-3"
        variant="outline-dark"
        onClick={toggleShowList}
      >
        <BsFillCartFill />
        <span className="badge bg-secondary ms-1">{itemNum}</span>
      </Button>
      <Offcanvas
        show={showList}
        onHide={toggleShowList}
        placement="end"
        style={{ width: "500px", backgroundColor: "#fcda7c" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Il tuo Carrello</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
