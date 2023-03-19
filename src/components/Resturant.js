import { getDish, searchRestaurant } from "../api";
import { useState } from "react";
import DishList from "./DishList";
import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const useResturant = ({
  oneRest = [],
  dishLost = [],
  incrementCart,
  itemIsPresent,
  singleRest,
}) => {
  const [dishData, setDishData] = useState([]);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show);
    updateDish(oneRest.id);
  };

  const updateDish = async (term) => {
    const responseDish = await getDish(term);
    setDishData(responseDish);
  };

  return (
    <>
      <div
        className="card border-radius "
        style={{ backgroundColor: "#fcda7c" }}
      >
        <div className="card-header text-center ">
          <div>
            <img
              style={{ height: 250 }}
              className="mt-2 mb-1 rounded img-fluid "
              src={oneRest.image}
              alt="Responsive image"
            />
          </div>
          <div className="card-body">
            <h4>{oneRest.name}</h4>
            <h5 className="card-title">
              {" "}
              {oneRest.address} , {oneRest.city}
            </h5>
            Recensioni: {oneRest.reviews}/5 <AiFillStar></AiFillStar>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleOpen}
          >
            Menù Completo
          </button>
        </div>
        {show && (
          <div className="card-text">
            <DishList
              dishList={dishData}
              incrementCart={incrementCart}
              itemIsPresent={itemIsPresent}
              singleRest={singleRest}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default useResturant;
