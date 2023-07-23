import { FaWindowClose } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import img from "../../assets/img/core-img/logo.png";
import img1 from "../../assets/img/core-img/cart.png";
import img2 from "../../assets/img/core-img/favorites.png";
import img3 from "../../assets/img/core-img/search.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(true);
  const handleClik = () => {
    setActive(!active);
  };
  const [top, setTop] = useState(true);
  // const navigate = useNavigate();
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);
  return (
    <div className="navbarScroll">
      <div className="md:block hidden  relative">
        <div className="flex justify-center mt-10 mb-28">
          <img src={img} alt="" />
        </div>
        <div className="flex justify-center">
          <ul className="block lg:w-[50%] md:w-[90%]">
            <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
              <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
              <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
            <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
              <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
              <NavLink to={"/product"}>PRODUCT</NavLink>
            </li>
            <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
              <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
              <NavLink to={"/table"}>CART</NavLink>
            </li>
            <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
              <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
              <NavLink to={"/contact"}>CHECKOUT</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-10">
          <div className="text-start">
            <button className="mb-3 py-4 transition-all font-semibold px-7 hover:bg-[#131212] bg-[#fbb710] text-white text-lg">
              %Discount%
            </button>{" "}
            <br />
            <button className="py-4 font-semibold px-5 bg-[#131212] text-white text-lg">
              New this week
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <div className="text-start mr-12">
            <div className="flex gap-4 mb-5">
              <img src={img1} alt="" />
              <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                CART (0)
              </h1>
            </div>
            <div className="flex gap-4 mb-5">
              <img src={img2} alt="" />
              <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                FAVOURITE
              </h1>
            </div>
            <div className="flex gap-4 mb-5">
              <img src={img3} alt="" />
              <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                SEARCH
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <div className="flex lg:gap-8 md:gap-4">
            <BsPinterest
              className="text-[#b5b5b5] hover:text-[#fbb710]"
              size={20}
            />
            <AiOutlineInstagram
              className="text-[#b5b5b5] hover:text-[#fbb710]"
              size={20}
            />
            <CgFacebook
              className="text-[#b5b5b5] hover:text-[#fbb710]"
              size={20}
            />
            <AiOutlineTwitter
              className="text-[#b5b5b5] hover:text-[#fbb710]"
              size={20}
            />
          </div>
        </div>
      </div>
      <div
        className={`md:hidden flex justify-center shadoW 
        ${
          {
            /*  ${top ? "" : "fixed z-50"} */
          }
        }
         bg-white w-full`}
      >
        <div className="w-[90%]">
          <div className="flex items-center justify-between my-5">
            <img src={img} className="h-[6vh]" alt="" />
            <button
              className={`cursor-pointer ${active ? "transs" : ""}`}
              onClick={handleClik}
            >
              <FiMenu color="#fbb710" size={30} />
            </button>
          </div>
          <div
            className={`absolute top-0 overflow-hidden z-50 bg-white transs left-0 ${
              active ? "w-0" : "w-80"
            }`}
          >
            <div className="absolute top-0 right-0">
              <button
                className={`cursor-pointer ${active ? "" : "transs"}`}
                onClick={handleClik}
              >
                <FaWindowClose color="#fbb710" size={34} />
              </button>
            </div>
            <div className="flex justify-center mt-20 mb-20">
              <img src={img} alt="" />
            </div>
            <div className="flex justify-center">
              <ul className="block lg:w-[50%] md:w-[90%]">
                <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
                  <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
                  <NavLink to={"/"}>HOME</NavLink>
                </li>
                <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
                  <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
                  <NavLink to={"/shop"}>SHOP</NavLink>
                </li>
                <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
                  <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
                  <NavLink to={"/product"}>PRODUCT</NavLink>
                </li>
                <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
                  <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
                  <NavLink to={"/table"}>CART</NavLink>
                </li>
                <li className="pb-7 navbarUL cursor-pointer flex items-end font-medium">
                  <div className="bg-yellow-400 h-1 w-10 absolute left-[-40px] navbarLi active:left-0"></div>
                  <NavLink to={"/contact"}>CHECKOUT</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <div className="text-start">
                <button className="mb-3 py-4 transition-all font-semibold px-7 hover:bg-[#131212] bg-[#fbb710] text-white text-lg">
                  %Discount%
                </button>{" "}
                <br />
                <button className="py-4 font-semibold px-5 bg-[#131212] text-white text-lg">
                  New this week
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-24">
              <div className="text-start mr-12">
                <div className="flex gap-4 mb-5">
                  <img src={img1} alt="" />
                  <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                    CART (0)
                  </h1>
                </div>
                <div className="flex gap-4 mb-5">
                  <img src={img2} alt="" />
                  <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                    FAVOURITE
                  </h1>
                </div>
                <div className="flex gap-4 mb-5">
                  <img src={img3} alt="" />
                  <h1 className="text-[#131212] text-base hover:text-[#fbb710] font-medium cursor-pointer transition-all">
                    SEARCH
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 mb-10">
              <div className="flex lg:gap-8 md:gap-4 gap-5">
                <BsPinterest
                  className="text-[#b5b5b5] hover:text-[#fbb710]"
                  size={20}
                />
                <AiOutlineInstagram
                  className="text-[#b5b5b5] hover:text-[#fbb710]"
                  size={20}
                />
                <CgFacebook
                  className="text-[#b5b5b5] hover:text-[#fbb710]"
                  size={20}
                />
                <AiOutlineTwitter
                  className="text-[#b5b5b5] hover:text-[#fbb710]"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
