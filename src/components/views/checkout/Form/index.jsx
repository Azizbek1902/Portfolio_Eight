import React from "react";
import Input from "../Input";

function Form() {
  return (
    <div>
      <div className="text-start">
        <div className="flex gap-5 flex-col md:flex-row w-full mb-5">
          <div className="w-full">
            <Input title="First Name" />
          </div>
          <div className="w-full">
            <Input title="Last Name" />
          </div>
        </div>
        <div className="mb-5">
          <Input title="Company Name" />
        </div>
        <div className="mb-5">
          <Input title="Email" />
        </div>
        <div className="mb-5">
          <select name="" id="" className="w-full px-5 outline-blue-300 font-medium text-[#6b6b6b] py-5 bg-[#F5F7FA]">
            <option value="">United States</option>
            <option value="">United Kingdom</option>
            <option value="">Germany</option>
            <option value="">France</option>
            <option value="">India</option>
            <option value="">Australia</option>
            <option value="">Brazil</option>
            <option value="">Canada</option>
          </select>
        </div>
        <div className="mb-5">
          <Input title="Address" />
        </div>
        <div className="mb-5">
          <Input title="Town" />
        </div>
        <div className="flex gap-5 flex-col md:flex-row w-full mb-5">
          <div className="w-full">
            <Input title="Zip Code" />
          </div>
          <div className="w-full">
            <Input title="Phone No" />
          </div>
        </div>
        <div className="mb-5">
          <textarea
            className="w-full py-5 pl-8 placeholder:text-[#6b6b6b] font-medium text-[#6b6b6b] bg-[#f5f7fa] outline-blue-300 rounded-none"
            rows="7"
            placeholder="Leave a commnet about your order"
          ></textarea>
        </div>
        <div className="text-start">
          <div className="mb-5 gap-2 flex items-center">
            <input type="checkbox" className="bg-[#f5f7fa]" />
            <p className="text-[#6b6b6b] font-medium text-sm">
              Create an account
            </p>
          </div>
          <div className="gap-2 flex items-center">
            <input type="checkbox" className="bg-[#f5f7fa]" />
            <p className="text-[#6b6b6b] font-medium text-sm">
              Ship to a different address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
