import React, { useState, useEffect } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    feedback: "",
  });
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(stored);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) {
      alert("All fields are required!");
      return;
    }

    const updated = [...feedbacks, formData];
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));

    setFormData({ name: "", email: "", rating: "5", feedback: "" });
  };

  const clearAll = () => {
    setFeedbacks([]);
    localStorage.removeItem("feedbacks");
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select name="rating" value={formData.rating} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <div className="feedback-list">
        <h2>Submitted Feedback</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul>
            {feedbacks.map((fb, i) => (
              <li key={i}>
                <strong>{fb.name}</strong> ({fb.email}) ⭐ {fb.rating}
                <br />
                {fb.feedback}
              </li>
            ))}
          </ul>
        )}
      </div>

      {feedbacks.length > 0 && (
        <button onClick={clearAll} className="delete-btn">
          Delete All
        </button>
      )}
    </div>
  );
};

export default FeedbackForm;
