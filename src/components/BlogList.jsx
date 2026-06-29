"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import SearchFilter from "./SearchFilter";

export default function BlogList({ posts }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const searchMatch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || post.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl">
            No blogs found.
          </div>
        )}
      </div>
    </>
  );
}