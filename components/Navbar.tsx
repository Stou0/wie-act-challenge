"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: null },
  { href: "/teachers", label: "Teachers Zone", icon: null },
  { href: "/working", label: "Students Zone", icon: null },
  { href: "/about", label: "About", icon: null },
  { href: "/contact", label: "Contact Us", icon: null }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            aria-label="Homepage"
          >
            <Image
              src="/defendher_2.svg"
              alt="Tomorrow's Innovation Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-semibold text-purple-800 dark:text-white">
              Tomorrow's innovation
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="space-y-2 pb-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}