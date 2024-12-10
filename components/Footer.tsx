"use client";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">About Us</h3>
            <p className="text-gray-600">
            We are actively engaged in various initiatives, with a core focus on advancing women in engineering.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-900 text-gray-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 text-gray-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 text-gray-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Feedback Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Your Feedback</h3>
            <p className="text-gray-600">
              Your input matters! Share your feedback and help us improve.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 IEEE WIE ISIMM SAG. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social Media Links */}
              <SocialLink
                href="https://www.facebook.com/IEEEWIEISIMMSA"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
              <SocialLink
                href="https://www.instagram.com/ieee_wie_isimm_sag?igsh=MTQ0MzV2bWJrYXl2ZQ=="
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:sba-isimm-wie@ieee.org"
                icon={<Mail size={20} />}
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
      target="_blank"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
