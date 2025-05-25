// pages/blog.js
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kundenerlebnis bei Verpackungen",
      date: "October 1, 2023",
      shortText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero, totam iure excepturi soluta rerum odit. Iusto similique esse iure?",
      image: "./images/blog/customer_experience.jpg",
    },
    {
      id: 2,
      title: "Entwicklungen in der globalen Verpackungsindustrie",
      date: "September 25, 2023",
      shortText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero, totam iure excepturi soluta rerum odit. Iusto similique esse iure?",
      image: "./images/blog/developement_packaging.jpg",
    },
    {
      id: 3,
      title: "Innovative Ansätze im Verpackungsdesign",
      date: "September 15, 2023",
      shortText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero, totam iure excepturi soluta rerum odit. Iusto similique esse iure?",
      image: "./images/blog/innovatice_package.jpg",
    },
    {
      id: 4,
      title: "Frohe Pfingsten!",
      date: "Juni 8, 2025",
      shortText:
        "Wir wünschen allen ein frohes und erholsames Pfingstfest! Möge diese besondere Zeit voller Frieden, Hoffnung und gemeinsamer Momente mit euren Liebsten sein.",
      image: "./images/blog/pfingsten_gruesse.webp",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] py-16 px-6 h-full">
      <div className="max-w-4xl mx-auto pb-0">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Blog
        </h1>

        <div className="space-y-4">
          {blogPosts
            .slice()
            .reverse()
            .map((post, index) => (
              <div
                key={post.id}
                className={`flex flex-col md:flex-row gap-8 ${
                  index !== blogPosts.length - 1
                    ? "border-b border-gray-200 pb-8 sm:border-none"
                    : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-700 text-lg">{post.shortText}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
