import React, { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  const [loading, setLoading] = useState(false);
  const [postLoading,setPostLoading]=useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            setPosts(data);
          } else {
            setError('Error fetching posts. Please try again.');
          }
          setLoading(false);
        }
      };

      xhr.onerror = function () {
        setError('Network error occurred while trying to fetch posts.');
        setLoading(false);
      };

      setLoading(true);
      xhr.send();
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    

    if (!formData.title.trim() || !formData.body.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 201) {
          const data = JSON.parse(xhr.responseText);
          setPosts([...posts, data]);
          setError('successfull added post.');
          setFormData({
            title: '',
            body: '',
          });
        } else {
          setError('Error adding the post. Please try again.');
        }
        setPostLoading(false);
      }
    };

    xhr.onerror = function () {
      setError('Network error occurred while trying to add the post.');
      setPostLoading(false);
    };

    setPostLoading(true);
    xhr.send(JSON.stringify(formData));
  };
  return (
    <div>
      {loading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
        </div>
      )}
      {/* {loading && (
        <div className="dot-loading-indicator">
          <div className="dot-spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )} */}
      

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {postLoading && (
        <div className="dot-loading-indicator">
          <div className="dot-spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleFormSubmit} className="post-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Add Post</button>
      </form>
    </div>
  );
}

export default App;
