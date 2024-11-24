import { blogData } from "@/app/lib/blogData";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = blogData.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 bg-zinc-950 text-white">
      My Post: {slug}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-6">{post.description}</p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Author:</strong> {post.author}
      </p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Published Date:</strong> {post.publishedDate}
      </p>
      <p className="text-sm text-gray-400 mb-2">
        <strong>Category:</strong> {post.category}
      </p>
      <p className="text-sm text-gray-400">
        <strong>Tags:</strong> {post.tags.join(", ")}
      </p>
    </div>
  );
}
