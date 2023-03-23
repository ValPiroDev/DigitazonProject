import { deleteSubscriber } from "../api";
import Resturant from "./Resturant";
const resturantList = ({ data = [], incrementCart, itemIsPresent }) => {
  //console.log(data);
  if (data.status === 404) {
    return (
      <div className="alert alert-warning text-center">
        Siamo spiacenti, al momento non ci sono ristoranti nelle tue vicinanze
        che soddisfino la tua richiesta!
      </div>
    );
  } else {
    if (Array.isArray(data)) {
      return (
        <>
          {data.map((singleRest) => {
            return (
              <div
                key={singleRest.id}
                className="col-12 col-sm-6 col-lg-3 mb-5 "
              >
                <Resturant
                  singleRest={singleRest.id}
                  oneRest={singleRest}
                  incrementCart={incrementCart}
                  itemIsPresent={itemIsPresent}
                />
              </div>
            );
          })}
        </>
      );
    }
  }
};
export default resturantList;
