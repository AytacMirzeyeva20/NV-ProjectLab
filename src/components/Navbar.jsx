import React, { useState } from 'react'
import { GiBookCover } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
export default function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <>
  <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
  <div className="flex items-center gap-2">
    <GiBookCover className="text-2xl text-purple-950" />
    <a href="#" className="text-xl font-bold text-purple-950 tracking-tight">
      StudyPlan
    </a>
  </div>
  <ul className="hidden md:flex items-center gap-10">
    <li>
      <Link to="/" className="relative py-2 text-black font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 
 after:w-0 after:bg-purple-700 after:transition-all after:duration-300  hover:after:w-full"   >Home</Link>
    </li>

    <li>
      <Link to="/sidebar" className="relative py-2 text-black font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 
 after:w-0 after:bg-purple-700 after:transition-all after:duration-300  hover:after:w-full"  >My Decisions</Link>
    </li>

    <li>
      <a href="#" className="relative py-2 text-black font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 
 after:w-0 after:bg-purple-700 after:transition-all after:duration-300  hover:after:w-full"  >Library</a>
    </li>

    <li>
      <a href="#" className="relative py-2 text-black font-medium after:absolute after:left-0 after:bottom-0 after:h-0.5 
 after:w-0 after:bg-purple-700 after:transition-all after:duration-300  hover:after:w-full"  >About</a>
    </li>
  </ul>

  <div className="hidden sm:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
    <IoSearch className="text-xl text-gray-600" />
    <input
      type="search"
      placeholder="Search..."
      className="w-28 outline-none text-sm text-black"/>
  </div>

  <IoMenu className="text-2xl cursor-pointer md:hidden"
    onClick={() => setMenuOpen(!menuOpen)}/>
</nav>
{menuOpen && (
  <div className="md:hidden border-b border-gray-200 bg-white px-6 py-4">
    <ul className="flex flex-col gap-5">
      <li>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/sidebar" onClick={() => setMenuOpen(false)}>
          My Decisions
        </Link>
      </li>

      <li>
        <a href="#">Library</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </div>
)}
    </>
  )
}
