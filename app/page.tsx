'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import { Lime, Mint, Mints, Tomato, WaveBg } from '@/constants/backgrounds';
import { ChevronLeft, ChevronRight } from '@/constants/icons';
import { PizzaList } from '@/constants/pizzas';

import CurveText from './components/curve-text';
import Loading from './components/loading';

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

  const bg1: string[] = [
    '-top-10 -left-10 rotate-[120deg]',
    '-top-5 -left-5 rotate-[45deg]',
    'top-0 left-0 -rotate-[30deg]',
    '-top-3 -left-3 rotate-[40deg]',
    '-top-7 -left-7 rotate-[90deg]',
  ];

  const bg2: string[] = [
    'top-[250px] left-[250px] rotate-[180deg]',
    'top-[260px] left-[260px] rotate-[250deg]',
    'top-[280px] left-[280px] rotate-[320deg]',
    'top-[270px] left-[270px] rotate-[380deg]',
    'top-[260px] left-[260px] rotate-[270deg]',
  ];

  const bg3: string[] = [
    'top-[500px] -left-[20px] rotate-[45deg]',
    'top-[510px] -left-[10px] rotate-[90deg]',
    'top-[515px] -left-[25px] rotate-[135deg]',
    'top-[520px] -left-[30px] rotate-[170deg]',
    'top-[512px] -left-[20px] rotate-[100deg]',
  ];

  const bg4: string[] = [
    'top-0 -right-10',
    'top-2 -right-12 rotate-[45deg]',
    'top-4 -right-14 rotate-[75deg]',
    'top-8 -right-20 rotate-[105deg]',
    'top-5 -right-16 rotate-[55deg]',
  ];

  const bg5: string[] = [
    'top-[210px] right-[300px] rotate-[45deg]',
    'top-[220px] right-[310px] rotate-[95deg]',
    'top-[230px] right-[320px] rotate-[145deg]',
    'top-[215px] right-[310px] rotate-[185deg]',
    'top-[225px] right-[315px] rotate-[95deg]',
  ];

  const bg6: string[] = [
    'top-[400px] right-[50px] -rotate-[40deg]',
    'top-[420px] right-[70px] -rotate-[100deg]',
    'top-[405px] right-[55px] -rotate-[30deg]',
    'top-[430px] right-[80px] -rotate-[120deg]',
    'top-[410px] right-[60px] -rotate-[70deg]',
  ];

  return (
    <main className="w-full overflow-hidden bg-black relative -rig h-screen">
      <Loading />

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

      <Image
        src={Mint}
        alt="mint"
        width="0"
        height="0"
        className={`w-[200px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg1[indexTitle]}`}
      />

      <Image
        src={Lime}
        alt="lime"
        width="0"
        height="0"
        className={`w-[100px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg2[indexTitle]}`}
      />

      <Image
        src={Tomato}
        alt="tomato"
        width="0"
        height="0"
        className={`w-[80px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg3[indexTitle]}`}
      />

      <Image
        src={Mints}
        alt="mints"
        width="0"
        height="0"
        className={`w-[200px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg4[indexTitle]}`}
      />

      <Image
        src={Tomato}
        alt="tomato"
        width="0"
        height="0"
        className={`w-[50px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg5[indexTitle]}`}
      />

      <Image
        src={Mint}
        alt="mints"
        width="0"
        height="0"
        className={`w-[100px] h-auto object-contain absolute duration-300 ease-in-out transition-all ${bg6[indexTitle]}`}
      />
    </main>
  );
}
