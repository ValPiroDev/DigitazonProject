import Dish from "./Dish";
import Carousel from "react-bootstrap/Carousel";

const dishList = ({ dishList, singleRest, incrementCart }) => {
  // console.log(callList);
  if (dishList.lenght === 0) {
    return (
      <div>
        <h1>There is no callphones</h1>
      </div>
    );
  } else {
    if (Array.isArray(dishList)) {
      return (
        <Carousel variant="dark">
          {dishList.map((dish) => {
            return (
              <Carousel.Item key={dish.id} style={{ height: 200 }}>
                <img
                  style={{ height: 300 }}
                  className="w-100 img-fluid"
                  src={dish.image}
                  alt="Responsive image"
                />
                <Carousel.Caption>
                  <div
                    style={{ backgroundColor: "#fcda7c" }}
                    className="opacity-75 rounded"
                  >
                    <Dish dish={dish} incrementCart={incrementCart} />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    } else if (dishList !== []) {
      return (
        <ul>
          <Dish dish={dishList} incrementCart={incrementCart} />
        </ul>
      );
    } else {
      return (
        <div>
          <h1>There is no dishes</h1>
        </div>
      );
    }
  }
};

export default dishList;
