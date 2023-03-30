import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="logo"
          className="w-28 object-contain"
          width={100}
          height={100}
        />
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
