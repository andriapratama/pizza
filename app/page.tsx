import { WaveBg } from '@/constants/backgrounds';
import { Pizza1 } from '@/constants/pizzas';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-black relative h-screen">
      <div className="absolute w-[60%] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[55%] border-2 border-white rounded-full left-1/2 bottom-0 aspect-[1/1] translate-y-1/2 -translate-x-1/2"></div>
      <Image
        src={WaveBg}
        alt="wave bg"
        width="0"
        height="0"
        className="object-contain w-full h-auto absolute -bottom-[100px] left-0"
      />
      <Image
        src={Pizza1}
        alt="pizza"
        width="0"
        height="0"
        className="w-1/2 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 aspect-[1/1] absolute"
      />
    </main>
  );
}
