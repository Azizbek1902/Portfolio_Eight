import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Total() {
  const cartArr = useSelector((state) => state.productReducer.cart);
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.productReducer.totalPrice);
  let totalNumber = cartArr.length
  return (
    <div>
      <div className="bg-[#f5f7fa] px-7 pt-10 pb-10">
        <h1 className="text-lg text-[#242424] font-semibold mb-5">
          Cart Total
        </h1>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Subtotal:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">
            {totalNumber}
          </p>
        </div>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Delivery:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">Free</p>
        </div>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Total:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">${totalPrice}</p>
        </div>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="w-full py-4 font-semibold mt-28 hover:bg-[#131212] transition-all bg-[#fbb710] text-lg text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Total;
