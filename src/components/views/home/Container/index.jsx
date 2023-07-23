import React from "react";
// import Cardd from "../Cardd";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/img/bg-img/1.jpg";
import img2 from "../../../../assets/img/bg-img/2.jpg";
import img3 from "../../../../assets/img/bg-img/3.jpg";
import img4 from "../../../../assets/img/bg-img/4.jpg";
import img5 from "../../../../assets/img/bg-img/5.jpg";
import img6 from "../../../../assets/img/bg-img/6.jpg";
import img7 from "../../../../assets/img/bg-img/7.jpg";
import img8 from "../../../../assets/img/bg-img/8.jpg";
import img9 from "../../../../assets/img/bg-img/9.jpg";
function Container() {
  const navigate = useNavigate();
  // const productsArr = useSelector((state) => state.productReducer.products);
  // const cardStyles = {
  //   0: "row-span-7",
  //   1: "row-span-10",
  //   2: "row-span-6",
  //   3: "row-span-7 col-start-1 row-start-8",
  //   4: "row-span-6 col-start-2 row-start-11",
  //   5: "row-span-7 col-start-3 row-start-7",
  //   6: "row-span-9 col-start-1 row-start-15",
  //   7: "row-span-6 col-start-2 row-start-18",
  //   8: "row-span-10 col-start-3 row-start-14",
  // };
  return (
    <div>
      {/* <div className="grid xl:grid-cols-3 grid-flow-row lg:grid-cols-2  grid-cols-1">
        {productsArr.map((item, idx) => {
          return (
            <div>
              <Cardd
                balandlik={item.balandlik}
                img={item.img}
                title={item.title}
                price={item.price}
                key={item.id}
                colSpan={cardStyles[idx]}
              />
            </div>
          );
        })}
      </div> */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1">
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[400px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img1})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[568px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img2})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[356px] xl:-mt-0 lg:-mt-[166px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img3})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[400px] xl:-mt-[168px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img5})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[356px] xl:-mt-0 lg:-mt-[210px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img6})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[356px] xl:-mt-[212px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img4})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[481px] lg:-mt-[210px] xl:-mt-[125px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img8})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[356px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img9})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={`bg-cover h-[568px] xl:-mt-[212px] lg:-mt-[85px] inline-block bg-center cardd bg-no-repeat w-full bg-[image:var(--image-url)]`}
          style={{
            "--image-url": `url(${img7})`,
          }}
        >
          <div className="w-full h-full OpacityBg p-10">
            <div className="cartBgColor">
              <div className="bg-[#fbb710] w-20 h-1 mb-2"></div>
              <p className="text-base text-[#6d6d6d] font-medium">From $180</p>
              <h1 className="text-[#242424] text-2xl font-semibold">
                Modern Chair
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;

{
  /* <div className="grid grid-cols-3 grid-rows-12 gap-1">
        <div className="row-span-7">1</div>
        <div className="row-span-10">2</div>
        <div className="row-span-6">3</div>
        <div className="row-span-7 col-start-1 row-start-8">4</div>
        <div className="row-span-7 col-start-2 row-start-11">5</div>
        <div className="row-span-7 col-start-3 row-start-7">6</div>
        <div className="row-span-9 col-start-1 row-start-15">7</div>
        <div className="row-span-6 col-start-2 row-start-18">8</div>
        <div className="row-span-10 col-start-3 row-start-14">9</div>
      </div> */
}

// {
//   0: "row-span-7",
//   1: "row-span-10",
//   2: "row-span-6",
//   3: "row-span-7 col-start-1 row-start-8",
//   4: "row-span-6 col-start-2 row-start-11",
//   5: "row-span-7 col-start-3 row-start-7",
//   6: "row-span-9 col-start-1 row-start-15",
//   7: "row-span-6 col-start-2 row-start-18",
//   8: "row-span-10 col-start-3 row-start-14",
// }
