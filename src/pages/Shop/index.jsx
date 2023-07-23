import React from "react";
import Filter from "../../components/views/shop/Filter";
import Container from "../../components/views/shop/Conteiner";

function Shop() {
  return (
    <div>
      <div className="flex justify-center md:flex-row flex-col-reverse lg:gap-3 gap-0 w-full">
        <div className="xl:w-[20%] lg:w-[30%] md:w-[35%] w-full">
          <Filter />
        </div>
        <div className="xl:w-[80%] lg:w-[70%] md:w-[65%] w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Shop;
