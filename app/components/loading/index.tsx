'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Pizza5 } from '@/constants/pizzas';

const Loading = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  });
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0  w-full bg-white z-50 duration-500 ease-in-out transition-all delay-300 ${isActive ? 'h-[51vh] opacity-100' : 'h-0 opacity-0'}`}
      ></div>
      <div
        className={`absolute z-[99] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out transition-all ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={Pizza5}
          alt="loading"
          height="0"
          width="0"
          className={`w-[100px] h-auto object-contain animate-spin-slow`}
          priority
        />
        <p className="text-center mt-3 font-instrument font-semibold text-xl">
          Loading...
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0  w-full bg-white z-50 duration-500 ease-in-out transition-all delay-300 ${isActive ? 'h-[50vh] opacity-100' : 'h-0 opacity-0'}`}
      ></div>
    </>
  );
};

export default Loading;
