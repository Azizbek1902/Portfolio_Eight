import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/img/product-img/pro-big-1.jpg";
import img2 from "../../../assets/img/product-img/pro-big-2.jpg";
import img3 from "../../../assets/img/product-img/pro-big-3.jpg";
import img4 from "../../../assets/img/product-img/pro-big-4.jpg";

function Carousels({ func }) {
  const images = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];

  return (
    <div>
      <Carousel>
        {images.map((item) => (
          <div className="slide" key={item.id}>
            <img
              alt="sample_file"
              src={item.img}
              onChange={() => {
                func(item.img);
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
