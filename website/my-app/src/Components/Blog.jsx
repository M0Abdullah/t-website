import React, { useState } from 'react';
import Classes from '../Styles/Blog.module.css';

// Sample blog post data (initial data)
const initialPostsData = [
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
  const [postsData, setPostsData] = useState(initialPostsData);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPostData, setNewPostData] = useState({
    title: '',
    content: ''
  });

  const handlePostSelect = (postId) => {
    setSelectedPost(postId);
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    // Generate a new unique id for the new post
    const newPostId = postsData.length + 1;

    // Create a new post object with the form data
    const newPost = {
      id: newPostId,
      title: newPostData.title,
      content: newPostData.content,
    };

    // Update the postsData state to include the new post
    setPostsData([...postsData, newPost]);

    // Reset the form data after adding the new post
    setNewPostData({
      title: '',
      content: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({
      ...newPostData,
      [name]: value
    });
  };

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
        <div className={Classes.addPostForm}>
          <h2>Add New Blog Post</h2>
          <form onSubmit={handleAddPost} className={Classes.form}>
            <div className={Classes.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newPostData.title}
                onChange={handleChange}
                required
                className={Classes.input}
              />
            </div>
            <div className={Classes.formGroup}>
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={newPostData.content}
                onChange={handleChange}
                required
                className={Classes.textarea}
              />
            </div>
            <button type="submit" className={Classes.addButton}>Add Post</button>
          </form>
        </div>
        <div className={Classes.postSection}>
          <div className={Classes.postTitles}>
            {renderPostTitles()}
          </div>
          <div className={Classes.postContentContainer}>
            {renderPostContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
