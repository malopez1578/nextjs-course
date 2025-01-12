"use client";

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const NavItems = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/pricing", label: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded w-full gap-3">
       
        <Link href="/" className="text-white hover:text-blue-200 mr-auto">
          <span className="flex gap-2 items-center">
            <HomeIcon size={16} /> 
            Home
          </span>
        </Link>
        {
          NavItems.map(({ path, label }) => (
            <Link key={path} href={path} className="text-white hover:text-blue-200">
              {label}
            </Link>
          ))
        }
       
    </nav>
  )
}
