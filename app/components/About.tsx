import React from "react";

const reasonsToChooseUs = [
  {
    title: "Expert Team",
    description:
      "Our team consists of experienced professionals who are skilled in WordPress, front-end, back-end, and SEO, ensuring your project is in good hands.",
  },
  {
    title: "Custom Solutions",
    description:
      "We specialize in creating fully customizable websites tailored to your specific business needs, whether it's an eCommerce platform or a brand showcase.",
  },
  {
    title: "Performance and SEO Focus",
    description:
      "We not only build visually appealing websites but also optimize them for performance and search engines, ensuring they rank well and load fast.",
  },
  {
    title: "Agile Development Process",
    description:
      "We follow an agile approach to development, allowing for flexibility and collaboration at every stage. This ensures that your project is completed on time and meets your evolving business needs.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients, maintaining open communication throughout the process. Your feedback is crucial, and we work closely with you to ensure the end product aligns with your vision and goals.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Our relationship doesn't end at launch. We provide ongoing maintenance and support, ensuring your website stays updated, secure, and performs at its best in the long run.",
  },
];

export default function About() {
  return (
    <section
      className="py-16 px-4 bg-gradient-to-t from-zinc-900 to-zinc-950 text-white h-screen flex flex-col justify-center items-center"
      id="about"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-3/4">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Why Choose Mezzaluna Studio
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Mezzaluna Studio is a full-service web agency that creates
            high-performance, visually stunning websites tailored to your
            business needs. We prioritize delivering custom solutions that align
            with your brand vision.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasonsToChooseUs.map((reason, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-lg border-2 border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer hover:opacity-80"
          >
            <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
            <p className="text-gray-300">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
