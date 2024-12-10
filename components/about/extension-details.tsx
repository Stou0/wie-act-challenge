"use client";
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const eventImages = [
  {
    src: "/img1.jpg",
    alt: "Community Gathering Event",
    title: "WIE HEAL 2.0",
    description: "IEEE WIE ISIMM Student Affinity Group Breast Cancer Awareness Day"
  },
  {
    src: "/img2.jpg",
    alt: "Tech Innovation Workshop",
    title: "WIE HEAL Preperation",
    description: "Exploring cutting-edge solutions and collaborative technologies"
  },
  {
    src: "/img3.jpg",
    alt: "Networking Conference",
    title: "Our Booth",
    description: "Connecting thought leaders and change makers worldwide"
  },
  {
    src: "/img4.jpg",
    alt: "Social Impact Symposium",
    title: "Workshops",
    description: "Exploring cutting-edge solutions and collaborative technologies"
  }
];

const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % eventImages.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + eventImages.length) % eventImages.length
    );
  };

  const currentEvent = eventImages[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        {/* Main Image */}
        <img 
          src={currentEvent.src} 
          alt={currentEvent.alt} 
          className="w-full h-[500px] object-cover transition-opacity duration-500"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">{currentEvent.title}</h2>
            <p className="text-xl">{currentEvent.description}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
        >
          <ChevronLeftIcon className="h-8 w-8 text-gray-800" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
        >
          <ChevronRightIcon className="h-8 w-8 text-gray-800" />
        </button>
      </div>

      {/* Thumbnail Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {eventImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;