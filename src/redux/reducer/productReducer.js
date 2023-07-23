import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  DELETE_CART,
  ADD_CART,
  SUB_TOTAL,
  TOTAL_PRICE,
  SUB_TOTAL_,
  TOTAL_PRICE_,
} from "../actionTypes";
import img1 from "../../assets/img/bg-img/1.jpg";
import img2 from "../../assets/img/bg-img/2.jpg";
import img3 from "../../assets/img/bg-img/3.jpg";
import img4 from "../../assets/img/bg-img/4.jpg";
import img5 from "../../assets/img/bg-img/5.jpg";
import img6 from "../../assets/img/bg-img/6.jpg";
import img7 from "../../assets/img/bg-img/7.jpg";
import img8 from "../../assets/img/bg-img/8.jpg";
import img9 from "../../assets/img/bg-img/9.jpg";
import Img1 from "../../assets/img/product-img/product1.jpg";
import Img2 from "../../assets/img/product-img/product2.jpg";
import Img3 from "../../assets/img/product-img/product3.jpg";
import Img4 from "../../assets/img/product-img/product4.jpg";
import Img5 from "../../assets/img/product-img/product5.jpg";
import Img6 from "../../assets/img/product-img/product6.jpg";
const initialState = {
  products: [
    {
      id: 1,
      className: "",
      img: img1,
      shopImg: Img1,
      shopHoverImg: Img2,
      title: "Modern Chair",
      price: 180,
      quantity: 1
      // balandlik: "400px",
    },
    {
      id: 2,
      className: "",
      img: img2,
      shopImg: Img2,
      shopHoverImg: Img3,
      title: "Minimalistic Plant Pot",
      price: 200,
      quantity: 1
      // balandlik: "568px",
    },
    {
      id: 3,
      className: "",
      img: img3,
      shopImg: Img3,
      shopHoverImg: Img4,
      title: "Modern Chair",
      price: 100,
      quantity: 1
      // balandlik: "356px",
    },
    {
      id: 4,
      className: "",
      img: img5,
      shopImg: Img4,
      shopHoverImg: Img5,
      title: "Plant Pot",
      price: 190,
      quantity: 1
      // balandlik: "400px",
    },
    {
      id: 5,
      className: "",
      img: img6,
      shopImg: Img5,
      shopHoverImg: Img6,
      title: "Small Table",
      price: 180,
      quantity: 1
      // balandlik: "356px",
    },
    {
      id: 6,
      className: "",
      img: img4,
      shopImg: Img6,
      shopHoverImg: Img1,
      title: "Modern Chair",
      price: 180,
      quantity: 1
      // balandlik: "356px",
    },
    {
      id: 7,
      className: "",
      img: img8,
      title: "Night Stand",
      price: 180,
      // balandlik: "481px",
    },
    {
      id: 8,
      className: "",
      img: img9,
      title: "Modern Rocking Chair",
      price: 280,
      // balandlik: "356px",
    },
    {
      id: 9,
      className: "",
      img: img7,
      title: "Metallic Chair",
      price: 320,
      // balandlik: "568px",
    },
  ],
  cart: [],
  isLoading: false,
  subTotal: 0,
  totalPrice: 0,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case ADD_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== payload),
      };
    case SUB_TOTAL: {
      console.log(payload, "payload");
      return {
        ...state,
        subTotal: state.subTotal + payload,
      };
    }
    case SUB_TOTAL_: {
      console.log(payload, "payload");
      return {
        ...state,
        subTotal: state.subTotal - payload,
      };
    }
    case TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: state.totalPrice + payload,
      };
    }
    case TOTAL_PRICE_: {
      return {
        ...state,
        totalPrice: state.totalPrice - payload,
      };
    }
    case UPDATE_USER: {
      let index = state.products.findIndex((item) => item.id == payload.id);
      const newValues = state.products;
      newValues[index] = payload;
      return {
        ...state,
        users: newValues,
      };
    }
    case DELETE_USER:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};
export default productReducer;
