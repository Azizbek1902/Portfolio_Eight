import React from "react";
import Form from "../../components/views/checkout/Form";
import Total from "../../components/views/checkout/Total";

function Checkout() {
  return (
    <div>
      <div className="flex justify-center lg:justify-start mb-10">
        <div className="md:w-[93%] w-[95%]">
          <div className="mt-32">
            <h1 className="mb-8 text-[#242424] text-[30px] font-semibold Font">
              Checkout
            </h1>
            <div className="flex flex-col lg:flex-row md:gap-5 gap-y-4">
              <div className="w-full lg:w-[70%] mb-10 lg:mb-0">
                <Form />
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

export default Checkout;
