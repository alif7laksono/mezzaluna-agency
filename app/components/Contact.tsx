import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-t from-zinc-950 to-zinc-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-100 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">
          We’d love to hear from you! Whether you’re ready to start your project
          or just have questions, feel free to reach out to us.
        </p>

        {/* Contact Form */}
        <div className="bg-zinc-800 rounded-lg shadow-lg p-8 md:p-12 text-left">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-zinc-900 text-gray-100 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-zinc-900 text-gray-100 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Select Subject
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    className="form-radio h-4 w-4 text-zinc-600"
                  />
                  <span className="ml-2 text-gray-300">General Inquiry</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    className="form-radio h-4 w-4 text-zinc-600"
                  />
                  <span className="ml-2 text-gray-300">Support</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    className="form-radio h-4 w-4 text-zinc-600"
                  />
                  <span className="ml-2 text-gray-300">Feedback</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-zinc-900 text-gray-100 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-zinc-700 to-zinc-600 text-lg font-medium text-white rounded-lg hover:from-zinc-600 hover:to-zinc-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
