"use client";
import React from 'react';
import { 
  FaAppleAlt, 
  FaRunning, 
  FaFire, 
  FaCalendarAlt, 
  FaArrowLeft, 
  FaDumbbell, 
  FaHeartbeat, 
  FaUtensils 
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

interface Article {
  userId : number ;
  id : number;
  title : string ;
  body: string;
}


 async function getData(): Promise<Article[]>   {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
 }




const Blog = async() => {
  
  const articles: Article[] = await getData();
  
  return (
    <div className="bg-white text-gray-800 font-[system-ui]" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">مدونة Hero Gym</h1>
        <p className="max-w-xl mx-auto text-lg">
          مقالات متجددة عن الصحة، التغذية، واللياقة البدنية تساعدك في تحقيق أفضل نسخة من نفسك
        </p>
      </div>

      {/* Blog List */}
      <div className={styles.container}>
        {articles.map((article, index) => (
          <Link href={`/blog/${article.id}`} className={styles.post} key={index}>
            <div className={styles.postContainer}>
              <div className={styles.imageContainer}>
                <div className={styles.category}>
                category
                </div>
                <Image 
                  className={styles.image}
                  src={"https://images.unsplash.com/photo-1592632789004-57d4354f2499?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  width={400}
                  height={250}
                  alt={article.title}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.iconWrapper} style={{color: "#ff6b00"}}>
                  <FaDumbbell />
                </div>
                <div className={styles.title}>{article.title}</div>
                <div className={styles.text}>{article.body}</div>
                <div className={styles.footer}>
                  <div className={styles.date}>
                    <FaCalendarAlt size={14} /> article date
                    
                  </div>
                  <div className={styles.readMore}>
                    اقرأ المزيد <FaArrowLeft size={14} />
                  </div>
                </div>
              </div>
            </div>        
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;