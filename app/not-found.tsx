"use client";
import Image from "next/image";

export default function Balabinga() {
  return (
    <div className="bg-[#12050d] min-w-screen min-h-screen flex flex-col justify-center items-center font-roboto">
      <Image src={"/amogus.gif"} width={200} height={200} alt="amogus" />
      <h3 className="text-3xl font-semibold">I think you got lost buddy</h3>
    </div>
  );
}
