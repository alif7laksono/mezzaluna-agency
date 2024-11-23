import React from "react";
import {
  FaWordpress,
  FaCode,
  FaRocket,
  FaCogs,
  FaPaintBrush,
  FaLifeRing,
} from "react-icons/fa";

const services = [
  {
    title: "WordPress Development",
    description:
      "Custom WordPress solutions, including WooCommerce and Elementor Pro, or Astra.",
    icon: <FaWordpress className="text-4xl text-white mb-4" />,
  },
  {
    title: "Front-End Development",
    description:
      "Modern, responsive designs using ReactJS, NextJS, and Tailwind CSS tailored to your business needs.",
    icon: <FaCode className="text-4xl text-white mb-4" />,
  },
  {
    title: "Website Optimization",
    description:
      "Improve website speed, SEO, and user experience with our expert optimization techniques.",
    icon: <FaRocket className="text-4xl text-white mb-4" />,
  },
  {
    title: "Custom Web Solutions",
    description:
      "Tailored web applications designed to meet unique business requirements with scalable technologies.",
    icon: <FaCogs className="text-4xl text-white mb-4" />,
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting, visually appealing landing pages designed for marketing campaigns.",
    icon: <FaPaintBrush className="text-4xl text-white mb-4" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance and technical support to keep your website running smoothly.",
    icon: <FaLifeRing className="text-4xl text-white mb-4" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className=" py-24 px-4 bg-gradient-to-t from-zinc-950 to-zinc-900 text-white animate-fadeIn"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Our Services
        </h2>

        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-zinc-950 to-zinc-800 border border-gray-700 rounded-lg p-8 shadow-md hover:shadow-lg hover:from-zinc-800 hover:to-zinc-700 transition duration-300 flex flex-col items-center text-center"
            >
              <div>{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 capitalize">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
