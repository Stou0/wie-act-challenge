"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Maram Haggui",
    role: "Chairwoman",
    image: "/maram.png",
    linkedin: "https://www.linkedin.com/in/codetun/",
    github: "https://github.com/codeTun",
    portfolio: "https://digitaldreams.tn/",
  },
  {
    name: "Nada Manai",
    role: "Vice-chair",
    image: "/nada.png",
    linkedin: "https://www.linkedin.com/in/hamza-haj-mtir-3345a8220/",
    github: "https://github.com/HamzaHajMtir1",
    portfolio: "https://www.hamzahajmtir.tn/",
  },
  {
    name: "Hamis Maaroufi",
    role: "Secretary",
    image: "/hamis.png",
    linkedin: "https://www.linkedin.com/in/hamis-maaroufi-314747307/",
    github: "https://github.com/Hamis1211",
  },
  {
    name: "Cyrine Chamroukhi",
    role: "HR Manager",
    image: "/cyrine.png",
    linkedin: "https://www.linkedin.com/in/ben-slama-taieb-b4255b243/",
    github: "https://github.com/TaiebBS",
  },
  {
    name: "Aziz Ferchichi",
    role: "Tresurer",
    image: "/aziz.svg",
    linkedin: "https://www.linkedin.com/in/aziz-ferchichi-499742218/",
    github: "https://github.com",
  },
  {
    name: "Aziz Amor",
    role: "Marketing Manager",
    image: "/aziza.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export function TeamSectionComponent() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Exceptional Team
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dedicated individuals working together to empower women in STEM and
            drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-purple-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="ml-[120px] w-60 h-64 object-cover "
                loading="lazy"
                quality={100}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}