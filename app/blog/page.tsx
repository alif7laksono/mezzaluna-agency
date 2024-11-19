"use client";
import React, { useState } from "react";
import { blogData } from "@/app/lib/blogData";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function BlogPage() {
  const [filter, setFilter] = useState<{ type: string; value: string | null }>({
    type: "all",
    value: null,
  });

  const [showFilters, setShowFilters] = useState({
    categories: true,
    tags: true,
    authors: true,
  });

  const toggleFilterVisibility = (key: keyof typeof showFilters) => {
    setShowFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredBlogs =
    filter.type === "all"
      ? blogData
      : blogData.filter((post) => {
          if (filter.type === "category") return post.category === filter.value;
          if (filter.type === "tag") return post.tags.includes(filter.value!);
          if (filter.type === "author") return post.author === filter.value;
        });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 p-6 bg-zinc-950 text-white mt-20 flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-zinc-900 rounded-lg shadow-md space-y-6">
          {/* Categories */}
          <div>
            <button
              onClick={() => setFilter({ type: "all", value: null })}
              className="block w-full py-2 rounded text-white text-left hover:text-gray-400"
            >
              All Posts
            </button>
            <div
              className="flex justify-between items-center cursor-pointer mt-4"
              onClick={() => toggleFilterVisibility("categories")}
            >
              <h2 className="text-xl font-bold">Categories</h2>
              <span>{showFilters.categories ? "▲" : "▼"}</span>
            </div>
            {showFilters.categories && (
              <div className="mt-2 space-y-2">
                {[...new Set(blogData.map((post) => post.category))].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setFilter({ type: "category", value: category })
                      }
                      className={`block text-left w-full px-2 py-1 rounded ${
                        filter.type === "category" && filter.value === category
                          ? "bg-green-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-green-600"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilterVisibility("tags")}
            >
              <h2 className="text-xl font-bold">Tags</h2>
              <span>{showFilters.tags ? "▲" : "▼"}</span>
            </div>
            {showFilters.tags && (
              <div className="mt-2 space-y-2">
                {[...new Set(blogData.flatMap((post) => post.tags))].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setFilter({ type: "tag", value: tag })}
                      className={`block text-left w-full px-2 py-1 rounded ${
                        filter.type === "tag" && filter.value === tag
                          ? "bg-purple-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-purple-600"
                      }`}
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Authors */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilterVisibility("authors")}
            >
              <h2 className="text-xl font-bold">Authors</h2>
              <span>{showFilters.authors ? "▲" : "▼"}</span>
            </div>
            {showFilters.authors && (
              <div className="mt-2 space-y-2">
                {[...new Set(blogData.map((post) => post.author))].map(
                  (author) => (
                    <button
                      key={author}
                      onClick={() =>
                        setFilter({ type: "author", value: author })
                      }
                      className={`block text-left w-full px-2 py-1 rounded ${
                        filter.type === "author" && filter.value === author
                          ? "bg-yellow-500 text-white"
                          : "text-gray-400 hover:text-white hover:bg-yellow-600"
                      }`}
                    >
                      {author}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-zinc-800 rounded-lg shadow-lg transition duration-200"
                >
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <h3 className="text-lg text-gray-400 mb-2">{post.author}</h3>
                  <p className="text-md text-gray-400 mb-4">
                    {post.description}
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>Category:</strong> {post.category}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Tags:</strong> {post.tags.join(", ")}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-400">
                No blog posts found for the selected filter.
              </p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
