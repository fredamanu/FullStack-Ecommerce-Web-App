import React, { useState } from 'react'

import './Reviews.css'

const Reviews = () => {
  const [writeReview, setWriteReview] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    reviewTitle: '',
    reviewBody: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, rating, reviewTitle, reviewBody } = formData

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const review = {
      name: name,
      email: email,
      rating: rating,
      reviewTitle: reviewTitle,
      reviewBody: reviewBody,
    }

    console.log(review)
    setLoading(false)
    setIsFormSubmitted(true)
  }
  return (
    <div className="reviews-container">
      <div>
        <h5>Customer Reviews</h5>
        <div className="flex-container">
          <div className="overall-reviews">
            <p>No reviews yet</p>
          </div>
          <div className="write-review-container">
            <p onClick={() => setWriteReview(!writeReview)}>Write a review</p>
          </div>
        </div>
      </div>
      {writeReview && (
        <div className="review-form-container">
          <div className="divider"></div>
          {!isFormSubmitted ? (
            <div>
              <h5>Write a Review</h5>
              <div className="review-form">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChangeInput}
                />
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChangeInput}
                />
                <label htmlFor="ratings">Ratings</label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    id="5"
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="5">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    id="4"
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="4">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    id="3"
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="3">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    id="2"
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="2">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    id="1"
                    onChange={handleChangeInput}
                  />
                  <label htmlFor="1">☆</label>
                </div>
                <label htmlFor="review title">Review Title</label>
                <input
                  name="reviewTitle"
                  type="text"
                  placeholder="Give your review a title"
                  value={reviewTitle}
                  onChange={handleChangeInput}
                />
                <label htmlFor="review body">Body of Review</label>
                <textarea
                  name="reviewBody"
                  placeholder="Write your comments here"
                  value={reviewBody}
                  onChange={handleChangeInput}
                />
                <button type="button" className="p-text" onClick={handleSubmit}>
                  {loading ? 'Creating' : 'Send Review'}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for leaving a review.</h3>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Reviews
