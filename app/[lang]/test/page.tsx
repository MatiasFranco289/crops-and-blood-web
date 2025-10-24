// app/blog/page.tsx
import React from "react";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  content: string;
  votes: number;
  comments: number;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Mi primer post",
    date: "2025-10-24",
    content:
      "Este es el contenido completo de mi primer post, con varias líneas y texto de ejemplo.",
    votes: 12,
    comments: 3,
  },
  {
    id: 2,
    title: "Explorando NextJS",
    date: "2025-10-20",
    content:
      "Algunos tips y trucos para trabajar con NextJS y TypeScript en proyectos reales.",
    votes: 34,
    comments: 5,
  },
  {
    id: 3,
    title: "Tema oscuro FTW",
    date: "2025-10-18",
    content:
      "Beneficios del tema oscuro y cómo implementarlo correctamente en tus proyectos web.",
    votes: 21,
    comments: 4,
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Mi Blog estilo Reddit</h1>
        <p className="text-gray-400 mt-1">
          Posts en un feed vertical con votos y comentarios
        </p>
      </header>

      <main className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-800 rounded-lg shadow-md p-4 md:p-6 flex hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center pr-4 border-r border-gray-700 mr-4 text-gray-400">
              <button className="mb-2">▲</button>
              <span>{post.votes}</span>
              <button className="mt-2">▼</button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-200 leading-relaxed mb-3">
                {post.content}
              </p>
              <p className="text-gray-400 text-sm">
                {post.comments} comentarios
              </p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;
