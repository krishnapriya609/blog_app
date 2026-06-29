import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="text-sm text-cyan-600 font-semibold">
            {post.category}
          </span>

          <h2 className="text-2xl font-bold mt-2">
            {post.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {post.author}
          </p>

          <p className="text-gray-700 mt-4 line-clamp-3">
            {post.content}
          </p>

          <p className="mt-5 text-sm text-gray-400">
            {post.date}
          </p>

        </div>
      </div>
    </Link>
  );
}