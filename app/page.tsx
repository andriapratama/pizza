'use client';

import { WaveBg } from '@/constants/backgrounds';
import { ChevronLeft, ChevronRight } from '@/constants/icons';
import { Pizza1, PizzaList } from '@/constants/pizzas';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Home() {
  const [indexActive, setIndexActive] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);
  const imageRefs = useRef<any[]>([]);

  const handleNext = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === totalData) {
      setIndexActive(0);
    } else {
      setIndexActive((prev) => prev + 1);
    }

    setRotate((prev) => prev + 90);

    changeImage();
  };

  const handlePrev = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === 0) {
      setIndexActive(totalData);
    } else {
      setIndexActive((prev) => prev - 1);
    }

    setRotate((prev) => prev + 90);

    changeImage();
  };

  const changeImage = () => {
    for (let i = 0; i < imageRefs.current.length; i++) {
      const el = imageRefs.current[i];

      if (i === indexActive) {
        el.style.opacity = 1;
      } else {
        el.style.opacity = 0;
      }

      el.style.transform = `rotate(${rotate}deg)`;
    }
  };

  return (
    <main className="w-full overflow-hidden bg-black relative h-screen">
      <svg>
        <path
          id="curve"
          fill="#ffffff"
          d="M 0 120 C 0 120, 130 40, 260 120"
        ></path>
        <text fill="#ffffff" className="text-2xl" textAnchor="middle">
          <textPath startOffset="50%" href="#curve">
            Pizza Mozarino
          </textPath>
        </text>
      </svg>

      <text className="text-white">test</text>
      <div className="absolute w-[60%] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[55%] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2"></div>
      <Image
        src={WaveBg}
        alt="wave bg"
        width="0"
        height="0"
        className="object-contain w-full h-auto absolute -bottom-[100px] left-0"
      />

      <div className="w-[50vw] h-[50vw] left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 absolute rounded-full after:w-[49vw] after:h-[49vw] after:rounded-full after:bg-yellow-500 after:absolute after:z-10 after:left-1/2 after:-translate-x-1/2 after:bottom-0">
        {PizzaList.map((pizza, index) => (
          <Image
            key={index}
            src={pizza}
            alt="pizza"
            width="0"
            height="0"
            className="w-full aspect-[1/1] absolute duration-300 ease-linear z-20"
            ref={(e: any) => (imageRefs.current[index] = e)}
          />
        ))}
      </div>
      <Image
        src={ChevronLeft}
        alt="chevront-left"
        height="0"
        width="0"
        className="w-10 h-auto object-contain absolute left-[200px] bottom-[200px] cursor-pointer"
        onClick={() => handlePrev()}
      />
      <Image
        src={ChevronRight}
        alt="chevront-left"
        height="0"
        width="0"
        className="w-10 h-auto object-contain absolute right-[200px] cursor-pointer bottom-[200px]"
        onClick={() => handleNext()}
      />
    </main>
  );
}
