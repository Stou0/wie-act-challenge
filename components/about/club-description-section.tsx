"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Code, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clubFeatures = [
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Inclusive Collaboration",
    description: "Build a diverse community where women develop innovative solutions to global challenges.",
  },
  {
    icon: <Code className="w-12 h-12 text-purple-600" />,
    title: "Empower Women in Tech",
    description: "Lead initiatives to enable women to excel in engineering and technology.",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-purple-600" />,
    title: "WIE Strive to",
    description: "Facilitate the development of programs and activities that promote the entry into, and retention of, women in engineering programs.",
  },
  {
    icon: <Zap className="w-12 h-12 text-purple-600" />,
    title: "Skills for the Future",
    description: "Equip women with expertise in AI, IoT, and 4IR technologies for a safer, inclusive digital world.",
  },
];

export function ClubDescriptionSectionComponent() {
  const [activeTab, setActiveTab] = useState("overview");

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
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Our IEEE WIE ISIMM Student Affinity Group
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            SparkHer Mind: Where Women Ignite the Flames of STEM Brilliance.
            IEEE WIE is one of the world&apos;s leaders in changing the face of engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Button
              variant={activeTab === "overview" ? "default" : "outline"}
              className={`mr-4 ${
                activeTab === "overview" 
                ? 'bg-purple-600 text-white' 
                : 'text-purple-600 border-purple-600'
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </Button>
            <Button
              variant={activeTab === "features" ? "default" : "outline"}
              className={`${
                activeTab === "features" 
                ? 'bg-purple-600 text-white' 
                : 'text-purple-600 border-purple-600'
              }`}
              onClick={() => setActiveTab("features")}
            >
              Vision 
            </Button>
          </div>

          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-purple-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                About Our IEEE WIE ISIMM Student Affinity Group
              </h3>
              <p className="text-gray-700 mb-6">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers committed to promoting women engineers
                and scientists while inspiring girls worldwide to pursue
                careers in engineering and science. Our mission is to connect,
                support, and inspire women and girls globally, facilitating
                their recruitment and retention in STEM fields. 
              </p>
              <p className="text-gray-700 mb-6">
                Now, turning to IEEE WIE ISIMM SAG, we are actively engaged in various
                initiatives, with a core focus on advancing women in
                engineering. Our efforts are geared towards enhancing the hard
                skills of our members, providing opportunities for skill
                development, leadership training, and promoting career growth
                for all participants.
              </p>
              <p className="text-gray-700 mb-6">
                We&apos;ve organized several impactful events, including WIEMpower Her 1.0, 
                AI Pulse 1.0, WIE Heal 3.0, WIE Guide 1.0, among many others, 
                offering numerous learning and development sessions.
              </p>
              <a href="https://www.facebook.com/IEEEWIEISIMMSA" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="default" 
                  className="bg-purple-600 hover:bg-purple-700 text-white group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          )}

          {activeTab === "features" && (
            <div className="grid md:grid-cols-2 gap-8">
              {clubFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}