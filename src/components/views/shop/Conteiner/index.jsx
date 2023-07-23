import { FaBars } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import React from "react";
import Dropdawn from "./Dropdown";
import Card from "../Card";
// import data from "./Data";
import { useSelector } from "react-redux";

function Conteiner() {
  const productsArr = useSelector((state) => state.productReducer.products);
  return (
    <div className="flex xl:justify-start justify-center">
      <div className="w-[90%]">
        <div className="mt-20">
          <h1 className="text-[#242424] text-sm font-semibold Font mb-5">
            SHOWING 1-8 0F 25
          </h1>
          <div className="flex lg:flex-row flex-col justify-between mb-8">
            <div className="flex mb-10 lg:mb-0">
              <div className="bg-[#fbb710] p-2">
                <FaThLarge size={20} color="white" />
              </div>
              <div className="bg-[#131212] p-2">
                <FaBars size={20} color="white" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row lg:flex-row gap-3">
              <div className="flex">
                <span className="bg-[#f5f7fa] py-2 pl-4 text-[#959595] text-sm font-normal Font">
                  Sort by
                </span>
                <Dropdawn activeC={true} />
              </div>
              <div className="flex">
                <span className="bg-[#f5f7fa] py-2 pl-4 text-[#959595] text-sm font-normal Font">
                  View
                </span>
                <Dropdawn />
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-5 gap-x-4">
            {productsArr.map(
              (elem) =>
                elem.shopHoverImg && (
                  <Card
                    key={elem.id}
                    img={elem.shopImg}
                    imgHover={elem.shopHoverImg}
                    price={elem.price}
                    title={elem.title}
                    demo={elem}
                  />
                )
            )}
          </div>
          <div className="my-20 flex justify-end">
            <div className="text-white py-2 px-3 transition-all text-base font-medium  cursor-pointer bg-[#fbb710]">
              01.
            </div>
            <div className="text-black py-2 px-3 text-base font-medium cursor-pointer hover:text-white bg-white transition-all hover:bg-[#fbb710]">
              02.
            </div>
            <div className="text-black py-2 px-3 text-base font-medium cursor-pointer hover:text-white bg-white transition-all hover:bg-[#fbb710]">
              03.
            </div>
            <div className="text-black py-2 px-3 text-base font-medium cursor-pointer hover:text-white bg-white transition-all hover:bg-[#fbb710]">
              04.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conteiner;
