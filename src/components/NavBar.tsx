import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.jpg";
import s from "../styles/transition.module.css";

interface Props {
  Y: number;
}

function NavBar({ Y }: Props) {
  return (
    <header
      className={`p-4 transition-all ${
        Y < 50 ? "bg-transparent" : "bg-sky-800"
      } duration-500  fixed top-0 z-10 w-screen dark:bg-gray-800 dark:text-gray-100`}
    >
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <img
            src={logo}
            alt=""
            className="w-24 h-24 m-4 mr-12 border-solid border-slate-900 border-4 rounded-full"
          />
          <ul className="items-stretch text-lg font-bold text-slate-100 hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex hover:text-slate-900 items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Servicios
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                FAQ
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`items-center ${
            Y < 50 ? "invisible" : ""
          } border-solid border-sky-600 border-2 transition-all hover:bg-sky-600 duration-200 delay-none hover:border-solid hover:border-sky-900 hover:border-2  flex-shrink-0 hidden lg:flex`}
        >
          <button
            className={`px-8 py-3  text-slate-100 font-extrabold  text-xl rounded dark:bg-violet-400 dark:text-gray-900`}
          >
            Contact
          </button>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
