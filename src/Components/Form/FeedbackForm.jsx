// src/Components/FeedbackForm.jsx
import React, { useState, useEffect, useRef } from "react";
import "./FeedbackForm.css";
import { db } from "../../Services/firebase.jsx"; 
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    feedback: "",
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const bottomRef = useRef(null);

  // 🔹 Fetch feedbacks from Firestore
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const querySnapshot = await getDocs(collection(db, "feedbacks"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  // 🔹 Scroll to the newest feedback
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [feedbacks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Auto-expand textarea
    if (name === "feedback") {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  // 🔹 Save feedback to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) {
      alert("All fields are required!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "feedbacks"), {
        ...formData,
        createdAt: new Date(),
      });

      setFeedbacks([...feedbacks, { id: docRef.id, ...formData }]);
      setFormData({ name: "", email: "", rating: "5", feedback: "" });
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };

  // 🔹 Delete all feedbacks from Firestore
  const clearAll = async () => {
    try {
      for (const fb of feedbacks) {
        await deleteDoc(doc(db, "feedbacks", fb.id));
      }
      setFeedbacks([]);
    } catch (error) {
      console.error("Error deleting feedbacks:", error);
    }
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
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
          rows={2}
        />

        <button type="submit">Submit</button>
      </form>

      <div className="feedback-list">
        <h2>Submitted Feedback</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul>
            {feedbacks.map((fb) => (
              <li key={fb.id}>
                <strong>{fb.name}</strong> ({fb.email}) ⭐ {fb.rating}
                <br />
                {fb.feedback}
              </li>
            ))}
            <div ref={bottomRef} />
          </ul>
        )}
      </div>

    </div>
  );
};

export default FeedbackForm;
