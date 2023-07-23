import React from "react";

function Input({ title }) {
  return (
    <div>
      <input
        type="text"
        className="w-full py-5 pl-8 placeholder:text-[#6b6b6b] font-medium text-[#6b6b6b] bg-[#f5f7fa] outline-blue-300 rounded-none"
        placeholder={title}
      />
    </div>
  );
}

export default Input;
