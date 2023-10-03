
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './NavBar.js';
import NavBar from './NavBar.js';
import './blogListStyle.css';

function BlogList() {
  const navigate = useNavigate(); // Initialize navigate

  // Define a state variable to store the list of blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Function to fetch the list of blog posts from the API
  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000'); 
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  // Function to navigate to the detailed view of a blog post
  const viewBlogPost = (postId) => {
    // Navigate to the detailed view page based on the post ID
    navigate(`/blog/${postId}/`);
  };

  // Fetch blog posts when the component mounts
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  
  return (
    <div>
     
      <NavBar />
      <div className="blog-posts">
      {console.log(blogPosts)}
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className='btn btn-info' onClick={() => viewBlogPost(post.id)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
