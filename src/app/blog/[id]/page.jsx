import { getPost } from "@/lib/api";
import Link from "next/link";

export default async function BlogDetails({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="text-cyan-600 hover:underline text-lg"
      >
        ← Back to Blogs
      </Link>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-xl mt-6"
      />

      <h1 className="text-5xl font-bold mt-8">
        {post.title}
      </h1>

      <div className="flex gap-6 mt-4 text-gray-500">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>

      <span className="inline-block mt-4 bg-cyan-600 text-white px-4 py-2 rounded-full">
        {post.category}
      </span>

      <article className="mt-8 text-lg leading-8 text-gray-700 whitespace-pre-line">
        {post.content}
      </article>
    </main>
  );
}