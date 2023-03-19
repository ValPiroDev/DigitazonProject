const dish = ({ dish, incrementCart }) => {
  const handleClick = () => {
    console.log("clicked product " + dish.id);
    incrementCart(dish);
  };
  if (dish.lenght === 0) {
    return <div></div>;
  } else {
    return (
      <>
        <span className="mb-0 text-dark fs-2"> {dish.name}</span>
        <p className="mb-0 ">
          Prezzo: {dish.price}€
          <button
            className="btn btn-dark mx-3"
            onClick={handleClick}
            /*disabled={isAdded}*/
          >
            Ordina!
          </button>
        </p>
      </>
    );
  }
};

export default dish;
