// src/sections/Hero.jsx
import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Left copy */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 max-xl:px-8 pt-28">
        <p className="text-xl font-montserrat text-[#FF6452]">Our Summer Collections</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[84px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-[#FF6452] inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: big image + thumbnails */}
      <div
        className="
          relative flex-1 flex items-center
          xl:min-h-screen max-xl:py-40
          bg-card bg-cover bg-center
          xl:justify-end
          pr-24 sm:pr-32 xl:pr-40
        "
      >
        <img
          src={bigShoeImage}
          alt="shoes collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        {/* Thumbnails column */}
        <div
          className="
            flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6

          "
        >
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.thumbnail}
              imgURL={shoe}
              changeBigShoeImage={setBigShoeImage}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
