import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee className="space-x-10s" pauseOnHover={true} speed={100}>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus nemo sed itaque corporis ipsam quibusdam porro vero
          voluptatum pariatur! Dicta inventore eius voluptatum nisi saepe natus
          non totam recusandae.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus nemo sed itaque corporis ipsam quibusdam porro vero
          voluptatum pariatur! Dicta inventore eius voluptatum nisi saepe natus
          non totam recusandae.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus nemo sed itaque corporis ipsam quibusdam porro vero
          voluptatum pariatur! Dicta inventore eius voluptatum nisi saepe natus
          non totam recusandae.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
