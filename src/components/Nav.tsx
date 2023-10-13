import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between h-14 items-center px-9 bg-red-300">
      <Logo></Logo>
      <menu>
        <Link href="/ecoRiderPoint">
          <button className="bg-green-500 px-4 py-2 rounded-xl mx-2">
            Quiero ser un EcoRiderPoint
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-green-500 px-4 py-2 rounded-xl mx-2">
            Ingresa
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="bg-yellow-500 px-4 py-2 rounded-xl mx-2">
            Registrate
          </button>
        </Link>
      </menu>
    </div>
  );
}
