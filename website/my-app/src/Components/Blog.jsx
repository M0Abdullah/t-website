import React, { useState } from 'react';
import Classes from '../Styles/Blog.module.css';

// Sample blog post data
const postsData = [
  {
    id: 1,
    title: 'Exploring the Beauty of Paris',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero nec turpis aliquam finibus ac sit amet tortor. Sed ullamcorper, ex at pharetra lacinia, dui neque fringilla lorem, eget varius odio risus ac arcu.',
  },
  {
    id: 2,
    title: 'A Journey Through Ancient Rome',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero nec turpis aliquam finibus ac sit amet tortor. Sed ullamcorper, ex at pharetra lacinia, dui neque fringilla lorem, eget varius odio risus ac arcu.',
  },
  // Add more sample posts as needed
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle selecting a post
  const handlePostSelect = (postId) => {
    setSelectedPost(postId);
  };

  // Render blog post content
  const renderPostContent = () => {
    if (selectedPost === null) {
      return (
        <p className={Classes.postContent}>Please select a blog post to read.</p>
      );
    } else {
      const post = postsData.find(post => post.id === selectedPost);
      return (
        <div className={Classes.postContent}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      );
    }
  };

  // Render list of blog post titles
  const renderPostTitles = () => {
    return (
      <ul className={Classes.postList}>
        {postsData.map(post => (
          <li key={post.id} onClick={() => handlePostSelect(post.id)} className={selectedPost === post.id ? Classes.selectedPost : ''}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={Classes.blogContainer}>
      <h1 className={Classes.blogHeader}>Travel Blog</h1>
      <div className={Classes.blogContent}>
        <div className={Classes.postTitles}>
          {renderPostTitles()}
        </div>
        {renderPostContent()}
      </div>
    </div>
  );
}
