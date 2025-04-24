import React from "react";
import { FaDumbbell } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData(id: string): Promise<Article> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ 
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Article - ${params.id}`,
    description: "Hero Gym Blog Article",
  };
}

export default async function Post({ 
  params,
}: {
  params: { id: string };
}) {
  const article: Article = await getData(params.id);

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-orange-600 text-white py-20 px-6 text-center">
        <FaDumbbell size={50} className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{article.title}</h1>
        <p className="text-sm text-orange-100">description</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse gap-10 items-start">
        {/* Article Image */}
        <div className="w-full md:w-3/8 h-64 md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg"
            alt="Article Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Text */}
        <div className="w-full md:w-5/8 text-lg leading-relaxed space-y-6">
          <p>{article.body}</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-100 text-center py-12 px-4">
        <h3 className="text-xl font-semibold mb-4 text-orange-700">مستعد تبدأ رحلتك؟</h3>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-700 transition">
          اشترك الآن في Hero Gym
        </button>
      </div>
    </div>
  );
}
