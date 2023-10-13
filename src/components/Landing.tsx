import React from "react";
import Image from "next/image";
import imagen from "../../public/pexels-magda-ehlers-2547627.jpg";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-96 w-full bg-orange-50 rounded-3xl flex">
      <div className="w-1/2 flex justify-center items-center flex-col">
        <p className=" h-2/3 grid place-items-center text-black text-xl p-10">
          EcoRide: Conectando personas y la ciudad de forma sostenible,
          ofreciendo una forma ágil y ecológica de moverte por la urbe,
          contribuyendo así a un futuro más limpio y accesible.
        </p>
        <Link href={"/search"}>
          <button className="bg-black p-4 rounded-xl">Buscar mi EcoRide</button>
        </Link>
      </div>
      <div
        className="w-1/2 bg-green-500 rounded-tl-3xl rounded-bl-3xl overflow-hidden"
        id="imageContainer"
      >
        <Image
          src={imagen}
          width={800}
          height={300}
          alt="imagen de un mapa"
        ></Image>
      </div>
    </div>
  );
}
