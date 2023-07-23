import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import React, { useState } from "react";
import Carousels from "../../components/views/Product";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import img1 from "../../assets/img/product-img/pro-big-1.jpg";
import {
  addSubTotal,
  addCart,
  addTotalPrice,
} from "../../redux/actions/product";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [result, setResult] = useState(1);
  const handleMinus = () => {
    if (result > 1) {
      setResult(result - 1);
    }
  };
  const handlePlus = () => {
    setResult(result + 1);
  };

  const handle = (img) => {
    return img;
  };

  const newObj = {
    title: "MODERN CHAIR",
    price: 180,
    img: img1,
    count: result,
  };
  const handleNaviga = () => {
    console.log(newObj.img,'imggg')
    navigate("/table");
    dispatch(addCart(newObj));
    dispatch(addSubTotal(result));
    dispatch(addTotalPrice(newObj.price));
  };
  return (
    <div>
      <div className="flex xl:justify-start justify-center">
        <div className="w-[90%] mt-32">
          <h1 className="mb-5 text-sm font-medium">
            HOME {">"} FURNITURE {">"} CHAIRS {">"}{" "}
            <span className="text-gray-400"> WHITE MODERN CHAIR</span>
          </h1>
          <div className="flex lg:flex-row flex-col lg:gap-5">
            <div className="w-full lg:w-[60%] lg:mb-0 mb-10">
              <Carousels func={handle} />
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="text-start">
                <div className="w-20 h-[3px] bg-[#fbb710]"></div>
                <h1 className="text-[#fbb710] text-2xl mt-2 font-semibold">
                  $180
                </h1>
                <h1 className="mt-5 text-[#242424] font-semibold text-[30px]">
                  White Modern Chair
                </h1>
                <div className="flex justify-between mt-5">
                  <div className="gap-1 flex">
                    <AiTwotoneStar color="#fbb710" size={12} />
                    <AiTwotoneStar color="#fbb710" size={12} />
                    <AiTwotoneStar color="#fbb710" size={12} />
                    <AiTwotoneStar color="#fbb710" size={12} />
                    <AiTwotoneStar color="#fbb710" size={12} />
                  </div>
                  <p className="text-sm text-[#6b6b6b] font-medium">
                    Write A Review
                  </p>
                </div>
                <p className="text-[#6b6b6b] text-xs font-medium flex gap-1 mt-3 items-center">
                  <BsFillCircleFill color="#20d34a" /> In Stock
                </p>
                <p className="text-[#6b6b6b] text-base font-medium leading-7 mt-14">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid quae eveniet culpa officia quidem mollitia impedit
                  iste asperiores nisi reprehenderit consequatur, autem, nostrum
                  pariatur enim?
                </p>
                <div className="flex justify-between bg-[#F3F5F8] py-2 md:w-1/3">
                  <p className="text-[#6b6b6b] font-medium text-base pl-5">
                    Qty
                  </p>
                  <div className="flex justify-between gap-7">
                    <p className="text-[#6b6b6b] font-medium text-lg">
                      {result}
                    </p>
                    <div className="flex flex-col pr-2">
                      <button onClick={handlePlus}>
                        <AiFillCaretUp color="#6b6b6b" size={12} />
                      </button>
                      <button onClick={handleMinus}>
                        <AiFillCaretDown color="#6b6b6b" size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleNaviga()}
                  className="bg-[#fbb710] text-white text-xl py-6 mt-10 font-medium px-28 hover:bg-black transition-all"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
