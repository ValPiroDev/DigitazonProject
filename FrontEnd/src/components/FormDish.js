import { useState } from "react";

const FormDish = ({ onCreate, onUpdate, id, clickedButton }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [restaurantId, setRestaurantId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (clickedButton) {
      case "create":
        onCreate({
          name,
          price,
          image,
          restaurantId,
        });
        break;
      case "update":
        onUpdate({ name, price, image, restaurantId }, id, restaurantId);
        break;
    }
  };
  return (
    <form className="bg-warning text-dark  p-5 border" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Nome
      </label>
      <input
        type="text"
        id="name"
        className="form-control"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        Prezzo
      </label>
      <input
        type="number"
        id="price"
        className="form-control"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        imageURL
      </label>
      <input
        type="text"
        id="image"
        className="form-control"
        value={image}
        onChange={(event) => {
          setImage(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        Id del ristorante
      </label>
      <input
        type="number"
        id="restaurantId"
        className="form-control"
        value={restaurantId}
        onChange={(event) => {
          setRestaurantId(event.target.value);
        }}
      ></input>

      <button className="btn btn-outline-dark mt-3" type="submit">
        {clickedButton}
      </button>
    </form>
  );
};

export default FormDish;
