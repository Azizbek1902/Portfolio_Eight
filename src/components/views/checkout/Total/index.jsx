import React from "react";
import img from '../../../../assets/img/core-img/paypal.png'
function Total() {
  return (
    <div>
      <div className="bg-[#f5f7fa] px-7 pt-10 pb-10">
        <h1 className="text-lg text-[#242424] font-semibold mb-5">Cart Total</h1>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Subtotal:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">$140.00</p>
        </div>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Delivery:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">Free</p>
        </div>
        <div className="flex justify-between mb-8">
          <p className="text-sm text-[#6b6b6b] font-semibold">Total:</p>
          <p className="text-sm text-[#6b6b6b] font-semibold">$140.00</p>
        </div>
        <div className="flex items-center mb-4 gap-5">
          <input type="checkbox" checked />
          <p className="text-sm text-[#6b6b6b] font-semibold">Cash on Delivery</p>
        </div>
        <div className="flex items-center mb-4 gap-5">
          <input type="checkbox" />
          <p className="text-sm text-[#6b6b6b] font-semibold">Paypal</p>
          <img src={img} alt="" />
        </div>
        <button className="w-full py-4 font-semibold mt-28 hover:bg-[#131212] transition-all bg-[#fbb710] text-lg text-white">Checkout</button>
      </div>
    </div>
  );
}

export default Total;
