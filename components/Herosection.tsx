"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, NetworkIcon, BookOpen, Calendar } from "lucide-react";

export default function WIESTARLanding() {
  const [activeEvent, setActiveEvent] = useState('WIEmpowerHer1.0');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const events = [
    {
      id: 'WIEmpowerHer1.0',
      title: 'WIEmpowerHer 1.0',
      date: 'December 2023',
      location: 'Manzel nour junior high school',
      description: 'WIEmpowerHer 1.0 was a pivotal event that took place in December 2023 in “Manzel nour junior high school”, with the goal of empowering young women in rural areas in engineering and technology.Impact: WIE EmpowerHer 1.0 successfully combined educational content with practical experiences, ensuring that attendees not only gained technical knowledge but also enhanced their personal and professional skills. The event empowered young women to break barriers, take on leadership roles in STEM, and pursue their passions with confidence. '+
      'The combination of IoT, robotics, pitching, and soft skills sessions created a well-rounded experience, catering to both the technical and personal development of participants.',
      activities: [
        '3 soft skills sessions',
        'Robotics session',
        'IoT session',
        'Pitching competition'
      ],
      images: ['/wie1.jpg', '/wie2.jpg', '/wie5.jpg', '/wie6.jpg']
    },
    {
      id: 'WIEmpowerHer2.0',
      title: 'WIEmpowerHer 2.0',
      date: 'December 5th, 2024',
      location: 'To be announced',
      description: 'Building on the success of our first event, WIEmpowerHer 2.0 continues to inspire and empower young women in STEM. WIEmpowerHer  was an event that took place in December 2024 in “Ferchiou ”, with the goal of empowering young studnets to pursue their career in stem fields',
      activities: [
        'Advanced technical workshops',
        'Mentorship programs',
        'Innovation challenges',
        'Career development sessions'
      ],
      images: ['/wie3.jpg', '/wie4.jpg', '/wie7.jpg', '/wie8.jpg'] 
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Banner */}
      <div className="relative min-h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-10" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-8xl">
              Tomorrow's Innovators
            </span>
          </h1>
          <p className="text-3xl text-gray-700 mb-8">
            We motivate, we empower, we educate. Together we make the change.
            
          </p>
        </div>
      </div>

      {/* IEEE and WIE Definitions */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <BookOpen className="text-purple-600 w-12 h-12" />
              <h2 className="text-4xl font-bold text-gray-900">IEEE</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 1963, IEEE is a leading authority in a wide variety of areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power, and consumer electronics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <NetworkIcon className="text-purple-600 w-12 h-12" />
              <h2 className="text-4xl font-bold text-gray-900">WIE</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists.
            </p>
            <p className="text-lg text-gray-600 italic">
              Mission: To inspire, empower, and support women in technological fields, breaking down barriers and creating opportunities for women in engineering and science.
            </p>
          </motion.div>
        </div>
      </div>

      {/* WIE STAR Program */}
      <div className="container mx-auto px-4 py-16 flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Star className="text-purple-600 w-12 h-12" />
              <h2 className="text-4xl font-bold text-gray-900">
                WIE STAR Program
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              The IEEE Student-Teacher and Research Engineer/Scientist (STAR) Program is a transformative initiative designed to inspire and empower young girls to pursue careers in STEM.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <NetworkIcon className="text-purple-500 w-6 h-6" />
                <span className="text-gray-800">Encouraging girls in mathematics, science, and engineering</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="text-purple-500 w-6 h-6" />
                <span className="text-gray-800">Breaking barriers and challenging stereotypes</span>
              </div>
            </div>
            <Button 
              variant="default" 
              className="bg-purple-600 hover:bg-purple-700 text-white group"
            >
              <a href="https://wie.ieee.org/membership/outreach/"  > Learn More </a>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src="/logo_wiestar.png" 
              alt="WIE STAR Program" 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      {/* WIEmpowerHer Events */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            WIEmpowerHer Events
          </h3>
          <div className="flex justify-center mb-8">
            {events.map((event) => (
              <Button
                key={event.id}
                variant={activeEvent === event.id ? 'default' : 'outline'}
                className={`mr-4 ${
                  activeEvent === event.id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-purple-600 border-purple-600'
                }`}
                onClick={() => {
                  setActiveEvent(event.id);
                  setActiveImageIndex(0); // Reset image index when changing event
                }}
              >
                {event.title}
              </Button>
            ))}
          </div>

          {events.map((event) => (
            activeEvent === event.id && (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-3 text-purple-600" />
                    <span className="text-xl font-semibold text-gray-800">{event.date}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h4>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">Activities:</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {event.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* Main Image Display */}
                  <motion.img 
                    key={event.images[activeImageIndex]}
                    src={event.images[activeImageIndex]} 
                    alt={`${event.title} event ${activeImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg shadow-md w-full h-[400px] object-cover mb-4"
                  />
                  
                  {/* Image Thumbnails */}
                  <div className="grid grid-cols-4 gap-2">
                    {event.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setActiveImageIndex(index)}
                        className={`rounded-lg shadow-md cursor-pointer hover:opacity-75 transition-opacity 
                          ${index === activeImageIndex ? 'border-4 border-purple-600' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Mission
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <NetworkIcon className="w-12 h-12 text-purple-600" />,
                title: "Inspire",
                description: "Motivate young women to explore STEM fields"
              },
              {
                icon: <Star className="w-12 h-12 text-purple-600" />,
                title: "Educate",
                description: "Provide resources and support for learning"
              },
              {
                icon: <ArrowRight className="w-12 h-12 text-purple-600" />,
                title: "Empower",
                description: "Create pathways for future technological leaders"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}