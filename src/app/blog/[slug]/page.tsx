"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import styles from './page.module.css';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

async function getData(slug: string): Promise<Article> {
  // In a real app, you would fetch the article data from your API
  // For now, we'll return a placeholder
  return {
    id: 1,
    title: "Sample Article",
    excerpt: "This is a sample article excerpt",
    content: "This is the full content of the sample article. In a real application, this would be fetched from your API or CMS.",
    image: "https://via.placeholder.com/800x400",
    author: "John Doe",
    date: "2024-01-01"
  };
}

export default async function BlogPost() {
  const params = useParams();
  const article = await getData(params.slug as string);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/blog" className={styles.backButton}>
          <FaArrowLeft /> Back to Blog
        </Link>
        <h1>{article.title}</h1>
        <div className={styles.meta}>
          <span>By {article.author}</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.articleContent}>
          {article.content}
        </div>
      </div>
    </div>
  );
} 