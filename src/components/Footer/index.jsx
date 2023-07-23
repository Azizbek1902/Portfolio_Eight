import React from "react";
import img from "../../assets/img/core-img/logo2.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#3c3c3c] flex justify-center">
        <div className="xl:w-[80%] w-[90%]">
          <div className="py-24 flex lg:flex-row flex-col items-center gap-10">
            <div className="text-start">
              <h1 className="text-white text-[36px]">
                Subscribe for a{" "}
                <span className="text-[#fbb710]">25% Discount</span>
              </h1>
              <p className="text-base font-semibold text-[#b3b1b1] leading-7 mt-4">
                Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
                amet mi vulputate consectetur. Donec auctor interdum purus, ac
                finibus massa bibendum nec.
              </p>
            </div>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white py-4 px-10 placeholder:italic placeholder:text-[#3c3c3c] placeholder:font-medium w-full"
              />
              <button className="py-4 px-10 text-white bg-[#fbb710]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#252525] justify-center py-20">
        <div className="xl:w-[80%] w-[90%]">
          <div className="flex lg:flex-row flex-col md:items-center items-start">
            <div className="text-start lg:mb-0 mb-10">
              <img src={img} alt="" />
              <p className="text-[#7C7C7C] font-bold mt-5 leading-6 xl:w-[55%] w-[65%] text-xs">
                Copyright ©2023 All rights reserved | This template is made with
                🖤 by Colorlib & Re-distributed by Themewagon
              </p>
            </div>
            <div className="flex justify-start md:flex-row flex-col">
              <NavLink className="text-[#fbb710] text-sm font-medium">
                HOME
              </NavLink>
              <NavLink className="hover:text-[#fbb710] md:pl-16 pl-0 pt-5 md:pt-0 text-sm font-medium text-white">
                SHOP
              </NavLink>
              <NavLink className="hover:text-[#fbb710] md:pl-16 pl-0 pt-5 md:pt-0 text-sm font-medium text-white">
                PRODUCT
              </NavLink>
              <NavLink className="hover:text-[#fbb710] md:pl-16 pl-0 pt-5 md:pt-0 text-sm font-medium text-white">
                CART
              </NavLink>
              <NavLink className="hover:text-[#fbb710] md:pl-16 pl-0 pt-5 md:pt-0 text-sm font-medium text-white">
                CHECKOUT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
