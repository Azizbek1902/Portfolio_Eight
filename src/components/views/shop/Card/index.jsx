import { AiTwotoneStar } from "react-icons/ai";
import img1 from "../../../../assets/img/core-img/cart.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addSubTotal,
  addTotalPrice,
} from "../../../../redux/actions/product";

function Card({ img, price, title, imgHover, demo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.productReducer.cart);
  const handleclik = () => {
    const findItem = cartArr.find((item) => item.id == demo.id);
    if (findItem) {
      findItem.quantity+=1
      dispatch(addSubTotal(2));
      dispatch(addTotalPrice(demo.price));
    } else {
      dispatch(addCart(demo));
      dispatch(addTotalPrice(demo.price));
    }

    navigate("/table");
  };
  return (
    <div>
      <div className="effHov mb-10">
        <div
          className="bg-cover bg-no-repeat h-[517px] trans bg-center w-full hover:bg-[image:var(--image-url)] bg-[image:var(--iwmage-url)]"
          style={{
            "--iwmage-url": `url(${img})`,
            "--image-url": `url(${imgHover})`,
          }}
        ></div>
        <div className="mt-5 flex justify-between items-center">
          <div className="text-start">
            <div className="w-20 mb-3 h-[3px] bg-[#fbb710]"></div>
            <h1 className="text-2xl text-[#fbb710] font-semibold pb-2">
              {price}
            </h1>
            <h2 className="text-base text-[#242424] Font font-medium">
              {title}
            </h2>
          </div>
          <div className="text-end">
            <div className="flex gap-1 mb-2">
              <AiTwotoneStar color="#fbb710" size={12} />
              <AiTwotoneStar color="#fbb710" size={12} />
              <AiTwotoneStar color="#fbb710" size={12} />
              <AiTwotoneStar color="#fbb710" size={12} />
              <AiTwotoneStar color="#fbb710" size={12} />
            </div>
            <button className="cursor-pointer" onClick={() => handleclik()}>
              <img src={img1} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
