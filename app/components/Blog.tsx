import React from "react";
import { blogData } from "@/app/lib/blogData";

export default function BlogList() {
  return (
    <section className="py-16 px-4 bg-zinc-900 text-white" id="blog">
      <h2 className="text-4xl font-bold text-center mb-12">Our Blogs</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <li
            key={blog.id}
            className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform"
          >
            <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
            <p className="text-lg text-gray-300 mb-4">{blog.description}</p>
            <span className="block text-sm text-gray-500">
              By {blog.author} on {blog.publishedDate}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
