import {
  ADD_CART,
  ADD_USER,
  DELETE_CART,
  DELETE_USER,
  GET_USER,
  SUB_TOTAL,
  SUB_TOTAL_,
  TOTAL_PRICE,
  TOTAL_PRICE_,
  UPDATE_USER,
} from "../actionTypes";

export const getProduct = () => {
  return {
    type: GET_USER,
  };
};

export const addProduct = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};
export const addSubTotal = (payload) => {
  return {
    type: SUB_TOTAL,
    payload,
  };
};
export const addSubTotalMinus = (payload) => {
  return {
    type: SUB_TOTAL_,
    payload,
  };
};
export const addTotalPrice = (payload) => {
  return {
    type: TOTAL_PRICE,
    payload,
  };
};
export const addTotalPriceMinus = (payload) => {
  return {
    type: TOTAL_PRICE_,
    payload,
  };
};

export const deleteProduct = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
export const deleteCart = (payload) => {
  return {
    type: DELETE_CART,
    payload,
  };
};
export const updateProduct = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
