"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { Article } from "@/app/api/data";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Articles = () => {
  return (
    <section className="overflow-hidden bg-joinus">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative">
        <div className="text-center">
          <h3 className="text-blue text-22 font-normal tracking-widest">
            ACTUALITÉS
          </h3>
          <h3 className="text-65 sm:text-6xl font-bold">Nos derniers articles.</h3>
        </div>

        <Slider {...settings}>
          {Article.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                <Image
                  src={items.imgSrc}
                  alt="article-image"
                  width={389}
                  height={262}
                  className="inline-block m-auto"
                />
                <Link href="/" className="absolute bg-primary text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-11">
                  {items.time} min
                </Link>
                <h4 className="text-2xl font-bold pt-6 text-black">
                  {items.heading}
                </h4>
                <h4 className="text-2xl font-bold pt-1 text-black">
                  {items.heading2}
                </h4>
                <div>
                  <h3 className="text-16 font-normal pt-6 pb-2 opacity-75 text-black">
                    {items.name}
                  </h3>
                  <h3 className="text-16 font-normal pb-1 opacity-75 text-black">
                    {items.date}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Articles;