import React from "react";
import { projects } from "@/app/lib/projectData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
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
              className="border border-gray-700 rounded-lg p-6 bg-zinc-900 hover:bg-zinc-800 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-white capitalize">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-stone-700 hover:bg-stone-900 text-white font-medium py-2 px-4 rounded transition duration-300"
              >
                Demo Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
