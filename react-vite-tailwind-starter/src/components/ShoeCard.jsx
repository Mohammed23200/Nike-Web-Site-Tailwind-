import React from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  const isActive = bigShoeImage === imgURL.bigShoe;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
        ${isActive ? 'border-[#FF8559]' : 'border-transparent'}
      `}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover w-24 h-24 sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </button>
  );
};

export default ShoeCard;
