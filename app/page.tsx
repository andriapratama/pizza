'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import { WaveBg } from '@/constants/backgrounds';
import { ChevronLeft, ChevronRight } from '@/constants/icons';
import { PizzaList } from '@/constants/pizzas';

import CurveText from './components/curve-text';

export default function Home() {
  const [indexActive, setIndexActive] = useState<number>(1);
  const [indexTitle, setIndexTitle] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(80);
  const [backRotate, setBackRotate] = useState<number>(-10);
  const imageRefs = useRef<any[]>([]);
  const titleRefs = useRef<any[]>([]);
  const dotRotatePosition: string[] = [
    '-rotate-[70deg]',
    '-rotate-[38deg]',
    '-rotate-[2deg]',
    'rotate-[35.5deg]',
    'rotate-[72deg]',
  ];
  const handleNext = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === totalData) {
      setIndexActive(0);
    } else {
      setIndexActive(indexActive + 1);
    }

    if (indexTitle === totalData) {
      setIndexTitle(0);
    } else {
      setIndexTitle(indexTitle + 1);
    }

    changeImage();
    changeTitle();
  };

  const handlePrev = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === 0) {
      setIndexActive(totalData);
    } else {
      setIndexActive(indexActive - 1);
    }

    if (indexTitle === 0) {
      setIndexTitle(totalData);
    } else {
      setIndexTitle(indexTitle - 1);
    }

    changeImage();
    changeTitle();
  };

  const changeImage = () => {
    setBackRotate(rotate - 15);
    setRotate((prev) => prev + 80);

    for (let i = 0; i < imageRefs.current.length; i++) {
      const el = imageRefs.current[i];

      if (i === indexActive) {
        setTimeout(() => {
          el.style.transitionDuration = '100ms';
          el.style.opacity = 1;
        }, 200);
      } else {
        setTimeout(() => {
          el.style.transitionDuration = '300ms';
          el.style.opacity = 0;
        }, 200);
      }

      el.style.transform = `rotate(${backRotate}deg)`;

      setTimeout(() => {
        el.style.transform = `rotate(${rotate}deg)`;
      }, 150);

      setTimeout(() => {
        el.style.transform = `rotate(${rotate - 5}deg)`;
      }, 450);
    }
  };

  const changeTitle = () => {
    const totalData = titleRefs.current.length;

    for (let i = 0; i < totalData; i++) {
      const el = titleRefs.current[i];

      if (i === indexActive) {
        setTimeout(() => {
          el.style.transitionDuration = '100ms';
          el.style.opacity = 1;
        }, 200);
      } else {
        setTimeout(() => {
          el.style.transitionDuration = '300ms';
          el.style.opacity = 0;
        }, 200);
      }
    }
  };

  return (
    <main className="w-full overflow-hidden bg-black relative h-screen">
      <div className="w-full flex justify-center py-[100px] relative">
        {PizzaList.map((pizza, index) => (
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
            key={index}
            ref={(e: any) => (titleRefs.current[index] = e)}
          >
            <h1 className="text-white text-[40px] w-full text-center font-instrument">
              {pizza.name}
            </h1>
            <p className="text-white w-full text-center font-instrument text-[22px] leading-[25px]">
              {pizza.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute w-[65vw] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2">
        <CurveText
          isActive={indexTitle === 0 ? true : false}
          text="Vegetarian"
          className="absolute left-0 -rotate-[70deg] -translate-x-[165px] translate-y-[300px]"
        />
        <CurveText
          isActive={indexTitle === 1 ? true : false}
          text="Hawaiian"
          className="absolute left-0 -rotate-[38deg] translate-x-[61px]"
        />

        <CurveText
          isActive={indexTitle === 2 ? true : false}
          text="Margherita"
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[137px]"
        />
        <CurveText
          isActive={indexTitle === 3 ? true : false}
          text="Pepperoni"
          className="absolute right-0 rotate-[36deg] -translate-x-[61px]"
        />
        <CurveText
          isActive={indexTitle === 4 ? true : false}
          text="Seefood"
          className="absolute right-0 rotate-[72deg] translate-x-[182px] translate-y-[350px]"
        />
      </div>
      <div
        className={`absolute w-[65vw] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] duration-500 ease-in-out transition-all translate-y-1/2 -translate-x-1/2 after:w-6 after:h-6 after:rounded-full after:bg-white after:absolute after:top-0 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 ${dotRotatePosition[indexTitle]}`}
      ></div>
      <div className="absolute w-[60vw] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2"></div>
      <Image
        src={WaveBg}
        alt="wave bg"
        width="0"
        height="0"
        className="object-contain w-full h-auto absolute -bottom-[100px] left-0"
      />

      <div className="w-[55vw] h-[55vw] left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 absolute rounded-full">
        {PizzaList.map((pizza, index) => (
          <Image
            key={index}
            src={pizza.image}
            alt={`${pizza.name} Pizza`}
            width="0"
            height="0"
            className={`w-full aspect-[1/1] absolute duration-100 transition-all ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
            ref={(e: any) => (imageRefs.current[index] = e)}
            priority
          />
        ))}
      </div>
      <Image
        src={ChevronLeft}
        alt="chevront-left"
        height="0"
        width="0"
        className="w-10 h-auto object-contain absolute left-[100px] bottom-[200px] cursor-pointer"
        onClick={() => handlePrev()}
      />
      <Image
        src={ChevronRight}
        alt="chevront-left"
        height="0"
        width="0"
        className="w-10 h-auto object-contain absolute right-[100px] cursor-pointer bottom-[200px]"
        onClick={() => handleNext()}
      />
    </main>
  );
}
