import { getPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-center mb-12">
        Explore Our Latest Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}

      </div>

    </main>
  );
}