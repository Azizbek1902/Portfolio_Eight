import React from "react";
import { useNavigate } from "react-router-dom";

function Cardd({ balandlik, img, title, price, colSpan }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate("/shop");
        }}
        className={`bg-cover ${colSpan} inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
        style={{
          "--image-url": `url(${img})`,
          height: balandlik,
        }}
      >
        <div className="w-full h-full OpacityBg p-10">
          <div className="cartBgColor">
            <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
            <p className="text-base text-[#6d6d6d] font-medium">
              From ${price}
            </p>
            <h1 className="text-[#242424] text-2xl font-semibold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardd;
