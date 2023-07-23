import React from "react";
import Total from "../../components/views/cart/Total";
import { useSelector } from "react-redux";
import Table from "../../components/views/cart/Table";

function Cart() {
  const cartArr = useSelector((state) => state.productReducer.cart);

  return (
    <div>
      <div className="flex xl:justify-start justify-center">
        <div className="md:w-[93%] w-[95%]">
          <div className="mt-32">
            <h1 className="mb-8 text-[#242424] text-[30px] font-semibold Font">
              Shopping Cart
            </h1>
            <div className="flex flex-col lg:flex-row md:gap-5 gap-y-4">
              <div className="w-full lg:w-[70%] mb-10 lg:mb-0">
                <table className="w-full">
                  <thead className="mb-3 grid grid-cols-4  md:px-5 bg-[#f5f7fa]">
                    <th className="py-2 text-start text-sm font-medium"></th>
                    <th className="py-2 text-start text-sm font-medium">
                      Name
                    </th>
                    <th className="py-2 text-start text-sm font-medium">
                      Price
                    </th>
                    <th className="py-2 text-start text-sm font-medium">
                      Quantity
                    </th>
                  </thead>
                  {cartArr.map((elem, index) => (
                    <Table
                      img={elem.shopImg}
                      title={elem.title}
                      quantity={elem?.quantity}
                      price={elem.price}
                      key={index}
                      cartId={elem.id}
                    />
                  ))}
                </table>
              </div>
              <div className="w-full lg:w-[30%]">
                <Total />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
