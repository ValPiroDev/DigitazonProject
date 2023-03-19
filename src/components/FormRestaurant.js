import { useState } from "react";

const FormRestaurant = ({ onCreate, onUpdate, id, clickedButton }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [reviews, setReviews] = useState("");

  const [className, setClassNameInput] = useState("form-control");
  const [classSurname, setClassSurnameInput] = useState("form-control");
  const [classDateOfBirth, setClassdateOfBirthInput] = useState("form-control");
  const [classCityOfBirth, setClassCityOfBirthInput] = useState("form-control");
  const [classCredit, setClassCreditInput] = useState("form-control");

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (clickedButton) {
      case "create":
        console.log(clickedButton);
        onCreate({
          name,
          address,
          city,
          image,
          tag,
          reviews,
        });
        break;
      case "update":
        onUpdate(
          {
            name,
            address,
            city,
            image,
            tag,
            reviews,
          },
          id
        );
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
        className={className}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="surname">
        Indirizzo
      </label>
      <input
        type="text"
        id="address"
        className={classSurname}
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        Città
      </label>
      <input
        type="text"
        id="city"
        className={classDateOfBirth}
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        imageURL
      </label>
      <input
        type="text"
        id="image"
        className={classCityOfBirth}
        value={image}
        onChange={(event) => {
          setImage(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        tags
      </label>
      <input
        type="text"
        id="tag"
        className={classCityOfBirth}
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
      ></input>
      <label className="form-label" htmlFor="title">
        Valutazione
      </label>
      <input
        type="number"
        id="reviews"
        className={classCredit}
        value={reviews}
        onChange={(event) => {
          setReviews(event.target.value);
        }}
      ></input>

      <button className="btn btn-outline-dark mt-3" type="submit">
        {clickedButton}
      </button>
    </form>
  );
};

export default FormRestaurant;
