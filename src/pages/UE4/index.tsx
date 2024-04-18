'use client';
import Image from 'next/image';
import bg from '../../assets/image/bg.png';
export default function UE4() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
      <Image src={bg} alt="meeting" className="w-[100vw] h-[135rem] align-bottom"/>
    </div>
  );
}
