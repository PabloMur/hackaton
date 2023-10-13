import React from "react";
import Image from "next/image";
import imagen from "../../../public/scooter-left-svgrepo-com.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-end gap-1">
        <Image src={imagen} alt="monopatin" height={24} width={24}></Image>
        <h3 className="text-white font-sans text-2xl">EcoRider</h3>
      </div>
    </Link>
  );
}
