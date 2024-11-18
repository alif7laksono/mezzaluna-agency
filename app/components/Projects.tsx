import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A responsive e-commerce platform with payment integration.",
  },
  {
    title: "Portfolio Website",
    description: "A clean and professional portfolio site for showcasing work.",
  },
  {
    title: "Real Estate Website",
    description: "A dynamic real estate platform with property listings.",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with content management features.",
  },
  {
    title: "Landing Page",
    description: "A high-conversion landing page for product promotions.",
  },
  {
    title: "Business Website",
    description: "A corporate business website with modern design.",
  },
  {
    title: "Photography Portfolio",
    description:
      "A visually stunning portfolio to showcase photography work with gallery features.",
  },
  {
    title: "Educational Platform",
    description:
      "An interactive learning site with courses, quizzes, and progress tracking.",
  },
  {
    title: "Event Management Website",
    description:
      "A platform for managing events, including booking, schedules, and attendee management.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-white text-center sm:text-left sm:mb-0">
            Our Projects
          </h2>
          <h4 className="text-lg text-gray-400 sm:ml-4 text-center sm:text-left">
            Explore Our Stunning Works
          </h4>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 hover:bg-zinc-900 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-3=500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
