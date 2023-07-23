import React from "react";
import Price from "./Price";

function Filter() {
  return (
    <div className="bg-[#F5F7FA] pt-20 h-full">
      <div className="flex justify-center">
        <div className="lg:w-[60%] w-[90%]">
          <div className="text-start">
            <h1 className="text-base text-[#242424] capitalize font-semibold">
              Categories
            </h1>
            <div className="pl-5 mt-10">
              <h1 className="pb-8 Font text-[#fbb710] text-base font-normal cursor-pointer">
                Chairs
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Beds
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Accesories
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Furniture
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Home Deco
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Dressings
              </h1>
              <h1 className="text-[#959595] pb-8 Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                Tables
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-base text-[#242424] capitalize font-semibold">
                Brands
              </h1>
              <div className="flex gap-5 mb-7 mt-8">
                <input type="checkbox" />
                <h1 className="text-[#959595] Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                  Almado
                </h1>
              </div>
              <div className="flex gap-5 mb-7">
                <input type="checkbox" />
                <h1 className="text-[#959595] Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                  Ikea
                </h1>
              </div>
              <div className="flex gap-5 mb-7">
                <input type="checkbox" />
                <h1 className="text-[#959595] Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                  Furniture Inc
                </h1>
              </div>
              <div className="flex gap-5 mb-7">
                <input type="checkbox" />
                <h1 className="text-[#959595] Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                  The factory
                </h1>
              </div>
              <div className="flex gap-5 mb-7">
                <input type="checkbox" />
                <h1 className="text-[#959595] Font hover:text-[#fbb710] text-base font-normal cursor-pointer">
                  Artdeco
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-base text-[#242424] capitalize font-semibold">
                Color
              </h1>
              <div className="flex gap-2 mt-10">
                <div className="rounded-full shadowShoopColor bg-white p-4"></div>
                <div className="rounded-full shadowShoopColor bg-gray-400 p-4"></div>
                <div className="rounded-full shadowShoopColor bg-black p-4"></div>
                <div className="rounded-full shadowShoopColor bg-blue-600 p-4"></div>
              </div>
              <div className="flex gap-2 mt-3">
                <div className="rounded-full shadowShoopColor bg-red-500 p-4"></div>
                <div className="rounded-full shadowShoopColor bg-yellow-300 p-4"></div>
                <div className="rounded-full shadowShoopColor bg-orange-500 p-4"></div>
                <div className="rounded-full shadowShoopColor bg-[#9a8777] p-4"></div>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-base text-[#242424] capitalize font-semibold mb-10">
                Price
              </h1>
              <Price />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
