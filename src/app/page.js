import { getPosts } from "@/lib/api";
import BlogList from "@/components/BlogList";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-slate-800">
        Explore Our Latest Blogs
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Read the latest articles on web development and modern technologies.
      </p>

      <BlogList posts={posts} />
    </main>
  );
}