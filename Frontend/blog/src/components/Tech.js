import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function TechList() {
  const [techPosts, setTechPosts] = useState([]);
  // const [newComment, setNewComment] = useState({ name: '', email: '', comment_text: '' });
  const navigate = useNavigate();

  const fetchTechPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/tech/');
      setTechPosts(response.data);
    } catch (error) {
      console.error('Error fetching tech blog posts:', error);
    }
  };

  // const handleSubmitComment = async (e, postId) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post(`http://127.0.0.1:8000/blog/${postId}/comments/`, {
  //       name: newComment.name,
  //       email: newComment.email,
  //       comment_text: newComment.comment_text,
  //       blog_post: postId, 
  //     });

      // Clear the form and update the list of comments
  //     setNewComment({ name: '', email: '', comment_text: '' });
  //     fetchTechPosts();
  //   } catch (error) {
  //     console.error('Error adding comment:', error);
  //   }
  // };

  useEffect(() => {
    fetchTechPosts();
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };

  return (
    <div>
      
      <NavBar />
      
      <div className="blog-posts">
        {techPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>

            {/* Render comments
            <div className="comments">
              <h4>Comments:</h4>
              {post.comments.map((comment, index) => (
                <div key={index}>
                 
                  <p>{comment.email} : {comment.comment_text}</p>
                  
                </div>
              ))} */}

              {/*  Form to submit comments */}
              {/* <form onSubmit={(e) => handleSubmitComment(e, post.id)}>
                <input
                  type="text"
                  placeholder="Name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                />
                <textarea
                  placeholder="Comment"
                  value={newComment.comment_text}
                  onChange={(e) => setNewComment({ ...newComment, comment_text: e.target.value })}
                />
                <button type="submit">Post Comment</button>
              </form>
            </div> */}
          </div>
        ))}
      </div>
      <button className="back-button" onClick={handleGoBack}>Back</button>
    </div>
  );
}

export default TechList;
