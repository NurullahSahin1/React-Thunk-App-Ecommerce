// Thunk Aksiyonu

import axios from "axios";

export const addToBasket = (product) => async (dispatch) => {
  console.log(product);

  const newProduct = { ...product, amount: 1 };

  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;

  //API'ye ürün ekleme
  const res = await axios.post("http://localhost:3050/basket", newProduct);

  dispatch({
    type: "ADD",
    payload: newProduct,
  });
};

export const getBasket = () => (dispatch) => {
  dispatch({ type: "SET_BASKET_LOADING" });
  axios
    .get("http://localhost:3050/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};

export const updateItems = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() =>
      dispatch({
        type: "UPDATE",
        payload: product.id,
      })
    );
};

export const deleteItems = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount - 1,
    })
    .then(() =>
      dispatch({
        type: "DECREASE",
        payload: product.id,
      })
    );
};

export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`http://localhost:3050/basket/${delete_id}`)
    .then(() => dispatch({ type: "DELETE", payload: delete_id }));
};
