const BASE_URL_RESTAURANTS = "http://localhost:8080/api/v1/restaurants";
const BASE_URL_DISHES = "http://localhost:8080/api/v1/dishes";

//GET Restaurant
export const searchRestaurant = async (term) => {
  let url = BASE_URL_RESTAURANTS;
  if (term !== null && term !== undefined && term !== "") {
    url += "/" + term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchDish = async (term) => {
  let url = BASE_URL_RESTAURANTS + "/dishes?name=";
  if (term !== null && term !== undefined && term !== "") {
    url += term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchTag = async (term) => {
  let url = BASE_URL_RESTAURANTS + "/tag?name=";
  if (term !== null && term !== undefined && term !== "") {
    url += term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/*export const searchDish = async (term) => {
  try {
    const response = await fetch(BASE_URL + "/" + "dishes?name=" + term);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};*/

//GET PHONECALLS
export const getDish = async (term) => {
  try {
    const response = await fetch(BASE_URL_DISHES + "/" + term);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//POST restaurant
export const postRestaurant = async (restaurant) => {
  try {
    const response = await fetch(BASE_URL_RESTAURANTS, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putRestaurant = async (restaurant, id) => {
  try {
    const response = await fetch(BASE_URL_RESTAURANTS + "/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//DELETE restaurant
export const deleteRestaurant = async (term) => {
  let url = "";
  //console.log(typeof term, term);
  if (isNaN(term)) {
    url = BASE_URL_RESTAURANTS + "/0";
  } else {
    url = BASE_URL_RESTAURANTS + "/" + term;
  }
  try {
    const response = await fetch(url, { method: "DELETE" });
    const data = await response.json();
    //console.log(data);
    // console.log("hai eliminato id " + term, response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//POST PHONECALL
export const postDish = async (dish, term) => {
  const url = BASE_URL_RESTAURANTS + "/" + term + "/dishes";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dish),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDish = async (term) => {
  let url = "";
  if (isNaN(term)) {
    url = BASE_URL_DISHES + "/0";
  } else {
    url = BASE_URL_DISHES + "/" + term;
  }
  try {
    const response = await fetch(url, { method: "DELETE" });
    const data = await response.json();
    console.log(data);
    console.log("hai eliminato id " + term, response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putDish = async (dish, id, restaurantId) => {
  try {
    const response = await fetch(
      BASE_URL_DISHES + "/" + id + "/" + restaurantId,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dish),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
