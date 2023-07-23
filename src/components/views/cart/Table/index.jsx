import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSubTotal,
  addSubTotalMinus,
  addTotalPrice,
  addTotalPriceMinus,
  deleteCart,
} from "../../../../redux/actions/product";

function Table({ img, title, price, cartId, quantity }) {
  const dispatch = useDispatch();
  const [result, setResult] = useState(quantity || 0);

  const handleClik = () => {
    setResult(result + 1);
    dispatch(addSubTotal(1));
    dispatch(addTotalPrice(price));
  };
  const handleMinus = (id) => {
    if (result > 1) {
      setResult(result - 1);
      dispatch(addSubTotalMinus(1));
      dispatch(addTotalPriceMinus(price));
    } else if (result == 1) {
      dispatch(deleteCart(id));
      dispatch(addSubTotalMinus(1));
      dispatch(addTotalPriceMinus(price));
    }
  };

  return (
    <div> 
      <tbody className="w-full grid grid-cols-4 items-center">
        <td className="text-start mb-5 md:mx-5">
          <img src={img} className="w-[143px]" alt="" />
        </td>
        <td className="text-start text-[#252525] text-base font-semibold">
          {title}
        </td>
        <td className="text-start text-[#252525] text-base font-semibold">
          {price}
        </td>
        <td className="flex items-center justify-start md:-ml-0 -ml-4">
          <p className="p-2 bg-[#f5f7fa] text-base font-semibold">Qty</p>
          <button
            onClick={() => handleMinus(cartId)}
            className="p-2 bg-[#f5f7fa] text-base font-bold"
          >
            -
          </button>
          <p className="p-2 bg-[#f5f7fa] text-base font-bold">{result}</p>
          <button
            onClick={handleClik}
            className="p-2 bg-[#f5f7fa] text-base font-bold"
          >
            +
          </button>
        </td>
      </tbody>
    </div>
  );
}

export default Table;
