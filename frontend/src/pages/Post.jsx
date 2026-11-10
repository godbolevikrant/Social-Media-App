import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {

  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setPost(res.data.posts);
      })
      .catch((err) => {
        console.log('Error fetching posts:', err);
      });
  }, []);

  return (
    <section className="container py-5">

      {/* Header and Home Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="text-primary mb-0">
          All Posts
        </h2>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-house-door me-2"></i>
          Back to Home
        </button>

      </div>

      <div className="row justify-content-center">

        {post.map((item) => (
          <div className="col-md-6 col-lg-5 mb-4" key={item._id}>

            <div className="card shadow-sm border-0 rounded-4">

              <div className="card-body">

                <h5 className="card-title fw-bold">
                  User Post
                </h5>

                {item.image ? (
                  <img
                    src={item.image}
                    alt="Post"
                    className="img-fluid rounded-3 mb-3 w-100"
                  />
                ) : (
                  <div className="bg-light rounded-3 p-5 text-center mb-3">
                    <i className="bi bi-image fs-1 text-secondary"></i>
                    <p className="text-muted mb-0">
                      No image available
                    </p>
                  </div>
                )}

                <p className="card-text">
                  {item.caption}
                </p>

                <div className="d-flex justify-content-between">

                  <button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-heart me-1"></i>
                    Like
                  </button>

                  <button className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-chat me-1"></i>
                    Comment
                  </button>

                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Post;