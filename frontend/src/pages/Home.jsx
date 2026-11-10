import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const res = await axios.post(
                'http://localhost:3000/create-post',
                formData
            );

            console.log('Post created successfully:', res.data);

            alert('Post uploaded successfully!');

            e.target.reset();

        } catch (error) {
            console.error('Error uploading post:', error);
            alert('Failed to upload post');
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                            <h3 className="mb-0">Create New Post</h3>
                            <small>Share your moments with everyone</small>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Image Upload */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Upload Image
                                    </label>

                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        className="form-control"
                                        required
                                    />

                                    <div className="form-text">
                                        Select an image to share with your followers.
                                    </div>
                                </div>

                                {/* Caption */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Caption
                                    </label>

                                    <textarea
                                        name="caption"
                                        className="form-control"
                                        rows="4"
                                        placeholder="What's on your mind?"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-3">

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg rounded-3"
                                    >
                                        <i className="bi bi-cloud-upload me-2"></i>
                                        Share Post
                                    </button>

                                    {/* Navigate to Posts */}
                                    <button
                                        type="button"
                                        className="btn btn-outline-success btn-lg rounded-3"
                                        onClick={() => navigate('/post')}
                                    >
                                        <i className="bi bi-images me-2"></i>
                                        View All Posts
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;