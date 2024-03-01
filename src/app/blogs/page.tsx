import Link from "next/link";
import { posts } from "../data/posts";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 text-black">
      <h1 className="text-3xl font-bold mb-4 text">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="bg-white p-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p> Written by: {post.author?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
