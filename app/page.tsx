"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { WaveBg } from "@/constants/backgrounds";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import { PizzaList } from "@/constants/pizzas";

import CurveText from "./components/curve-text";

export default function Home() {
  const [indexActive, setIndexActive] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(80);
  const [backRotate, setBackRotate] = useState<number>(-10);
  const imageRefs = useRef<any[]>([]);

  const handleNext = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === totalData) {
      setIndexActive(0);
    } else {
      setIndexActive((prev) => prev + 1);
    }

    changeImage();
  };

  const handlePrev = () => {
    const totalData = PizzaList.length - 1;

    if (indexActive === 0) {
      setIndexActive(totalData);
    } else {
      setIndexActive((prev) => prev - 1);
    }

    changeImage();
  };

  const changeImage = () => {
    setBackRotate(rotate - 15);
    setRotate((prev) => prev + 80);

    for (let i = 0; i < imageRefs.current.length; i++) {
      const el = imageRefs.current[i];

      if (i === indexActive) {
        setTimeout(() => {
          el.style.transitionDuration = "100ms";
          el.style.opacity = 1;
        }, 200);
      } else {
        setTimeout(() => {
          el.style.transitionDuration = "300ms";
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

  return (
    <main className="w-full overflow-hidden bg-black relative h-screen">
      <div className="absolute w-[65vw] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2">
        <CurveText
          text="Hawaiian"
          className="absolute left-0 -rotate-[42deg]"
        />
        <CurveText
          text="Pepperoni"
          className="absolute right-0 rotate-[42deg]"
        />
        <CurveText
          text="Margherita"
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[150px]"
        />
      </div>
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
            src={pizza}
            alt="pizza"
            width="0"
            height="0"
            className={`w-full aspect-[1/1] absolute duration-100 transition-all ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"}`}
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
