import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          NextBlog
        </Link>

        <div className="space-x-6">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}