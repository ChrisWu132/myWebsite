import React from 'react';
import { useState } from 'react';

export function Blog() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development and what it means for developers in 2024 and beyond.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Applications with React",
      excerpt: "Best practices and patterns for creating maintainable React applications that can grow with your user base.",
      date: "March 10, 2024",
      readTime: "7 min read"
    }
  ]);

  const addPost = (newPost) => {
    setBlogPosts([...blogPosts, { ...newPost, id: Date.now() }]);
  };

  const deletePost = (postId) => {
    setBlogPosts(blogPosts.filter(post => post.id !== postId));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 font-inter">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-navy-800/50 rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-100 mb-3 hover:text-electric-blue transition-colors duration-300">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <a 
                  href="#" 
                  className="text-electric-blue hover:text-white transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}