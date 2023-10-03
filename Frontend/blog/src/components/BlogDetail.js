import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import './blogDetailStyle.css';
import NavBar from './NavBar';

function BlogDetail() {
  const [blogPost, setBlogPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', comment_text: '' });
  const { id } = useParams(); //  useParams to get the id from the URL
  const commentInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/blog/${id}/`);
        setBlogPost(response.data.blog_post); // Access the blog_post object from the response
        setComments(response.data.comments); // Set the comments
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  console.log(id);

  const handleCommentChange = (e) => {
    setNewComment({ ...newComment, comment_text: e.target.value });
  };

  const handleNameChange = (e) => {
    setNewComment({ ...newComment, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setNewComment({ ...newComment, email: e.target.value });
  };

  const handleAddComment = async () => {
    try {

      newComment.blog_post = id;
      // Make a POST request to add a new comment
      const response = await axios.post(`http://127.0.0.1:8000/blog/${id}/comments/`, newComment);

      // Add the new comment to the state
      setComments([...comments, response.data]);

      // Clear the input fields
      setNewComment({ name: '', email: '', comment_text: '' });

      // Optionally, scroll to the newly added comment
      if (commentInputRef.current) {
        commentInputRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };
  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar/>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <div className="comments">
        <h6>Comments</h6>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p className='print_comment'>{comment.email} : {comment.comment_text}</p>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={newComment.name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={newComment.email}
          onChange={handleEmailChange}
        />
        <textarea
          rows="4"
          cols="50"
          value={newComment.comment_text}
          onChange={handleCommentChange}
          placeholder="Add a new comment..."
        ></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <button className="back-button" onClick={handleGoBack}>Back</button>
    </div>
  );
}

export default BlogDetail;
