import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState } from "react";

function NavLink(props: { to: string; children: any }) {
  return <a href={props.to}>{props.children}</a>;
}

function MobileNav(props: { open: any; setOpen: any }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        props.open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              props.setOpen(!props.open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              props.setOpen(!props.open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

const Navbar: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-transparent px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}0
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
