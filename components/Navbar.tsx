import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <h2>WALL-E</h2>
        {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
      </Link>

      <Link
        href="/generate"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Navbar;
