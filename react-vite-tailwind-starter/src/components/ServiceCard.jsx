import React from 'react';

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-[20px] px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>

      <h3 className="mt-5 text-2xl font-palanquin font-bold">{label}</h3>
      <p className="mt-3 text-slate-gray font-montserrat leading-7">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
