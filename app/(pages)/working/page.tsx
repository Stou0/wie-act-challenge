"use client";
import React, { useState } from "react";
import {
  CalendarIcon,
  VideoCameraIcon,
  UserGroupIcon,
  PlayCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const StudentZone = () => {
  const [activeCompetition, setActiveCompetition] = useState(null);

  const events = [
    {
      date: "05/01/2024",
      title: "Robotics Session: Introduction",
      instructor: "Mr. Muhammed Ali Baqeqa",
      meetLink: "https://meet.google.com/example-link",
      description:
        "A comprehensive introduction to robotics fundamentals, exploring basic concepts and hands-on techniques.",
      image: "/robotics.jpg",
    },
    {
      date: "12/01/2024",
      title: "IOT session: Basics of IoT",
      instructor: "Mr. Louay Jabeur",
      meetLink: "https://meet.google.com/another-link",
      description:
        "Explore the fundamentals of the Internet of Things (IoT) and its real-world applications, paving the way for smarter, interconnected technologies.",
      image: "/iot.png",
    },
  ];

  const competitions = [
    {
      name: "Robotics",
      status: "OPEN",
      description:
        "Design and build innovative robotic solutions that address real-world challenges.",
      icon: "/robotics.jpg",
    },
    {
      name: "Pitching",
      status: "OPEN",
      description:
        "Develop and present groundbreaking project ideas with compelling storytelling and innovation.",
      icon: "/pitching.jpg",
    },
    {
      name: "IOT",
      status: "SOON",
      description:
        "Explore Internet of Things technologies and create interconnected smart solutions.",
      icon: "/iot.png",
    },
  ];

  const guidanceVideos = [
    {
      title: "My Journey in Computer Science",
      speaker: "Wejden Haggi",
      thumbnailSrc: "/wejden.mp4",
      videoLink: "#",
    },
    {
      title: "Exploring Biomedical Engineering",
      speaker: "Asma Guiza",
      thumbnailSrc: "/asma.mp4",
      videoLink: "#",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Quote Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-7xl">
            The future belongs to those who prepare for it today.
          </h1>
          <p className="text-3xl text-gray-700 mb-8 mt-6">
            Discover a variety of sessions in diverse STEM fields, led by
            experts in their respective domains.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-blue-600">
                      {event.date}
                    </span>
                    <a
                      href={event.meetLink}
                      className="flex items-center text-green-600 hover:text-green-700 font-semibold"
                    >
                      <VideoCameraIcon className="h-5 w-5 mr-2" />
                      Google Meet
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">By {event.instructor}</p>
                  <p className="text-gray-500 mb-4">{event.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Competitions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className={`
                  bg-white border rounded-2xl p-6 text-center shadow-lg transition-all
                  ${
                    comp.status === "SOON"
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-xl hover:scale-105"
                  }
                `}
              >
                <div className="mb-6">
                  <img
                    src={comp.icon}
                    alt={comp.name}
                    className="w-24 h-24 mx-auto mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {comp.name}
                  <span
                    className={`
                    ml-2 text-xs px-2 py-1 rounded
                    ${
                      comp.status === "OPEN"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                  >
                    {comp.status}
                  </span>
                </h3>
                <p className="text-gray-600 mb-4">{comp.description}</p>
                {comp.status === "OPEN" && (
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Student Guidance
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Dive into a collection of insightful videos where students share
            their experiences and passions in their fields of study. Get
            inspired, learn about diverse academic journeys, and discover what
            makes each discipline unique. these stories will guide you toward
            your future!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {guidanceVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative flex flex-row justify-center items-center p-6">
                  <video width="320" height="240" controls>
                    <source src={video.thumbnailSrc} type="video/mp4" />
                  </video>
                  {/* <img 
                    src={video.thumbnailSrc} 
                    alt={video.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <PlayCircleIcon className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Speaker: {video.speaker}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentZone;
