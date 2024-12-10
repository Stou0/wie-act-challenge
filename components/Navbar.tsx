"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Info,
  Phone,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="defendher_2.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tomorrow's innovation
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/teachers"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Teachers zone
              </a>
            </li>
            <li>
              <a
                href="/working"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Students zone
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav classNameName="bg-white p-4">
    //   <div classNameName="container mx-auto flex justify-between items-center">
    //     <Link href="/" aria-label="Go to homepage">
    //       <Image
    //         src="/defendher_2.svg"
    //         width={60}
    //         height={60}
    //         alt="Logo of our project defend her."
    //         loading="lazy"
    //         quality={100}
    //       />
    //     </Link>

    //     {/* Mobile menu button */}
    //     <button
    //       classNameName="md:hidden text-primary-foreground"
    //       onClick={() => setIsOpen(!isOpen)}
    //       aria-label={isOpen ? "Close menu" : "Open menu"}
    //     >
    //       {isOpen ? <X size={24} /> : <Menu size={24} />}
    //     </button>

    //     {/* Desktop menu */}
    //     <div classNameName="hidden md:flex space-x-8 items-center">
    //       <NavItem href="/" icon={<Home size={18} />}>
    //        <span classNameName="text-black	">
    //         Home
    //         </span>
    //       </NavItem>
    //       <NavItem href="/teachers" icon={<Info size={18} />}>
    //        <span classNameName="text-black	">
    //         Teacher Zone
    //         </span>
    //       </NavItem>
    //       <NavItem href="/working" icon={<Info size={18} />}>
    //        <span classNameName="text-black">
    //         Student Zone
    //         </span>
    //       </NavItem>
    //       <NavItem href="/about" icon={<Info size={18} />}>
    //        <span classNameName="text-black ">
    //         About
    //         </span>
    //       </NavItem>
    //       <Link href="/contact" classNameName="w-full ">
    //         <Button
    //           variant="secondary"
    //           classNameName="w-full hover:border-2 hover:border-secondary transition-all duration-300 "
    //         >
    //           <Phone size={18} classNameName="mr-2" />
    //           Contact Us
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* Mobile menu */}
    //   {isOpen && (
    //     <div classNameName="md:hidden mt-2 text-black	">
    //       <NavItem href="/" icon={<Home size={18} />} mobile>
    //         Home
    //       </NavItem>
    //       <MobileServicesDropdown />
    //       <NavItem href="/about" icon={<Info size={18} />} mobile>
    //         About
    //       </NavItem>
    //       <div classNameName="mt-2">
    //         <Button
    //           variant="secondary"
    //           classNameName="w-full hover:border-2 hover:border-secondary transition-all duration-300"
    //         >
    //           <Phone size={18} classNameName="mr-2" />
    //           Contact Us
    //         </Button>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
}

function NavItem({
  href,
  children,
  icon,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClassNaclassNamees =
    "text-primary-foreground hover:text-secondary transition-colors duration-300 flex items-center";
  const mobileClassNaclassNamees =
    "block py-2 hover:border-l-4 hover:border-secondary pl-2";
  const desktopClassNaclassNamees =
    "inline-flex hover:border-b-2 hover:border-secondary pb-1 ";

  return (
    <Link
      href={href}
      className={`${baseClassNaclassNamees} ${
        mobile ? mobileClassNaclassNamees : desktopClassNaclassNamees
      }`}
    >
      {icon}
      <span className={mobile ? "ml-2" : "ml-1"}>{children}</span>
    </Link>
  );
}

function MobileServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-foreground hover:text-secondary transition-colors duration-300 flex items-center w-full py-2 hover:border-l-4 hover:border-secondary pl-2"
      >
        <Briefcase size={18} />
        <span className="ml-2">Services</span>
        <ChevronDown size={16} className="ml-auto" />
      </button>
      {isOpen && (
        <div className="pl-6 py-2 space-y-2">
          <Link
            href="/services/web-development"
            className="block text-primary-foreground hover:text-secondary"
          >
            Web Development
          </Link>
          <Link
            href="/services/mobile-apps"
            className="block text-primary-foreground hover:text-secondary"
          >
            Mobile Apps
          </Link>
          <Link
            href="/services/cloud-solutions"
            className="block text-primary-foreground hover:text-secondary"
          >
            Cloud Solutions
          </Link>
        </div>
      )}
    </div>
  );
}
